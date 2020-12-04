<?php

namespace Buttonizer\Api\Utils;

use Buttonizer\Utils\Maintain;

/**
 * Publish API
 * 
 * @endpoint /wp-json/buttonizer/publish
 * @methods POST
 */
class ApiPublish {
    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/publish', [
            [
                'methods'  => ['POST'],
                'args' => [
                    'nonce' => [
                        'validate_callback' => function($value) {
                            return wp_verify_nonce($value, 'wp_rest');
                        },        
                        'required' => true
                    ],        
                ],
                'callback' => [$this, 'publish'],
                'permission_callback' => function() {
                    return Maintain::hasPermission();
                }
            ]
        ]);
    }

    /**
     * Publish buttons
     */
    public function publish() {
        // Register settings
        register_setting('buttonizer', 'buttonizer_buttons_published');
        register_setting('buttonizer', 'buttonizer_rules_published');
        register_setting('buttonizer', 'buttonizer_schedules_published');
        register_setting('buttonizer', 'buttonizer_has_changes');
        register_setting('buttonizer', 'buttonizer_settings');

        // Update cache code
        $settings = get_option('buttonizer_settings');
        $settings['cache_code'] = md5('magic-unicorn-' . time());

        // Save data
        update_option('buttonizer_buttons_published', get_option('buttonizer_buttons'));
        update_option('buttonizer_rules_published', get_option('buttonizer_rules'));
        update_option('buttonizer_schedules_published', get_option('buttonizer_schedules'));
        update_option('buttonizer_settings', $settings);
        update_option('buttonizer_has_changes', false);

        return [
            'status' => 'success'
        ];
    }
}