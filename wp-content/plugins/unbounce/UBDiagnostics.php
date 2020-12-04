<?php

class UBDiagnostics
{
    const SUPPORTED_PHP_VERSION = '5.3';
    const SUPPORTED_WP_VERSION = '4.0';

    public static function checks($domain, $domain_info)
    {
        return array_merge(self::domain_checks($domain, $domain_info), self::system_checks());
    }

    public static function domain_checks($domain, $domain_info)
    {
        return array(
            'Domain is Authorized'        => UBConfig::is_authorized_domain($domain),
            'Can Fetch Page Listing'      => UBDiagnostics::last_status_success($domain_info),
        );
    }

    public static function system_checks()
    {
        return array(
            'Curl Support'                => self::is_curl_installed(),
            'XML Support'                 => self::is_xml_installed(),
            'Permalink Structure'         => get_option('permalink_structure', '') !== '',
            'Supported PHP Version'       => version_compare(
                phpversion(),
                UBDiagnostics::SUPPORTED_PHP_VERSION,
                '>='
            ),
            'Supported Wordpress Version' => version_compare(
                UBDiagnostics::wordpress_version(),
                UBDiagnostics::SUPPORTED_WP_VERSION,
                '>='
            ),
            'SNI Support' => self::hasSNI(),
        );
    }

    public static function hasSNI()
    {
        return defined('OPENSSL_TLSEXT_SERVER_NAME') && OPENSSL_TLSEXT_SERVER_NAME;
    }

    public static function is_curl_installed()
    {
        return function_exists('curl_init');
    }

    public static function is_xml_installed()
    {
        return function_exists('simplexml_load_string');
    }

    public static function should_show_warning($domain, $domain_info)
    {
        $domain_issue = in_array(false, self::domain_checks($domain, $domain_info));
        $system_issue = in_array(false, self::system_checks());
        if (UBConfig::has_authorized()) {
            return $domain_issue || $system_issue;
        } else {
            return $system_issue;
        }
    }

    /**
     * Format a variable as condensed human-readable output
     * Example: non-assoc arrays are output as [foo, bar] and assoc looks like
     * [
     *     foo: 'bar'
     *     baz: NULL
     * ]
     * @param mixed $var
     * @param int $level
     * @return string
     */
    private static function pp($var, $level = 1)
    {
        $str = '';
        if (is_array($var)) {
            $simple = empty($var) ? true : array_keys($var) === range(0, count($var) -1);
            $str .= '[';
            if ($simple) {
                $str .= implode(', ', $var);
            } else {
                foreach ($var as $key => $value) {
                    $str .= "\n" . str_repeat('  ', $level) . "$key: " . self::pp($value, $level + 1);
                }
            }
            $str .= ']';
        } else {
            $str = var_export($var, true);
        }
        return $str;
    }

    public static function details($domain, $domain_info)
    {
        return array(
        'PHP Version'             => phpversion(),
        'WordPress Version'       => UBDiagnostics::wordpress_version(),
        'Unbounce Plugin Version' => '1.0.45',
        'Checks'                  => self::pp(UBDiagnostics::checks($domain, $domain_info)),
        'Options'                 => self::pp(UBDiagnostics::ub_options()),
        'Permalink Structure'     => get_option('permalink_structure', ''),
        'Domain'                  => $domain,
        'Domain Authorized'       => self::pp(UBConfig::is_authorized_domain($domain)),
        'Has Authorized'          => self::pp(UBConfig::has_authorized()),
        'Active Plugins'          => self::pp(get_option('active_plugins')),
        'Plugin Details'          => self::pp(get_plugins()),
        'Curl Version'            => self::pp(UBDiagnostics::curl_version()),
        'SNI Support'             => self::hasSNI(),
        'Configuration Options'   => self::pp(self::phpConfig()),
        'Extensions'              => self::pp(get_loaded_extensions()),
        'Operating System'        => php_uname(),
        );
    }

    private static function phpConfig()
    {
        return ini_get_all(null, false);
    }

    private static function ub_options()
    {
        $ub_options = array();
        array_walk(UBConfig::ub_option_defaults(), function ($v, $k) use (&$ub_options) {
            $ub_options[$k] = get_option($k, $v);
        });
        return $ub_options;
    }

    private static function curl_version()
    {
        if (function_exists('curl_version')) {
            return curl_version();
        } else {
            return 'N/A';
        }
    }

    private static function wordpress_version()
    {
        global $wp_version;
        include(ABSPATH . WPINC . '/version.php');
        return $wp_version;
    }

    private static function last_status_success($domain_info)
    {
        $last_status = UBUtil::array_fetch($domain_info, 'last_status');
        return $last_status !== null && $last_status !== 'FAILURE';
    }

    /**
     * Perform a sitemap request with default parameters to test communication with unbounce
     * @return array
     */
    public static function testSiteMapRequest()
    {
        $res = UBConfig::fetch_proxyable_url_set(UBConfig::domain(), null, UBConfig::page_server_domain());
        if (!is_array($res) || !isset($res[0])) {
            return array(
                'status' => 'ERROR',
                'result' => var_export($res, true),
            );
        }
        return $res[0];
    }

    /**
     * Retrieve environment details relevant at plugin activation time
     * @return array
     */
    public static function installationDetails()
    {
        return array(
            'php'                 => phpversion(),
            'wordpress'           => UBDiagnostics::wordpress_version(),
            'plugin_version'      => '1.0.45',
            'curl_installed'      => self::is_curl_installed(),
            'xml_installed'       => self::is_xml_installed(),
            'sni_support'         => self::hasSNI(),
            'permalink_structure' => get_option('permalink_structure'),
            'domain'              => UBConfig::domain(),
            'active_plugins'      => get_option('active_plugins'),
            'curl_version'        => UBDiagnostics::curl_version(),
            'php_config' => UBUtil::array_select_by_key(
                self::phpConfig(),
                array(
                    'allow_url_fopen', 'cgi.discard_path', 'cgi.fix_pathinfo', 'curl.cainfo', 'default_charset',
                    'default_socket_timeout', 'disable_functions', 'display_errors', 'error_reporting',
                    'enable_post_data_reading', 'file_uploads', 'implicit_flush', 'memory_limit', 'max_execution_time',
                    'max_input_time', 'opcache.enable', 'openssl.cafile', 'openssl.capath', 'output_buffering',
                    'output_encoding', 'output_handler', 'post_max_size', 'short_open_tag', 'upload_max_filesize',
                )
            ),
            'php_extensions'      => get_loaded_extensions(),
            'os'                  => php_uname(),
        );
    }
}
