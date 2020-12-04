<?php
/*
Plugin Name: Unbounce Landing Pages
Plugin URI: http://unbounce.com
Description: Unbounce is the most powerful standalone landing page builder available.
Version: 1.0.45
Author: Unbounce
Author URI: http://unbounce.com
License: GPLv2
*/

require_once dirname(__FILE__) . '/UBCompatibility.php';
require_once dirname(__FILE__) . '/UBDiagnostics.php';
require_once dirname(__FILE__) . '/UBUtil.php';
require_once dirname(__FILE__) . '/UBConfig.php';
require_once dirname(__FILE__) . '/UBLogger.php';
require_once dirname(__FILE__) . '/UBHTTP.php';
require_once dirname(__FILE__) . '/UBIcon.php';
require_once dirname(__FILE__) . '/UBWPListTable.php';
require_once dirname(__FILE__) . '/UBPageTable.php';
require_once dirname(__FILE__) . '/UBTemplate.php';

register_activation_hook(__FILE__, function () {
    UBConfig::set_options_if_not_exist();
});

register_deactivation_hook(__FILE__, function () {
    foreach (UBConfig::ub_option_defaults() as $key => $value_not_needed) {
        delete_option($key);
    }
});

add_action('init', function () {
    UBLogger::setup_logger();

    $domain = UBConfig::domain();

    if (!UBConfig::is_authorized_domain($domain)) {
        UBLogger::info("Domain: $domain has not been authorized");
        return;
    }

    $start = microtime(true);

    $ps_domain = UBConfig::page_server_domain();
    $http_method = UBUtil::array_fetch($_SERVER, 'REQUEST_METHOD');
    $referer = UBUtil::array_fetch($_SERVER, 'HTTP_REFERER');
    $user_agent = UBUtil::array_fetch($_SERVER, 'HTTP_USER_AGENT');
    $protocol = UBHTTP::determine_protocol($_SERVER, is_ssl());
    $current_path = UBUtil::array_fetch($_SERVER, 'REQUEST_URI');

    $raw_url = $protocol . $ps_domain . $current_path;
    $current_url  = $protocol . $domain . $current_path;

    $domain_info = UBConfig::read_unbounce_domain_info($domain, false);
    $proxyable_url_set = UBUtil::array_fetch($domain_info, 'proxyable_url_set', array());

    UBLogger::debug_var('ps_domain', $ps_domain);
    UBLogger::debug_var('http_method', $http_method);
    UBLogger::debug_var('referer', $referer);
    UBLogger::debug_var('user_agent', $user_agent);
    UBLogger::debug_var('protocol', $protocol);
    UBLogger::debug_var('domain', $domain);
    UBLogger::debug_var('current_path', $current_path);
    UBLogger::debug_var('raw_url', $raw_url);
    UBLogger::debug_var('current_url', $current_url);

  ////////////////////

    $url_purpose = UBHTTP::get_url_purpose(
        $proxyable_url_set,
        $http_method,
        $current_url
    );
    if ($url_purpose == null) {
        UBLogger::debug("ignoring request to URL " . $current_url);
    } elseif (is_user_logged_in() && UBUtil::is_wordpress_preview($_GET)) {
        UBLogger::debug("Serving Wordpress Preview instead of landing page on root");
    } elseif ($url_purpose == 'HealthCheck') {
        if (UBConfig::domain_with_port() !== UBUtil::array_fetch($_SERVER, 'HTTP_HOST')) {
            http_response_code(412);
        }

        header('Content-Type: application/json');
        $version = UBConfig::UB_VERSION;
        echo "{\"ub_wordpress\":{\"version\":\"$version\"}}";
        exit(0);
    } else {
        // Disable caching plugins. This should take care of:
        //   - W3 Total Cache
        //   - WP Super Cache
        //   - ZenCache (Previously QuickCache)
        if (!defined('DONOTCACHEPAGE')) {
            define('DONOTCACHEPAGE', true);
        }

        if (!defined('DONOTCDN')) {
            define('DONOTCDN', true);
        }

        if (!defined('DONOTCACHEDB')) {
            define('DONOTCACHEDB', true);
        }

        if (!defined('DONOTMINIFY')) {
            define('DONOTMINIFY', true);
        }

        if (!defined('DONOTCACHEOBJECT')) {
            define('DONOTCACHEOBJECT', true);
        }

        UBLogger::debug("perform ''" . $url_purpose . "'' on received URL " . $current_url);

        $all_headers = getallheaders();
        $all_headers['Host'] = $domain;

        // Make sure we don't get cached by Wordpress hosts like WPEngine
        header('Cache-Control: max-age=0; private');

        list($success, $message) = UBHTTP::stream_request(
            $http_method,
            $raw_url,
            $all_headers,
            $user_agent
        );

        if ($success === false) {
              update_option(UBConfig::UB_PROXY_ERROR_MESSAGE_KEY, $message);
        }

        $end = microtime(true);
        $time_taken = ($end - $start) * 1000;

        UBLogger::debug_var('time_taken', $time_taken);
        UBLogger::debug("proxying for $current_url done successfuly -- took $time_taken ms");

        exit(0);
    }
}, UBConfig::int_min());

add_action('admin_init', function () {

    $pluginVersion = get_option(UBConfig::UB_PLUGIN_VERSION_KEY);
    if (UBConfig::UB_VERSION != $pluginVersion) {
        UBConfig::set_options_if_not_exist();
        update_option(UBConfig::UB_PLUGIN_VERSION_KEY, UBConfig::UB_VERSION);
    }

    UBUtil::clear_flash();

  // Disable incompatible scripts

  // WPML
    wp_dequeue_script('installer-admin');

  // Enqueue our own scripts

  // Main page
    wp_enqueue_script(
        'ub-rx',
        plugins_url('js/rx.lite.compat.min.js', __FILE__)
    );
    wp_enqueue_script(
        'set-unbounce-domains-js',
        plugins_url('js/set-unbounce-domains.js', __FILE__),
        array('jquery', 'ub-rx')
    );
    wp_enqueue_script(
        'unbounce-page-js',
        plugins_url('js/unbounce-page.js', __FILE__),
        array('jquery')
    );

  // Diagnostics page
    wp_enqueue_script(
        'ub-clipboard-js',
        plugins_url('js/clipboard.min.js', __FILE__)
    );
    wp_enqueue_script(
        'unbounce-diagnostics-js',
        plugins_url('js/unbounce-diagnostics.js', __FILE__),
        array('jquery', 'ub-clipboard-js')
    );
  // Re-enable incompatible scripts

  // WPML
    wp_enqueue_script('installer-admin');

    wp_enqueue_style(
        'unbounce-pages-css',
        plugins_url('css/unbounce-pages.css', __FILE__)
    );
}, 0);

add_action('admin_menu', function () {
  // Main admin page
    $print_admin_panel = function () {
        $domain = UBConfig::domain();
        $domain_info = UBConfig::read_unbounce_domain_info($domain, false);

        echo UBTemplate::render(
            'main',
            array('domain_info' => $domain_info,
            'domain' => $domain)
        );
    };

    add_menu_page(
        'Unbounce Pages',
        'Unbounce Pages',
        'manage_options',
        'unbounce-pages',
        $print_admin_panel,
        UBIcon::base64_encoded_svg()
    );

  // Diagnostics page
    $print_diagnostics_panel = function () {
        $domain = UBConfig::domain();
        $domain_info = UBConfig::read_unbounce_domain_info($domain, false);

        echo UBTemplate::render(
            'diagnostics',
            array('img_url' => plugins_url('img/unbounce-logo-blue.png', __FILE__),
                                  'checks' => UBDiagnostics::checks($domain, $domain_info),
                                  'details' => UBDiagnostics::details($domain, $domain_info),
                                  'domain' => $domain,
                                  'permalink_url' => admin_url('options-permalink.php'),
            'curl_error_message' => UBUtil::array_fetch(
                $domain_info,
                'failure_message'
            ))
        );
    };

    add_submenu_page(
        'unbounce-pages',
        'Unbounce Pages Diagnostics',
        'Unbounce Pages Diagnostics',
        'manage_options',
        'unbounce-pages-diagnostics',
        $print_diagnostics_panel
    );
});

add_action('admin_post_set_unbounce_domains', function () {
    $domains_list = UBUtil::array_fetch($_POST, 'domains', '');
    $domains = array_filter(explode(',', $domains_list), function ($domain) {
        return $domain == UBConfig::domain();
    });

    if ($domains && is_array($domains)) {
        $authorization = 'success';
        $has_authorized = get_option(UBConfig::UB_HAS_AUTHORIZED_KEY, false);

        $data = array(
        'domain_name' => UBConfig::domain(),
        'first_authorization' => !$has_authorized,
        'user_id' => UBUtil::array_fetch($_POST, 'user_id', ''),
        'client_id' => UBUtil::array_fetch($_POST, 'client_id', ''),
        'domain_id' => UBUtil::array_fetch($_POST, 'domain_id', ''),
        );

        UBConfig::update_authorization_options($domains, $data);
    } else {
        $authorization = 'failure';
    }

    UBUtil::set_flash('authorization', $authorization);

    status_header(301);
    $location = admin_url('admin.php?page=unbounce-pages');
    header("Location: $location");
});

add_action('admin_post_flush_unbounce_pages', function () {
    $domain = UBConfig::domain();
  // Expire cache and redirect
    $_domain_info = UBConfig::read_unbounce_domain_info($domain, true);
    status_header(301);
    $location = admin_url('admin.php?page=unbounce-pages');
    header("Location: $location");
});
