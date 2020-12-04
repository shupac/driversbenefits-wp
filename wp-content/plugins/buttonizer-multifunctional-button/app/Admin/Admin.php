<?php

/*
This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.

Copyright 2017 Buttonizer
*/
namespace Buttonizer\Admin;

use  Buttonizer\Utils\Maintain ;
# No script kiddies
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
class Admin
{
    /**
     * Admin constructor.
     */
    public function __construct()
    {
        // Lets do some admin stuff for Buttonizer
        add_action( 'admin_init', [ $this, 'adminPages' ] );
        // Add admin menu
        add_action( 'admin_menu', [ $this, 'pluginAdminMenu' ] );
        //If it's not using a permalink structure, add notice
        if ( !get_option( 'permalink_structure' ) ) {
            add_action( 'admin_notices', [ $this, 'permalink_admin_notice' ] );
        }
    }
    
    /**
     * Plain permalink is used
     */
    function permalink_admin_notice()
    {
        echo  '<div class="notice notice-error">
            <p><b>Buttonizer:</b> ' . __( 'A custom permalink structure is required for Buttonizer to work.', 'buttonizer-multifunctional-button' ) . ' <a href="' . admin_url( 'options-permalink.php' ) . '">' . __( 'Go to permalink structure settings.', 'buttonizer-multifunctional-button' ) . '</a></p>
        </div>' ;
    }
    
    /**
     * Create Admin menu
     */
    public function pluginAdminMenu()
    {
        if ( !Maintain::hasPermission() ) {
            return;
        }
        // Admin menu
        add_menu_page(
            'Buttonizer Buttons',
            'Buttonizer',
            'read',
            'Buttonizer',
            function () {
        },
            plugins_url( '/assets/images/wp-icon.png', BUTTONIZER_PLUGIN_DIR ),
            81
        );
        // Add submenu
        add_submenu_page(
            'Buttonizer',
            'Settings',
            __( 'Settings', 'buttonizer-multifunctional-button' ),
            'read',
            'admin.php?page=Buttonizer#/settings'
        );
        // Add community link
        add_submenu_page(
            'Buttonizer',
            __( 'Community', 'buttonizer-multifunctional-button' ),
            __( 'Community', 'buttonizer-multifunctional-button' ),
            'read',
            'https://community.buttonizer.pro/?referral=buttonizer-plugin-menu'
        );
        // Add knowledge base link
        add_submenu_page(
            'Buttonizer',
            __( 'Knowledge base', 'buttonizer-multifunctional-button' ),
            __( 'Knowledge base', 'buttonizer-multifunctional-button' ),
            'read',
            'https://community.buttonizer.pro/knowledgebase?referral=buttonizer-plugin-menu'
        );
        // Add support link
        add_submenu_page(
            'Buttonizer',
            __( 'I need support', 'buttonizer-multifunctional-button' ),
            __( 'I need support', 'buttonizer-multifunctional-button' ),
            'read',
            'https://community.buttonizer.pro/t/support?referral=buttonizer-plugin-menu'
        );
        // Plugin information, add links
        add_filter( "plugin_action_links_" . plugin_basename( BUTTONIZER_PLUGIN_DIR ), function ( $aLinks ) {
            $aButtonizerLinks = [
                '<a href="https://community.buttonizer.pro/" target="_blank">' . __( 'Community forums', 'buttonizer-multifunctional-button' ) . '</a>',
                '<a href="https://community.buttonizer.pro/knowledgebase" target="_blank">' . __( 'Knowledge base', 'buttonizer-multifunctional-button' ) . '</a>',
                '<a href="' . admin_url( 'admin.php?page=Buttonizer' ) . '">' . __( 'Manage buttons', 'buttonizer-multifunctional-button' ) . '</a>',
                '<a href="' . admin_url( 'admin.php?page=Buttonizer#/settings' ) . '">' . __( 'Settings', 'buttonizer-multifunctional-button' ) . '</a>'
            ];
            return array_merge( $aLinks, $aButtonizerLinks );
        } );
    }
    
    /**
     * Remove stylesheets when on Buttonizer page
     */
    public function adminPages()
    {
        // Register Buttonizer admin template
        
        if ( isset( $_GET['page'] ) && $_GET['page'] === 'Buttonizer' && !ButtonizerLicense()->is_activation_mode() ) {
            $this->getPluginAdminPage();
            exit;
        }
    
    }
    
    /**
     * Get media and add scripts/styles that Buttonizer uses
     */
    public function getPluginAdminPage()
    {
        // Add WordPress admin-header thing
        header( 'Content-Type: ' . get_option( 'html_type' ) . '; charset=' . get_option( 'blog_charset' ) );
        add_filter( 'show_admin_bar', '__return_false' );
        remove_all_actions( 'wp_head' );
        remove_all_actions( 'wp_print_styles' );
        remove_all_actions( 'wp_print_head_scripts' );
        remove_all_actions( 'wp_footer' );
        remove_all_actions( 'wp_enqueue_scripts' );
        wp_deregister_script( [ 'admin-bar' ] );
        wp_deregister_style( [ 'admin-bar' ] );
        // Require media manager
        wp_enqueue_media();
        $styles = '/assets/dashboard.css';
        $path = '/assets/dashboard.min.js';
        wp_register_script(
            'buttonizer_admin_js',
            plugins_url( $path . '?v=' . md5( BUTTONIZER_VERSION ), BUTTONIZER_PLUGIN_DIR ),
            [],
            false,
            true
        );
        // Require wordpress style
        wp_enqueue_style( 'buttonizer-css', plugins_url( $styles . '?v=' . md5( BUTTONIZER_VERSION ), BUTTONIZER_PLUGIN_DIR ) );
        register_setting( 'buttonizer', 'buttonizer_settings' );
        $settings = get_option( 'buttonizer_settings' );
        wp_localize_script( 'buttonizer_admin_js', 'buttonizer_admin', [
            'ajax'                          => admin_url( 'admin-ajax.php' ),
            'admin'                         => admin_url( 'admin.php' ),
            'can_send_errors'               => ( isset( $settings['can_send_errors'] ) ? $settings['can_send_errors'] : false ),
            'api'                           => get_rest_url() . 'buttonizer',
            'nonce'                         => wp_create_nonce( 'wp_rest' ),
            'version'                       => BUTTONIZER_VERSION,
            'dir'                           => plugins_url( '', BUTTONIZER_PLUGIN_DIR ),
            'assets'                        => plugins_url( '/assets', BUTTONIZER_PLUGIN_DIR ),
            'security'                      => wp_create_nonce( "save_buttonizer" ),
            'fontawesome_current_version'   => FONTAWESOME_CURRENT_VERSION,
            'fontawesome_current_integrity' => FONTAWESOME_CURRENT_INTEGRITY,
            'permalink_structure'           => get_option( 'permalink_structure' ),
            'php_version_supported'         => version_compare( PHP_VERSION, '7.0.0', '>' ),
            'php_version'                   => PHP_VERSION,
        ] );
        // Buttonizer translations
        $set = ( new Translations() )->get();
        wp_localize_script( 'buttonizer_admin_js', 'buttonizer_translations', $set );
        wp_enqueue_script( 'buttonizer_admin_js' );
        // Import our own template
        require_once BUTTONIZER_DIR . '/app/Admin/template.php';
        exit;
    }

}