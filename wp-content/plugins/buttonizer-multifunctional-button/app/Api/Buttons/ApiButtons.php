<?php

namespace Buttonizer\Api\Buttons;

use Buttonizer\Utils\Maintain;

/**
 * Buttons API
 * 
 * @endpoint /wp-json/buttonizer/buttons
 * @methods GET POST
 */
class ApiButtons {
    private $_settings = null;

    /**
     * Register route
     */
    public function registerRoute() {
        register_rest_route('buttonizer', '/buttons', [
            [
                'methods'  => ['GET'],
                'args' => [
                    'qpu' => [
                        'required' => false,
                        "type" => "number"
                    ],
                    'preview' => [
                        'required' => false,
                        "type" => "boolean"
                    ],
                    'data' => [
                        'required' => true,
                        "type" => "object"
                    ],
                ],
                'callback' => [$this, 'get'],
                'permission_callback' => '__return_true'
            ],
            [
                'methods'  => ['POST'],
                'args' => [
                    'data' => [
                        'required' => true,
                        'type' => "array",
                        'items' => [
                            'type' => 'object'
                        ]
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
     * Get frontend data
     */
    public function get($isNoAjaxRequest = false) {
        // Check if it's not in preview so it won't migrate twice in the dashboard.
        if(!isset($_GET['preview']) || (isset($_GET['preview']) && $_GET['preview'] != true)) {
            $this->_settings = get_option("buttonizer_settings");
            
            // Migrate if we need to do that
            if(!isset($this->_settings['migration_version']))
            {
                (new \Buttonizer\Utils\Update())->run();
            }
            else if ($this->_settings['migration_version'] !== BUTTONIZER_LAST_MIGRATION) {
                (new \Buttonizer\Utils\Update())->selfMigrate($this->_settings['migration_version']);
            }
        }

        // Allow XHR requests from subdomains
        if(!$isNoAjaxRequest && isset($this->_settings['allow_subdomains']) && $this->_settings['allow_subdomains'] == 'true' && isset($_SERVER['HTTP_ORIGIN'])) {
            $siteUrl = parse_url(get_site_url());
            $currentUrl = parse_url($_SERVER['HTTP_ORIGIN']);

            if(isset($siteUrl['host']) && isset($currentUrl['host']) && $siteUrl['host'] === substr($currentUrl['host'], strlen($currentUrl['host']) - strlen($siteUrl['host']))) {
                header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
            }
        }

        return [
            'plugin' => 'buttonizer',
            'status' => 'success',
            'result' => (new \Buttonizer\Frontend\Buttonizer($isNoAjaxRequest))->returnArray(),
            'warning' => \Buttonizer\Frontend\Buttonizer::getLogs(),
            'premium' => ButtonizerLicense()->can_use_premium_code()
        ];
    }

    /**
     * Save dashboard button data 
     */
    public function post($request) {
        $data = json_decode($request->get_body(), true);

        // Data read correctly?
        if(!json_last_error() === JSON_ERROR_NONE) {
            return new \WP_Error('rest_invalid_data', 'The data couldn\'t be converted.', [ 
                'status' => 400 
            ]);
        }

        // Register settings
        register_setting('buttonizer', 'buttonizer_buttons');
        register_setting('buttonizer', 'buttonizer_has_changes');

        // Save buttons
        update_option('buttonizer_buttons', $data['data']);
        update_option('buttonizer_has_changes', true);

        return [
            'status' => 'success'
        ];
    }
}