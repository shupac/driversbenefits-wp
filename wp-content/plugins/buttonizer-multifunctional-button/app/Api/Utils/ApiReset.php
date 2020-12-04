<?php
namespace Buttonizer\Api\Utils;

use Buttonizer\Utils\Update;
use Buttonizer\Utils\Maintain;

/**
 * Reset API
 * 
 * @endpoint /wp-json/buttonizer/reset
 * @methods POST
 */
class ApiReset {
    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/reset', [
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
                'callback' => [$this, 'reset'],
                'permission_callback' => function() {
                    return Maintain::hasPermission(true);
                }
            ]
        ]);
    }

    /**
     * Reset buttons
     */
    public function reset() {
        // Current settings
        update_option('buttonizer_buttons', [
            [
                'data' => [
                    'name' => 'Group name', 
                    'show_mobile' => true, 
                    'show_desktop' => true,
                ],
                'buttons' => [
                    [
                        'name' => 'Button name', 
                        'show_mobile' => true, 
                        'show_desktop' => true,
                    ]
                ]
            ]
        ]);

        // Current Settings
        update_option('buttonizer_settings', [
                'migration_version' => 4,
                "import_icon_library" => true
        ]);
        delete_option('buttonizer_rules');
        delete_option('buttonizer_schedules');

        // Published
        delete_option('buttonizer_buttons_published');
        delete_option('buttonizer_rules_published');
        delete_option('buttonizer_schedules_published');

        delete_option('buttonizer_has_changes');

        // Also delete the settings
        delete_option('buttonizer_times_loaded');

        return [
            'status' => 'success'
        ];
    }
}