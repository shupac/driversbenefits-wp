<?php

namespace Buttonizer\Api\Utils;

use Buttonizer\Utils\Maintain;

/**
 * Revert API
 * 
 * @endpoint /wp-json/buttonizer/revert
 * @methods POST
 */
class ApiRevert {
    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/revert', [
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
                'callback' => [$this, 'revert'],
                'permission_callback' => function() {
                    return Maintain::hasPermission();
                }
            ]
        ]);
    }

    /**
     * Publish buttons
     */
    public function revert() {
        // Register settings
        register_setting('buttonizer', 'buttonizer_buttons');
        register_setting('buttonizer', 'buttonizer_rules');
        register_setting('buttonizer', 'buttonizer_schedules');
        register_setting('buttonizer', 'buttonizer_has_changes');

        // Revert data
        update_option('buttonizer_buttons', get_option('buttonizer_buttons_published'));
        update_option('buttonizer_rules', get_option('buttonizer_rules_published'));
        update_option('buttonizer_schedules', get_option('buttonizer_schedules_published'));
        update_option('buttonizer_has_changes', false);

        return [
            'status' => 'success'
        ];
    }
}