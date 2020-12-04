<?php

class UBHTTP
{
    public static $powered_by_header_regex  = '/^X-Powered-By: (.+)$/i';
    public static $form_confirmation_url_regex = '/(.+)\/[a-z]+-form_confirmation\.html/i';
    public static $lightbox_url_regex = '/(.+)\/[a-z]+-[0-9]+-lightbox\.html/i';
    public static $variant_url_regex = '/(.+)\/[a-z]+\.html/i';
    public static $pie_htc_url = '/PIE.htc';
    // Suppress Etag and Last-Modified so that browser doesn't send
    // If-None-Match and If-Modified-Since header (to bypass front-end caches)
    // @codingStandardsIgnoreLine
    public static $response_header_whitelist = '/^(Content-Type:|Location:|Link:|Content-Location:|Set-Cookie:|X-Server-Instance:|X-Unbounce-PageId:|X-Unbounce-Variant:|X-Unbounce-VisitorID:)/i';
    public static $request_header_blacklist = '/^(Accept-Encoding:)/i';
    public static $location_header_regex = '/^(Location:)/i';
    public static $cookie_whitelist = array('ubvs', 'ubpv', 'ubvt', 'hubspotutk');

    public static function is_private_ip_address($ip_address)
    {
        return !filter_var(
            $ip_address,
            FILTER_VALIDATE_IP,
            FILTER_FLAG_NO_PRIV_RANGE + FILTER_FLAG_NO_RES_RANGE
        );
    }

    public static function cookie_string_from_array($cookies)
    {
        $join_cookie_values = function ($k, $v) {
            return $k . '=' . $v;
        };
        $cookie_strings = array_map(
            $join_cookie_values,
            array_keys($cookies),
            $cookies
        );
        return join('; ', $cookie_strings);
    }

    private static function fetch_header_value_function($regex)
    {
        return function ($header_string) use ($regex) {
            $matches = array();
            preg_match(
                $regex,
                $header_string,
                $matches
            );
            return $matches[1];
        };
    }

    public static function rewrite_x_powered_by_header($header_string, $existing_headers)
    {
        $fetch_powered_by_value = UBHTTP::fetch_header_value_function(UBHTTP::$powered_by_header_regex);

        $existing_powered_by = preg_grep(
            UBHTTP::$powered_by_header_regex,
            $existing_headers
        );

        $existing_powered_by = array_map(
            $fetch_powered_by_value,
            $existing_powered_by
        );

        return 'X-Powered-By: ' .
                            join($existing_powered_by, ', ') . ', ' .
                            $fetch_powered_by_value($header_string);
    }

    public static function get_proxied_for_header(
        $forwarded_for,
        $current_ip
    ) {
        if ($forwarded_for !== null &&
         (UBConfig::allow_public_address_x_forwarded_for() ||
        UBHTTP::is_private_ip_address($current_ip))) {
            $proxied_for = $forwarded_for;
        } else {
            $proxied_for = $current_ip;
        }
        return array('X-Proxied-For' => $proxied_for);
    }

    public static function stream_headers_function($existing_headers)
    {
        return function ($curl, $header_string) use ($existing_headers) {
            $http_status_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);

            http_response_code($http_status_code);

            if (preg_match(UBHTTP::$powered_by_header_regex, $header_string) == 1) {
                $result = UBHTTP::rewrite_x_powered_by_header($header_string, $existing_headers);
                header($result);
            } elseif (preg_match(UBHTTP::$response_header_whitelist, $header_string)) {
                // false means don't replace the exsisting header
                header($header_string, false);
            }

            // We must show curl that we've processed every byte of the input header
            return strlen($header_string);
        };
    }

    public static function stream_response_function()
    {
        return function ($curl, $string) {
            // Stream the body to the client
            echo $string;

            // We must show curl that we've processed every byte of the input string
            return strlen($string);
        };
    }

    public static function determine_protocol($server_global, $wp_is_ssl)
    {
        $forwarded_proto = UBUtil::array_fetch($server_global, 'HTTP_X_FORWARDED_PROTO');
        $request_scheme = UBUtil::array_fetch($server_global, 'REQUEST_SCHEME');
        $script_uri = UBUtil::array_fetch($server_global, 'SCRIPT_URI');
        $script_uri_scheme = parse_url($script_uri, PHP_URL_SCHEME);
        $https = UBUtil::array_fetch($server_global, 'HTTPS', 'off');

        UBLogger::debug_var('UBHTTP::forwarded_proto', $forwarded_proto);
        UBLogger::debug_var('UBHTTP::request_scheme', $request_scheme);
        UBLogger::debug_var('UBHTTP::script_uri', $script_uri);
        UBLogger::debug_var('UBHTTP::script_uri_scheme', $script_uri_scheme);
        UBLogger::debug_var('UBHTTP::https', $https);

        // X-Forwarded-Proto should be respected first, as it is what the end
        // user will see (if Wordpress is behind a load balancer).
        if (UBHTTP::is_valid_protocol($forwarded_proto)) {
            return $forwarded_proto . '://';
        } // Wordpress' is_ssl() may return the correct boolean for http/https if
        // the site was setup properly.
        elseif ($wp_is_ssl || !is_null($https) && $https !== 'off') {
            return 'https://';
        } // Next use REQUEST_SCHEME, if it is available. This is the recommended way
        // to get the protocol, but it is not available on all hosts.
        elseif (UBHTTP::is_valid_protocol($request_scheme)) {
            return $request_scheme . '://';
        } // Next try to pull it out of the SCRIPT_URI. This is also not always available.
        elseif (UBHTTP::is_valid_protocol($script_uri_scheme)) {
            return $script_uri_scheme . '://';
        } // We default to http as most HTTPS sites will also have HTTP available.
        else {
            return 'http://';
        }
    }

    private static function is_valid_protocol($protocol)
    {
        return $protocol === 'http' || $protocol === 'https';
    }

  // taken from: http://stackoverflow.com/a/13036310/322727
    public static function convert_headers_to_curl($headers)
    {
        // map to curl-friendly format
        $req_headers = array();
        array_walk($headers, function (&$v, $k) use (&$req_headers) {
            $req_headers[] = $k . ": " . $v;
        });

        return $req_headers;
    }

    public static function stream_request(
        $method,
        $target_url,
        $headers0,
        $user_agent
    ) {
        // Always add this header to responses to show it comes from our plugin.
        header("X-Unbounce-Plugin: 1", false);
        if (UBConfig::use_curl()) {
            return UBHTTP::stream_request_curl(
                $method,
                $target_url,
                $headers0,
                $user_agent
            );
        } else {
            return UBHTTP::stream_request_wp_remote(
                $method,
                $target_url,
                $headers0,
                $user_agent
            );
        }
    }

    private static function stream_request_wp_remote(
        $method,
        $target_url,
        $headers0,
        $user_agent
    ) {
        $args = array(
            'method' => $method,
            'user-agent' => $user_agent,
            'redirection' => 0,
            'timeout' => 30,
            'headers' => UBHTTP::prepare_request_headers($headers0, true)
            );
        if ($method == 'POST') {
            $args['body'] = file_get_contents('php://input');
        }

        $resp = wp_remote_request($target_url, $args);
        if (is_wp_error($resp)) {
            $message = "Error proxying to '" . $target_url . "': " . $resp->get_error_message();
            UBLogger::warning($message);
            http_response_code(500);
            return array(false, $message);
        } else {
            http_response_code($resp['response']['code']);
            $response_headers = $resp['headers'];
            UBHTTP::set_response_headers($response_headers);
            echo $resp['body'];
            return array(true, null);
        }
    }

    public static function prepare_request_headers($base_h)
    {
        $forwarded_for = UBUtil::array_fetch($_SERVER, 'HTTP_X_FORWARDED_FOR');
        $remote_ip = UBUtil::array_fetch($_SERVER, 'REMOTE_ADDR');

        $filtered_h = array();
        array_walk($base_h, function ($v, $k) use (&$filtered_h) {
            if (!preg_match(UBHTTP::$request_header_blacklist, $k . ": " . $v)) {
                $filtered_h[$k] = $v;
            }
        });

        $filtered_h = UBHTTP::sanitize_cookies($filtered_h);

        $filtered_h = array_merge($filtered_h, UBHTTP::get_proxied_for_header(
            $forwarded_for,
            $remote_ip
        ));
        return $filtered_h;
    }

    public static function sanitize_cookies($headers)
    {
        $cookie_key = "Cookie";
        if (!array_key_exists($cookie_key, $headers)) {
            $cookie_key = "cookie"; // fallback to trying lowercase
            if (!array_key_exists($cookie_key, $headers)) {
                return $headers;
            }
        }

        $cookies_to_forward = UBUtil::array_select_by_key(
            UBHTTP::cookie_array_from_string($headers[$cookie_key]),
            UBHTTP::$cookie_whitelist
        );
        if (sizeof($cookies_to_forward) > 0) {
            $headers[$cookie_key] = UBHTTP::cookie_string_from_array($cookies_to_forward);
        }
        return $headers;
    }

    public static function cookie_array_from_string($cookie_string)
    {
        $cookie_kv_array = array();
        $cookie_flat_array = explode('; ', $cookie_string);
        foreach ($cookie_flat_array as $itm) {
            list($key, $val) = explode('=', $itm, 2);
            $cookie_kv_array[$key] = $val;
        }
        return $cookie_kv_array;
    }

    public static function set_response_headers($headers)
    {
        foreach ($headers as $h_key => $h_value) {
            if (preg_match(UBHTTP::$response_header_whitelist, $h_key . ":")) {
                if (is_array($h_value)) {
                    foreach ($h_value as $header_item) {
                        header($h_key . ': ' . $header_item, false);
                    }
                } else {
                    header($h_key . ': ' . $h_value, false);
                }
            }
        }
    }


    private static function stream_request_curl(
        $method,
        $target_url,
        $headers0,
        $user_agent
    ) {
        $base_response_headers = headers_list();

        $headers1 = UBHTTP::prepare_request_headers($headers0);
        $headers = UBHTTP::convert_headers_to_curl($headers1);

        UBLogger::debug_var('target_url', $target_url);
        UBLogger::debug_var('original_headers', print_r($headers0, true));
        UBLogger::debug_var('sent_headers', print_r($headers, true));

        $stream_headers = UBHTTP::stream_headers_function($base_response_headers);
        $stream_body = UBHTTP::stream_response_function();
        $curl = curl_init();
        // http://php.net/manual/en/function.curl-setopt.php
        $curl_options = array(
        CURLOPT_URL => $target_url,
        CURLOPT_POST => $method == "POST",
        CURLOPT_CUSTOMREQUEST => $method,
        CURLOPT_USERAGENT => $user_agent,
        CURLOPT_HTTPHEADER => $headers,
        CURLOPT_HEADERFUNCTION => $stream_headers,
        CURLOPT_WRITEFUNCTION => $stream_body,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_TIMEOUT => 30
        );

        if ($method == "POST") {
            // Use raw post body to allow the same post key to occur more than once
            $curl_options[CURLOPT_POSTFIELDS] = file_get_contents('php://input');
        }

        curl_setopt_array($curl, $curl_options);
        $resp = curl_exec($curl);
        if (!$resp) {
            $message = "Error proxying to '" . $target_url . "': " . curl_error($curl) . " - Code: " . curl_errno($curl);
            UBLogger::warning($message);
            if (UBHTTP::is_location_response_header_set()) {
                UBLogger::debug("The location header was set despite the cURL error. Assuming it's safe to let the response flow back");
                $result = array(true, null);
            } else {
                http_response_code(500);
                $result = array(false, $message);
            }
        } else {
            $result = array(true, null);
        }

        curl_close($curl);

        return $result;
    }

    private static function is_location_response_header_set()
    {
        $resp_headers = headers_list();
        foreach ($resp_headers as $value) { //headers at this point are raw strings, not K -> V
            if (preg_match(UBHTTP::$location_header_regex, $value)) {
                return true;
            }
        }
        return false;
    }

    public static function is_extract_url_proxyable(
        $proxyable_url_set,
        $extract_regex,
        $match_position,
        $url
    ) {
        $matches = array();
        $does_match = preg_match(
            $extract_regex,
            $url,
            $matches
        );

        return $does_match && in_array($matches[1], $proxyable_url_set);
    }

    public static function is_confirmation_dialog($proxyable_url_set, $url_without_protocol)
    {
        return UBHTTP::is_extract_url_proxyable(
            $proxyable_url_set,
            UBHTTP::$form_confirmation_url_regex,
            1,
            $url_without_protocol
        );
    }

    public static function is_lightbox($proxyable_url_set, $url_without_protocol)
    {
        return UBHTTP::is_extract_url_proxyable(
            $proxyable_url_set,
            UBHTTP::$lightbox_url_regex,
            1,
            $url_without_protocol
        );
    }

    public static function is_variant($proxyable_url_set, $url_without_protocol)
    {
        return UBHTTP::is_extract_url_proxyable(
            $proxyable_url_set,
            UBHTTP::$variant_url_regex,
            1,
            $url_without_protocol
        );
    }

    public static function is_tracking_link($proxyable_url_set, $url_without_protocol)
    {
        return UBHTTP::is_extract_url_proxyable(
            $proxyable_url_set,
            "/^(.+)?\/(clkn|clkg)\/?/",
            1,
            $url_without_protocol
        );
    }

    public static function get_url_purpose($proxyable_url_set, $http_method, $url)
    {
        $host = parse_url($url, PHP_URL_HOST);
        $path = rtrim(parse_url($url, PHP_URL_PATH), '/');
        $url_without_protocol = $host . $path;

        UBLogger::debug_var('get_url_purpose $host', $host);
        UBLogger::debug_var('get_url_purpose $path', $path);
        UBLogger::debug_var('get_url_purpose $url_without_protocol', $url_without_protocol);

        if ($http_method == 'GET' && $path == '/_ubhc') {
            return 'HealthCheck';
        } elseif ($http_method == "POST" &&
        preg_match("/^\/(fsn|fsg|fs)\/?$/", $path)) {
            return "SubmitLead";
        } elseif ($http_method == "GET" &&
              UBHTTP::is_tracking_link($proxyable_url_set, $url_without_protocol)) {
            return "TrackClick";
        } elseif (($http_method == "GET" || $http_method == "POST") &&
               (in_array($url_without_protocol, $proxyable_url_set) ||
                UBHTTP::is_confirmation_dialog($proxyable_url_set, $url_without_protocol) ||
                UBHTTP::is_lightbox($proxyable_url_set, $url_without_protocol) ||
                UBHTTP::is_variant($proxyable_url_set, $url_without_protocol))) {
            return "ViewLandingPage";
        } elseif ($http_method == "GET" && $path == UBHTTP::$pie_htc_url) {
            // proxy PIE.htc
            return "ViewLandingPage";
        } else {
            return null;
        }
    }
}
