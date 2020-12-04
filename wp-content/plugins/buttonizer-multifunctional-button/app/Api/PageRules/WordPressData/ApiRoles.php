<?php

namespace Buttonizer\Api\PageRules\WordPressData;

use Buttonizer\Utils\Maintain;

/**
 * WordPress Buttonizer API
 * 
 * @endpoint /wp-json/buttonizer/pagerules/roles
 * @methods GET
 */
class ApiRoles {
    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/page_rules/roles', [
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
            ]
        ]);
    }

    /**
     * Get page rules roles
     */
    public function get() {
        $roles = [];

        foreach(wp_roles()->get_names() as $role)
        {
            $roles[] = [
                'id'    => strtolower($role),
                'name' => $role
            ];
        }

        // Add guest role
        $roles[] = [
            'id'    => "guest",
            'name' => "Guest"
        ];

        return [
            'success' => true,
            'data' => $roles,
            'result_count' => count($roles)
        ];
    }
}