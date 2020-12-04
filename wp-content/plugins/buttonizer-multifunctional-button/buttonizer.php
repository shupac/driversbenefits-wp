<?php
/*
* Plugin Name: Buttonizer - Smart Floating Action Button
* Plugin URI:  https://buttonizer.pro
* Description: The Buttonizer is a new way to give a boost to your number of interactions, actions and conversions from your website visitor by adding one or multiple Customizable Smart Floating Button in the corner of your website.
* Version:     2.2.4
* Author:      Buttonizer
* Author URI:  https://buttonizer.pro
* License:     GPL2
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: buttonizer-multifunctional-button
* Domain Path: /languages
*
*/
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

define('BUTTONIZER_NAME', 'buttonizer');
define('BUTTONIZER_DIR', dirname(__FILE__));
define('BUTTONIZER_SLUG', basename(BUTTONIZER_DIR));
define('BUTTONIZER_PLUGIN_DIR', __FILE__ );
define('BUTTONIZER_VERSION', '2.2.4');
define('BUTTONIZER_DEBUG', false);
define('BUTTONIZER_LAST_MIGRATION', 4);

define('FONTAWESOME_CURRENT_VERSION', 'v5.14.0');
define('FONTAWESOME_CURRENT_INTEGRITY', 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay');

# No script kiddies
defined( 'ABSPATH' ) or die('No script kiddies please!');

/* ================================================
 *     WELCOME TO THE BUTTONIZER SOURCE CODE!
 *
 *      We like to see that you are courious
 *        how the code is written. When you
 *       are here to try to resolve problems
 *        you must be careful, anything
 *          can get broken you know...
 *
 *            -- KNOWLEDGE BASE --
 *        Did you know you can use our
 *              knowledge base?
 *               That's free!
 *
 *				     VISIT:
 * https://community.buttonizer.pro/knowledgebase
 *
 *             -- BUGS FOUND? --
 *	    Are you here to look for a bug?
 *		 Cool! If you found something
 *         you can report it to us!
 *
 *       Maybe you get a FREE license
 *            for 1 website ;)
 *
 * ================================================
 */

// DEBUG ONLY!!
if(BUTTONIZER_DEBUG) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}

/**
 * Autoloader
 */
spl_autoload_register(function ($class_name)
{
    try {
        if(substr($class_name, 0, 10) === 'Buttonizer')
        {
            $class_name = substr($class_name, 10) ;

            require BUTTONIZER_DIR .  '/app' . str_replace("\\", "/", $class_name) . '.php';
        }
    }
    catch (\Exception $e) {
        exit("Error: " . $e->getMessage());
    }
});

// Fixes bug with multiple buttonizer installs
if(!defined('BUTTONIZER_DEFINED')) {
    /*
    * License setup
    */
    $oButtonizer = new Buttonizer\Licensing\License();
    $oButtonizer->init();

    if(!function_exists("ButtonizerLicense")) {
        function ButtonizerLicense() {
            global $oButtonizer;

            return $oButtonizer->get();
        }
    }

    /*
    * Installation, removing and initiallization
    */
    $oButtonizerMaintain = new Buttonizer\Utils\Maintain(true);

    /*
    * Buttonizer Admin Dashboard
    */
    if (is_admin()) {
        // Load Admin page
        new Buttonizer\Admin\Admin();
    }

    /**
     * Create Buttonizer API endpoints
     */
    add_action( 'rest_api_init', function() {
        new Buttonizer\Api\Api();
    });

    /**
     * Frontend 
     */
    new Buttonizer\Frontend\Ajax();

    /* LAST FEW FUNCTIONS */
    if(!function_exists("buttonizer_custom_connect_message")) {
        function buttonizer_custom_connect_message(
            $message,
            $user_first_name,
            $plugin_title,
            $user_login,
            $site_link,
            $freemius_link
        ) {
            return sprintf(
                __( 'Hey %1$s' ) . '!<br><br>
                <p>Thank you for trying out our plugin!</p><br>
                <p>Our goal is to provide you excellent support and make the Plugin better and more secure. We do that by tracking how our users are using the plugin, learning why they abandon it, which environments we need to continue supporting, etc. Those valuable data points are key to making data-driven decisions and lead to better UX (user experience), new features, better documentation and other good things.</p><br>
                <p>Click on Allow and Continue (blue button) so that we can learn how to improve our plugin and help you better when you have support issues.</p><br>
                <p>You can always use Buttonizer Free version without opting-in. Just click \'Skip\' (white button) if you don\'t want to opt-in.</p><br>
                <p>Click on the link below (<a href="https://community.buttonizer.pro/knowledgebase/58" target="_blank">or click here</a>) to have a quick overview what gets tracked.</p><br>
                <p>Much Buttonizing fun,<br />
                <b>Team Buttonizer</b></p>',
                $user_first_name,
                '<b>' . $plugin_title . '</b>',
                '<b>' . $user_login . '</b>',
                $site_link,
                $freemius_link
            );
        }

        $oButtonizer->get()->add_filter('connect_message', 'buttonizer_custom_connect_message', 10, 6);
    }

    // Add Buttonizer Community
    $oButtonizer->get()->add_filter('support_forum_url', function ($wp_org_support_url) {
        return 'https://community.buttonizer.pro/';
    });

    // Buttonizer icon
    $oButtonizer->get()->add_filter('plugin_icon', function() {
        return dirname( __FILE__ ) . '/assets/images/plugin-icon.png';
    });

    // Localization
    add_action('init', 'buttonizer_load_plugin_textdomain');
    
    function buttonizer_load_plugin_textdomain() {
        load_plugin_textdomain( 'buttonizer-multifunctional-button', false, dirname(plugin_basename(__FILE__)) . '/languages' ); 
    }

    // System, buttonizer is loaded
    do_action('buttonizer_loaded');

    // Ok, define
    define('BUTTONIZER_DEFINED','1.0');
}