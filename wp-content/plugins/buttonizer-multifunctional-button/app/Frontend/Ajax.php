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
namespace Buttonizer\Frontend;

use  Buttonizer\Utils\Update ;
use  Buttonizer\Utils\Maintain ;
class Ajax
{
    private  $in_preview = false ;
    private  $is_admin = false ;
    private  $page_data = array() ;
    private  $settings = array() ;
    /**
     * Ajax constructor.
     */
    public function __construct()
    {
        add_action( 'wp_enqueue_scripts', [ $this, 'frontend' ] );
        add_action( "wp_ajax_buttonizer", [ $this, 'frontendJson' ] );
        add_action( "wp_ajax_nopriv_buttonizer", [ $this, 'frontendJson' ] );
        add_filter(
            'style_loader_tag',
            [ $this, 'fixPremiumIconLibraries' ],
            10,
            2
        );
    }
    
    /**
     * Start registering
     */
    public function frontend()
    {
        // Buttonizer settings
        $this->loadSettings();
        // Add frontend assets
        $this->frontendAssets();
        // Into preview
        
        if ( Maintain::hasPermission() && isset( $_GET['buttonizer-preview'] ) ) {
            $this->goIntoPreview();
            // Load page data
            $this->pageData();
        } else {
            // Show the button without delay
            
            if ( isset( $this->settings['no_ajax'] ) && $this->settings['no_ajax'] === true ) {
                wp_localize_script( "buttonizer_frontend_javascript", "buttonizer_data", ( new \Buttonizer\Api\Buttons\ApiButtons() )->get( true ) );
            } else {
                // Load page data
                $this->pageData();
            }
        
        }
        
        // Add some information
        wp_localize_script( 'buttonizer_frontend_javascript', 'buttonizer_ajax', [
            'ajaxurl'           => admin_url( 'admin-ajax.php' ),
            'version'           => BUTTONIZER_VERSION,
            'buttonizer_path'   => plugins_url( '', BUTTONIZER_PLUGIN_DIR ),
            'buttonizer_assets' => plugins_url( '/assets/', BUTTONIZER_PLUGIN_DIR ),
            'base_url'          => get_site_url( '/' ),
            'current'           => $this->page_data,
            'in_preview'        => $this->in_preview,
            'is_admin'          => Maintain::hasPermission(),
            'cache'             => ( isset( $this->settings['cache_code'] ) ? $this->settings['cache_code'] : md5( 'buzzing_the_cache_code' ) ),
            'enable_ga_clicks'  => ( isset( $this->settings['google_analytics_enabled'] ) ? filter_var( $this->settings['google_analytics_enabled'], FILTER_VALIDATE_BOOLEAN, [
            'options' => [
            'default' => true,
        ],
        ] ) : true ),
        ] );
        // Add Google Analytics
        
        if ( isset( $this->settings['google_analytics'] ) && !empty($this->settings['google_analytics']) ) {
            wp_register_script(
                'google_analytics',
                'https://www.googletagmanager.com/gtag/js?id=' . $this->settings['google_analytics'],
                array(),
                false,
                true
            );
            wp_enqueue_script( 'google_analytics' );
            wp_add_inline_script( 'google_analytics', "\n window.dataLayer = window.dataLayer || [];\n function gtag(){dataLayer.push(arguments);}\n gtag('js', new Date());\n\n gtag('config', '" . $this->settings['google_analytics'] . "');" );
        }
    
    }
    
    /**
     * Go into preview mode. Add to all links the 'buttonizer-preview' link
     */
    private function goIntoPreview()
    {
        // Buttonizer in preview
        $this->in_preview = true;
        // Hide admin panel
        show_admin_bar( false );
        // Filters
        $filters = [
            'post_link',
            'page_link',
            'author_link',
            'archive_link',
            'category_link',
            'category_feed_link',
            'attachment_link',
            'post_type_link',
            'day_link',
            'month_link',
            'year_link',
            'post_type_link'
        ];
        foreach ( $filters as $filter ) {
            add_filter(
                $filter,
                [ $this, 'updatePreviewLinks' ],
                10,
                3
            );
        }
    }
    
    /**
     * Load Buttonizer settings
     */
    private function loadSettings()
    {
        // Buttonizer settings
        $this->settings = get_option( "buttonizer_settings" );
    }
    
    /**
     * Update link
     *
     * @param $permalink
     * @return mixed
     */
    public function updatePreviewLinks( $permalink )
    {
        return esc_url( add_query_arg( [
            'buttonizer-preview' => 1,
        ], $permalink ) );
    }
    
    /**
     * Set page data
     */
    private function pageData()
    {
    }
    
    /**
     * Get all categories
     *
     * @return array
     */
    private function getCategories()
    {
        $categories = [];
        return $categories;
    }
    
    /**
     * Import frontend style and script
     */
    private function frontendAssets()
    {
        wp_register_script(
            'buttonizer_frontend_javascript',
            plugins_url( '/assets/frontend.min.js?v=' . md5( BUTTONIZER_VERSION ), BUTTONIZER_PLUGIN_DIR ),
            [],
            false,
            true
        );
        wp_register_style(
            'buttonizer_frontend_style',
            plugins_url( '/assets/frontend.css', BUTTONIZER_PLUGIN_DIR ) . '?v=' . md5( BUTTONIZER_VERSION ),
            array(),
            false,
            'all'
        );
        // Import script & style
        wp_enqueue_script( 'buttonizer_frontend_javascript' );
        wp_enqueue_style( 'buttonizer_frontend_style' );
        // Import icon library
        $this->importIconLibrary();
    }
    
    /**
     * Icon library import
     */
    private function importIconLibrary()
    {
        if ( !isset( $this->settings["import_icon_library"] ) ) {
            $this->settings["import_icon_library"] = false;
        }
        // False by default
        if ( !isset( $this->settings["icon_library"] ) ) {
            $this->settings["icon_library"] = 'fontawesome';
        }
        if ( !isset( $this->settings["icon_library_version"] ) ) {
            $this->settings["icon_library_version"] = '5.free';
        }
        
        if ( filter_var( $this->settings['import_icon_library'], FILTER_VALIDATE_BOOLEAN ) === true ) {
            
            if ( $this->settings["icon_library_version"] === '5.free' ) {
                wp_register_style(
                    'buttonizer-icon-library',
                    'https://use.fontawesome.com/releases/' . FONTAWESOME_CURRENT_VERSION . '/css/all.css',
                    [],
                    false,
                    'all'
                );
            } elseif ( $this->settings["icon_library_version"] === '5.paid' ) {
                wp_register_style(
                    'buttonizer-icon-library',
                    'https://pro.fontawesome.com/releases/' . FONTAWESOME_CURRENT_VERSION . '/css/all.css',
                    [],
                    false,
                    'all'
                );
            } elseif ( $this->settings["icon_library_version"] === '4.7.0' ) {
                wp_register_style(
                    'buttonizer-icon-library',
                    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                    [],
                    false,
                    'all'
                );
            }
            
            wp_enqueue_style( 'buttonizer-icon-library' );
            $wp_styles = wp_styles();
            $wp_styles->add_data( 'buttonizer-icon-library', 'integrity', 'test' );
        }
    
    }
    
    public function fixPremiumIconLibraries( $html, $handle )
    {
        if ( $handle === 'buttonizer-icon-library' && $this->settings["icon_library_version"] === '5.paid' ) {
            return str_replace( "media='all'", "media='all' integrity='" . $this->settings["icon_library_code"] . "' crossorigin='anonymous'", $html );
        }
        return $html;
    }
    
    /**
     * Backup for if the API is disabled
     */
    public function frontendJson()
    {
        wp_send_json( ( new \Buttonizer\Api\Buttons\ApiButtons() )->get() );
    }

}