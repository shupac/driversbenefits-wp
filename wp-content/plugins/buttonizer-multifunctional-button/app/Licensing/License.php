<?php

/*
   ===========================================================================

   Dear reader,

   When you are here, it means you are searching something. Right?

   Something wrong? Error? Or just curious?

   If you want to get a free license, you are here on the wrong place. Please
   buy your license here:
   /wp-admin/admin.php?page=Buttonizer-pricing

   Questons? www.buttonizer.pro

   Need support? Contact us on support@buttonizer.pro

   Have you also checked our knowledge base or community?

   Buttonizer Community: https://community.buttonizer.pro

   Buttonizer Knowledge base: https://community.buttonizer.pro/knowledgebase

   ===========================================================================

   For more information about the licensing and terms of conditions:
   
   Terms and conditions:   https://buttonizer.pro/terms-conditions/

   License:                https://buttonizer.pro/license/

   ===========================================================================
*/
namespace Buttonizer\Licensing;

# No script kiddies
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
// Hi. We see what you're doing here
// Please leave this file intact as it is
// and read what is, and what is NOT allowed:
// https://buttonizer.pro/terms-conditions/
class License
{
    private  $oButtonizer = 'null' ;
    public function init()
    {
        
        if ( $this->oButtonizer == 'null' ) {
            require_once BUTTONIZER_DIR . '/freemius/start.php';
            // Some data for Buttonizer to be freemium and paid.
            // We are paid so we can maintain the plugin
            // If you don't want to pay for the plugin, you can allways use the
            // SUPER COOL FREE VERSION
            // For more information about our source code:
            // https://leancoding.co/598UFI
            // To support the development of this plugin,
            // do NOT remove the code below
            $this->oButtonizer = fs_dynamic_init( [
                'id'              => '1219',
                'slug'            => 'buttonizer-multifunctional-button',
                'type'            => 'plugin',
                'public_key'      => 'pk_fcd360d9c82b90a5e874e651ad733',
                'is_premium'      => false,
                'has_addons'      => false,
                'has_paid_plans'  => true,
                'has_affiliation' => 'all',
                'menu'            => array(
                'slug'       => 'Buttonizer',
                'first-path' => 'admin.php?page=Buttonizer&welcome-splash=true',
                'support'    => false,
                'contact'    => false,
            ),
                'is_live'         => true,
            ] );
        }
        
        return;
    }
    
    public function get()
    {
        return $this->oButtonizer;
    }
    
    private function getDaysLeft()
    {
        return round( 2000 / 8 - 243 );
    }
    
    // Default data
    private function initButtonizerData()
    {
    }

}