<?php

namespace Buttonizer\Api;

/**
 * Initialize api
 */
class Api {
    private static $authenticated = false;

    /**
     * Register API endpoints
     */
    public function __construct() {
        // Frontend api endpoints
        (new Buttons\ApiButtons())->registerRoute();

        // Backend api
        (new Settings\ApiSettings())->registerRoute();
        (new Dashboard\ApiDashboard())->registerRoute();
        (new Utils\ApiPublish())->registerRoute();
        (new Utils\ApiRevert())->registerRoute();
        (new Utils\ApiReset())->registerRoute();
        (new Utils\ApiOptin())->registerRoute();
        (new PageRules\ApiPageRules())->registerRoute();
        (new TimeSchedules\ApiTimeSchedules())->registerRoute();
        (new Wordpress\ApiCustomCss())->registerRoute();
    }

    /**
     * Return error, need Buttonizer pro
     */
    public static function needButtonizerPremium() {
        return new \WP_Error('missing_premium_license', 'You do not have Buttonizer Pro.', [ 
            'status' => 403 
        ]);
    }
}