<?php

namespace Buttonizer\Api\Utils;

use Buttonizer\Utils\Maintain;

/**
 * Optin API
 * 
 * @endpoint /wp-json/buttonizer/optin
 * @methods GET
 */
class ApiOptin {
    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/optin', [
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
                'callback' => [$this, 'getUrl'],
                'permission_callback' => function() {
                    return Maintain::hasPermission();
                }
            ]
        ]);
    }

    /**
     * Publish buttons
     */
    public function getUrl() {
        return [
            'url' => ButtonizerLicense()->get_reconnect_url()
        ];
    }
}