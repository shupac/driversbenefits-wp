<?php

namespace Buttonizer\Api\Wordpress;

use  Buttonizer\Utils\Maintain ;
/**
 * CustomCss API
 * 
 * @endpoint /wp-json/buttonizer/wordpress/custom_css
 * @methods GET POST
 */
class ApiCustomCss
{
    /**
     * Register route
     */
    public function registerRoute()
    {
        register_rest_route( 'buttonizer', '/wordpress/custom_css', [ [
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
        ], [
            'methods'             => [ 'POST' ],
            'args'                => [
            'data'  => [
            'required' => true,
            'type'     => "object",
        ],
            'nonce' => [
            'validate_callback' => function ( $value ) {
            return wp_verify_nonce( $value, 'wp_rest' );
        },
            'required'          => true,
        ],
        ],
            'callback'            => [ $this, 'post' ],
            'permission_callback' => function () {
            return Maintain::hasPermission();
        },
        ] ] );
    }
    
    /**
     * Get time schedules
     */
    public function get()
    {
        return \Buttonizer\Api\Api::needButtonizerPremium();
    }
    
    /**
     * Save time schedule data
     */
    public function post( $request )
    {
        return \Buttonizer\Api\Api::needButtonizerPremium();
    }

}