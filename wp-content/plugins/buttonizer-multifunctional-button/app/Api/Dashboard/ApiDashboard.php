<?php

namespace Buttonizer\Api\Dashboard;

use  Buttonizer\Utils\Maintain ;
use  Buttonizer\Utils\Update ;
/**
 * Dashboard API
 * 
 * @endpoint /wp-json/buttonizer/dashboard
 * @methods GET
 */
class ApiDashboard
{
    /**
     * Register route
     */
    public function registerRoute()
    {
        register_rest_route( 'buttonizer', '/dashboard', [ [
            'methods'             => [ 'GET' ],
            'args'                => [
            'nonce' => [
            'validate_callback' => function ( $value ) {
            return wp_verify_nonce( $value, 'wp_rest' );
        },
            'required'          => true,
        ],
        ],
            'callback'            => [ $this, 'get' ],
            'permission_callback' => function () {
            return Maintain::hasPermission();
        },
        ] ] );
    }
    
    /**
     * Get settings
     */
    public function get()
    {
        $this->init();
        // Let the frontend know that this is the free version
        $premium = ButtonizerLicense()->can_use_premium_code();
        $isPremiumPluginCode = false;
        return [
            "status"                      => "success",
            "version"                     => BUTTONIZER_VERSION,
            "fontawesome_current_version" => FONTAWESOME_CURRENT_VERSION,
            "premium"                     => $premium,
            "premium_code"                => $isPremiumPluginCode,
            "is_opt_in"                   => !ButtonizerLicense()->is_anonymous(),
            "settings"                    => $this->loadSettings(),
            "changes"                     => $this->hasChanges,
            "groups"                      => $this->loadButtonObjects(),
            "time_schedules"              => $this->loadTimeSchedules(),
            "page_rules"                  => $this->loadPageRules(),
            "wordpress"                   => [
            "base"       => get_site_url(),
            "admin_base" => substr( admin_url(), 0, -1 ),
            'timezone'   => Maintain::getTimezone(),
        ],
        ];
    }
    
    /**
     * Initialize few settings
     */
    private function init()
    {
        // Register general Buttonizer settings
        register_setting( 'buttonizer', 'buttonizer_settings' );
        // Load general Buttonizer settings
        $this->settings = get_option( 'buttonizer_settings' );
        // Migrate to Buttonizer 2.0
        
        if ( !isset( $this->settings['migration_version'] ) ) {
            ( new Update() )->run();
            // Load updated general settings
            $this->settings = get_option( 'buttonizer_settings' );
        } else {
            if ( $this->settings['migration_version'] !== BUTTONIZER_LAST_MIGRATION ) {
                ( new Update() )->selfMigrate( $this->settings['migration_version'] );
            }
        }
        
        // Load 'changes' boolean
        $this->hasChanges = get_option( 'buttonizer_has_changes' );
    }
    
    /**
     * Load settings
     */
    private function loadSettings()
    {
        return [
            "welcome"                   => $this->checkBoolean( "welcome", true ),
            "welcome_beta_2_1_2"        => $this->checkBoolean( "welcome_beta_2_1_2", true ),
            "welcome_super_contributor" => $this->checkTimesLoaded( 3 ),
            "icon_library"              => $this->check( "icon_library", 'fontawesome' ),
            "icon_library_version"      => $this->check( "icon_library_version", '5.free' ),
            "icon_library_code"         => $this->check( "icon_library_code", '' ),
            "import_icon_library"       => $this->checkBoolean( "import_icon_library", true ),
            "google_analytics"          => $this->check( "google_analytics", '' ),
            "admin_top_bar_show_button" => $this->checkBoolean( "admin_top_bar_show_button", true ),
            "show_tooltips"             => $this->checkBoolean( "show_tooltips", true ),
            "allow_subdomains"          => $this->checkBoolean( "allow_subdomains", false ),
            "no_limit"                  => $this->checkBoolean( "no_limit", false ),
            "tips_enabled"              => $this->checkBoolean( "tips_enabled", true ),
            "no_ajax"                   => $this->checkBoolean( "no_ajax", false ),
            "google_analytics_enabled"  => $this->checkBoolean( "google_analytics_enabled", true ),
            "can_send_errors"           => $this->checkBoolean( "can_send_errors", false ),
            "additional_permissions"    => $this->check( "additional_permissions", [] ),
        ];
    }
    
    /**
     * Check is buttonizer has loaded $times times
     */
    private function checkTimesLoaded( $times = 3 )
    {
        // recheck buttonizer settings
        // Register general Buttonizer settings
        register_setting( 'buttonizer', 'buttonizer_settings' );
        // Load general Buttonizer settings
        $this->settings = get_option( 'buttonizer_settings' );
        // Become a super contributer
        if ( isset( $this->settings['show_super_contributor_dialog'] ) ) {
            return $this->checkBoolean( "show_super_contributor_dialog", false );
        }
        // First
        
        if ( !isset( $this->settings['buttonizer_times_loaded'] ) ) {
            $this->settings['buttonizer_times_loaded'] = 1;
        } else {
            $this->settings['buttonizer_times_loaded']++;
            if ( $this->settings['buttonizer_times_loaded'] >= $times ) {
                $this->settings['show_super_contributor_dialog'] = true;
            }
        }
        
        update_option( 'buttonizer_settings', $this->settings );
        return false;
    }
    
    /**
     * Check setting exists, otherwise give default value
     *
     * @param $name
     * @param $default
     * @return mixed
     */
    private function check( $name, $default )
    {
        return ( isset( $this->settings[$name] ) && !empty($this->settings[$name]) ? $this->settings[$name] : $default );
    }
    
    /**
     * Check setting exists, otherwise give default value
     *
     * @param $name
     * @param $default
     * @return mixed
     */
    private function checkBoolean( $name, $default )
    {
        return ( isset( $this->settings[$name] ) ? filter_var( $this->settings[$name], FILTER_VALIDATE_BOOLEAN, [
            'options' => [
            'default' => false,
        ],
        ] ) === true : $default );
    }
    
    /**
     * Return groups and buttons
     *
     * @return array
     */
    private function loadButtonObjects()
    {
        // Register button settings
        register_setting( 'buttonizer', 'buttonizer_buttons' );
        // Load button settings
        $buttons = get_option( 'buttonizer_buttons' );
        return ( is_array( $buttons ) && count( $buttons ) > 0 ? $buttons : [ [
            'data'    => [
            'name'         => __( 'New group', 'buttonizer-multifunctional-button' ),
            'show_mobile'  => true,
            'show_desktop' => true,
            'horizontal'   => "right 5%;",
            'vertical'     => "bottom 5%;",
        ],
            'buttons' => [ [
            'name'         => __( 'New button', 'buttonizer-multifunctional-button' ),
            'show_mobile'  => true,
            'show_desktop' => true,
        ] ],
        ] ] );
    }
    
    /**
     * Get time schedules
     */
    private function loadTimeSchedules()
    {
        return false;
    }
    
    /**
     * Get page rules
     */
    private function loadPageRules()
    {
        return false;
    }

}