<?php

class UBConfig
{

    const UB_PLUGIN_NAME           = 'ub-wordpress';
    const UB_CACHE_TIMEOUT_ENV_KEY = 'UB_WP_ROUTES_CACHE_EXP';
    const UB_USER_AGENT            = 'Unbounce WP Plugin 1.0.45';
    const UB_VERSION               = '1.0.45';

  // Option keys
    const UB_ROUTES_CACHE_KEY        = 'ub-route-cache';
    const UB_PAGE_SERVER_DOMAIN_KEY  = 'ub-page-server-domain';
    const UB_API_URL_KEY             = 'ub-api-url';
    const UB_API_CLIENT_ID_KEY       = 'ub-api-client-id';
    const UB_AUTHORIZED_DOMAINS_KEY  = 'ub-authorized-domains';
    const UB_HAS_AUTHORIZED_KEY      = 'ub-has-authorized';
    const UB_USER_ID_KEY             = 'ub-user-id';
    const UB_DOMAIN_ID_KEY           = 'ub-domain-id';
    const UB_CLIENT_ID_KEY           = 'ub-client-id';
    const UB_PROXY_ERROR_MESSAGE_KEY = 'ub-proxy-error-message';
    const UB_ALLOW_PUBLIC_ADDRESS_X_FORWARDED_FOR = 'ub-allow-public-address-x-forwarded-for';
    const UB_PLUGIN_VERSION_KEY      = 'ub-plugin-version';
    const UB_USE_CURL_KEY            = 'ub-use-curl';

    const UB_LOCK_NAME               = 'ub-sql-lock';

    public static function ub_option_defaults()
    {
        // All options, used by UBDiagnostics and deactivation hook
        // Arrays are not allowed in class constants, so use a function
        return array(
        UBConfig::UB_ROUTES_CACHE_KEY => array(),
        UBConfig::UB_PAGE_SERVER_DOMAIN_KEY => UBConfig::default_page_server_domain(),
        UBConfig::UB_API_URL_KEY => UBConfig::default_api_url(),
        UBConfig::UB_API_CLIENT_ID_KEY => UBConfig::default_api_client_id(),
        UBConfig::UB_AUTHORIZED_DOMAINS_KEY => UBConfig::default_authorized_domains(),
        UBConfig::UB_HAS_AUTHORIZED_KEY => '',
        UBConfig::UB_USER_ID_KEY => '',
        UBConfig::UB_DOMAIN_ID_KEY => '',
        UBConfig::UB_CLIENT_ID_KEY => '',
        UBConfig::UB_PROXY_ERROR_MESSAGE_KEY => '',
        UBConfig::UB_ALLOW_PUBLIC_ADDRESS_X_FORWARDED_FOR => 0,
        UBConfig::UB_USE_CURL_KEY => 1,
        UBConfig::UB_PLUGIN_VERSION_KEY => UBConfig::UB_VERSION
        );
    }

    public static function set_options_if_not_exist()
    {
        $ub_options = UBConfig::ub_option_defaults();
        foreach ($ub_options as $key => $default) {
            if (!get_option($key)) {
                add_option($key, $default);
            }
        }
    }

    public static function default_page_server_domain()
    {
        $domain = getenv('UB_PAGE_SERVER_DOMAIN');
        return $domain ? $domain : 'wp.unbounce.com';
    }

    public static function default_api_url()
    {
        $url = getenv('UB_API_URL');
        return $url ? $url : 'https://api.unbounce.com';
    }

    public static function default_api_client_id()
    {
        $client_id = getenv('UB_API_CLIENT_ID');
        return $client_id ? $client_id : '660a311881321b9d4e777993e50875dec5da9cc4ef44369d121544b21da52b92';
    }

    public static function default_authorized_domains()
    {
        $domains = getenv('UB_AUTHORIZED_DOMAINS');
        return $domains ? explode(',', $domains) : array();
    }

    public static function page_server_domain()
    {
        return get_option(UBConfig::UB_PAGE_SERVER_DOMAIN_KEY, UBConfig::default_page_server_domain());
    }

    public static function api_url()
    {
        return get_option(UBConfig::UB_API_URL_KEY, UBConfig::default_api_url());
    }

    public static function api_client_id()
    {
        return get_option(UBConfig::UB_API_CLIENT_ID_KEY, UBConfig::default_api_client_id());
    }

    public static function authorized_domains()
    {
        return get_option(UBConfig::UB_AUTHORIZED_DOMAINS_KEY, UBConfig::default_authorized_domains());
    }

    public static function has_authorized()
    {
        return (bool) get_option(UBConfig::UB_HAS_AUTHORIZED_KEY);
    }

    public static function debug_loggging_enabled()
    {
        return (defined('UB_ENABLE_LOCAL_LOGGING') && UB_ENABLE_LOCAL_LOGGING);
    }

    public static function allow_public_address_x_forwarded_for()
    {
        return get_option(UBConfig::UB_ALLOW_PUBLIC_ADDRESS_X_FORWARDED_FOR, 0) == 1;
    }

    public static function create_none_response()
    {
        return array(array('status' => 'NONE'), null, null, null);
    }

    public static function create_same_response($etag, $max_age)
    {
        return array(array('status' => 'SAME'), $etag, $max_age, null);
    }

    public static function create_new_response($etag, $max_age, $proxyable_url_set)
    {
        return array(array('status' => 'NEW'), $etag, $max_age, $proxyable_url_set);
    }

    public static function create_failure_response($failure_message)
    {
        return array(array('status' => 'FAILURE',
                       'failure_message' => $failure_message),
                 null, null, null);
    }

    public static function use_curl()
    {
        return get_option(UBConfig::UB_USE_CURL_KEY, 1) == 1;
    }

    public static function domain()
    {
        return parse_url(get_home_url(), PHP_URL_HOST);
    }

    public static function domain_with_port()
    {
        $port = parse_url(get_home_url(), PHP_URL_PORT);
        $host = parse_url(get_home_url(), PHP_URL_HOST);
        if ($port) {
            return $host . ':' . $port;
        } else {
            return $host;
        }
    }

    public static function fetch_proxyable_url_set($domain, $etag, $ps_domain)
    {
        if (!$domain) {
            $failure_message = 'Domain not provided, not fetching sitemap.xml';
            UBLogger::warning($failure_message);
            return UBConfig::create_failure_response($failure_message);
        }

        try {
            $url = 'https://' . $ps_domain . '/sitemap.xml';
            $curl = curl_init();
            $curl_options = array(
            CURLOPT_URL => $url,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HEADER => true,
            CURLOPT_USERAGENT => UBConfig::UB_USER_AGENT,
            CURLOPT_HTTPHEADER => array('Host: ' . $domain, 'If-None-Match: ' . $etag),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => false,
            CURLOPT_TIMEOUT => 5
            );

            UBLogger::debug("Retrieving routes from '$url', etag: '$etag', host: '$domain'");

            curl_setopt_array($curl, $curl_options);
            $data = curl_exec($curl);
            $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
            $header_size = strlen($data) - curl_getinfo($curl, CURLINFO_SIZE_DOWNLOAD);
            $curl_error = null;
            $etag = null;
            $max_age = null;

            // when having an CURL error, http_code is 0
            if ($http_code == 0) {
                  $curl_error = curl_error($curl);
            }

            curl_close($curl);

            $headers = substr($data, 0, $header_size);

            $matches = array();
            $does_match = preg_match('/ETag: (\S+)/is', $headers, $matches);
            if ($does_match) {
                  $etag = $matches[1];
            }

            $matches = array();
            $does_match = preg_match('/Cache-Control: max-age=(\S+)/is', $headers, $matches);
            if ($does_match) {
                  $max_age = $matches[1];
            }

            if ($http_code == 200) {
                  $body = substr($data, $header_size);
                  list($success, $result) = UBConfig::url_list_from_sitemap($body);

                if ($success) {
                    UBLogger::debug("Retrieved new routes, HTTP code: '$http_code'");
                    return UBConfig::create_new_response($etag, $max_age, $result);
                } else {
                    $errors = join(', ', $result);
                    $failure_message = "An error occurred while processing pages, XML errors: '$errors'";
                    UBLogger::warning($failure_message);
                    return UBConfig::create_failure_response($failure_message);
                }
            }
            if ($http_code == 304) {
                  UBLogger::debug("Routes have not changed, HTTP code: '$http_code'");
                  return UBConfig::create_same_response($etag, $max_age);
            }
            if ($http_code == 404) {
                  UBLogger::debug("No routes to retrieve, HTTP code: '$http_code'");
                  return UBConfig::create_none_response();
            } else {
                  $failure_message = "An error occurred while retrieving routes;
                    HTTP code: '$http_code';
                    Error: " . $curl_error;
                  UBLogger::warning($failure_message);
                  return UBConfig::create_failure_response($failure_message);
            }
        } catch (Exception $e) {
            $failure_message = "An error occurred while retrieving routes; Error: " . $e;
            UBLogger::warning($failure_message);
            return UBConfig::create_failure_response($failure_message);
        }
    }

    public static function url_list_from_sitemap($string)
    {
        if (is_null($string)) {
            return array(false, array('input is null'));
        }

        if (!UBDiagnostics::is_xml_installed()) {
            return array(false, array('xml extension is not installed'));
        }

        $use_internal_errors = libxml_use_internal_errors(true);
        $sitemap = simplexml_load_string($string);

        if ($sitemap !== false) {
            libxml_use_internal_errors($use_internal_errors);
            $urls = array();

            // Valid XML that is not a valid sitemap.xml will be considered an empty sitemap.xml.
            // We have no easy way to tell the difference between the two.
            if (isset($sitemap->url)) {
                foreach ($sitemap->url as $sitemap_url) {
                    if (isset($sitemap_url->loc)) {
                        $url = (string) $sitemap_url->loc;
                        // URLs come in with protocol and trailing slash, we need just host and path with no
                        // trailing slash internally.
                        $urls[] = parse_url($url, PHP_URL_HOST) . rtrim(parse_url($url, PHP_URL_PATH), '/');
                    }
                }
            }

            return array(true, $urls);
        } else {
            // libXMLError has no default tostring, use print_r to get a string representation of it
            $errors = array_map(function ($error) {
                return print_r($error, true);
            }, libxml_get_errors());
            // Return what we tried to parse for debugging
            $errors[] = "XML content: ${string}";
            libxml_use_internal_errors($use_internal_errors);
            return array(false, $errors);
        }
    }

    public static function read_unbounce_domain_info($domain, $expire_now = false)
    {
        // Bail out if curl is not installed to prevent fatal error
        if (!UBDiagnostics::is_curl_installed()) {
            return array();
        }

        $proxyable_url_set = null;
        $cache_max_time_default = 10;

        $ps_domain = get_option(UBConfig::UB_PAGE_SERVER_DOMAIN_KEY, UBConfig::default_page_server_domain());
        $domains_info = get_option(UBConfig::UB_ROUTES_CACHE_KEY, array());

        if (!is_array($domains_info)) {
            // This is a regression from BEE-878. We aren't sure why the data could be corrupted.
            $domains_info = array();
        }

        $domain_info = UBUtil::array_fetch($domains_info, $domain, array());

        $proxyable_url_set = UBUtil::array_fetch($domain_info, 'proxyable_url_set');
        $proxyable_url_set_fetched_at = UBUtil::array_fetch($domain_info, 'proxyable_url_set_fetched_at');
        $proxyable_url_set_cache_timeout = UBUtil::array_fetch($domain_info, 'proxyable_url_set_cache_timeout');
        $proxyable_url_set_etag = UBUtil::array_fetch($domain_info, 'proxyable_url_set_etag');

        $cache_max_time = is_null($proxyable_url_set_cache_timeout) ?
          $cache_max_time_default :
          $proxyable_url_set_cache_timeout;

        $current_time = time();

        if ($expire_now ||
            is_null($proxyable_url_set) ||
            ($current_time - $proxyable_url_set_fetched_at > $cache_max_time)) {
            try {
                $can_fetch = UBUtil::get_lock();
                UBLogger::debug('Locking: ' . $can_fetch);

                if ($can_fetch) {
                    $result_array = UBConfig::fetch_proxyable_url_set($domain, $proxyable_url_set_etag, $ps_domain);

                    list($routes_status, $etag, $max_age, $proxyable_url_set_new) = $result_array;

                    if ($routes_status['status'] == 'NEW') {
                              $domain_info['proxyable_url_set'] = $proxyable_url_set_new;
                              $domain_info['proxyable_url_set_etag'] = $etag;
                              $domain_info['proxyable_url_set_cache_timeout'] = $max_age;
                    } elseif ($routes_status['status'] == 'SAME') {
                              // Just extend the cache
                              $domain_info['proxyable_url_set_cache_timeout'] = $max_age;
                    } elseif ($routes_status['status'] == 'NONE') {
                              $domain_info['proxyable_url_set'] = array();
                              $domain_info['proxyable_url_set_etag'] = null;
                    } elseif ($routes_status['status'] == 'FAILURE') {
                              UBLogger::warning('Route fetching failed');
                    } else {
                              UBLogger::warning("Unknown response from route fetcher: '$routes_status'");
                    }

                    // Creation of domain_info entry
                    $domain_info['proxyable_url_set_fetched_at'] = $current_time;
                    $domain_info['last_status'] = $routes_status['status'];
                    if ($routes_status['status'] == 'FAILURE') {
                              $domain_info['failure_message'] = $routes_status['failure_message'];
                    }
                    $domains_info[$domain] = $domain_info;
                    // set autoload to false so that options are always loaded from DB
                    update_option(UBConfig::UB_ROUTES_CACHE_KEY, $domains_info, false);
                }
            } catch (Exception $e) {
                UBLogger::warning('Could not update sitemap: ' . $e);
            }

            $release_result = UBUtil::release_lock();
            UBLogger::debug('Unlocking: ' . $release_result);
        }

        return UBUtil::array_select_by_key(
            $domain_info,
            array('proxyable_url_set', 'proxyable_url_set_fetched_at', 'failure_message', 'last_status')
        );
    }

    public static function is_authorized_domain($domain0)
    {
        $pieces = explode(':', $domain0);
        $domain = $pieces[0];
        return in_array($domain, UBConfig::authorized_domains());
    }

    public static function update_authorization_options($domains, $data)
    {
        update_option(UBConfig::UB_USER_ID_KEY, $data['user_id']);
        update_option(UBConfig::UB_DOMAIN_ID_KEY, $data['domain_id']);
        update_option(UBConfig::UB_CLIENT_ID_KEY, $data['client_id']);
        update_option(UBConfig::UB_AUTHORIZED_DOMAINS_KEY, $domains);
        update_option(UBConfig::UB_HAS_AUTHORIZED_KEY, true);
    }

    public static function int_min()
    {
        return (PHP_INT_MAX * -1) - 1;
    }
}
