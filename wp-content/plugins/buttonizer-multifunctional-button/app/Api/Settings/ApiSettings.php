<?php

namespace Buttonizer\Api\Settings;

use Buttonizer\Utils\Maintain;

/**
 * Settings API
 * 
 * @endpoint /wp-json/buttonizer/settings
 * @methods GET POST
 */
class ApiSettings {
    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/settings', [
            [
                'methods'  => ['GET'],
                'args' => [
                    'nonce' => [
                        'validate_callback' => function($value) {
                            return wp_verify_nonce($value, 'wp_rest');
                        },
                        'required' => true
                    ]
                ],
                'callback' => [$this, 'get'],
                'permission_callback' => function() {
                    return Maintain::hasPermission();
                }
            ],
            [
                'methods'  => ['POST'],
                'args' => [
                    'data' => [
                        'required' => true,
                        'type' => "object"
                    ],
                    'nonce' => [
                        'validate_callback' => function($value) {
                            return wp_verify_nonce($value, 'wp_rest');
                        },
                        'required' => true
                    ],
                ],
                'callback' => [$this, 'post'],
                'permission_callback' => function() {
                    return Maintain::hasPermission();
                }
            ]
        ]);
    }

    /**
     * Get settings
     */
    public function get() {
        return [
            'data' => get_option('buttonizer_settings')
        ];
    }
    /**
     * Save settings 
     */
    public function post($request) {
        register_setting('buttonizer', 'buttonizer_settings');
        register_setting('buttonizer', 'buttonizer_has_changes');

        update_option('buttonizer_settings', array_merge(get_option('buttonizer_settings'), $request->get_param('data')));

        return [
            'status' => 'success'
        ];
    }
}