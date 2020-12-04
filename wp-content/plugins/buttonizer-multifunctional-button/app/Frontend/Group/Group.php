<?php

namespace Buttonizer\Frontend\Group;

use  Buttonizer\Frontend\Group\Button\Button ;
use  Buttonizer\Frontend\Buttonizer ;
use  Buttonizer\Utils\Maintain ;
class Group
{
    private  $buttons = array() ;
    private  $data ;
    private  $noLimit ;
    private  $totalButtons = 0 ;
    private  $countMobile = 0 ;
    private  $countDesktop = 0 ;
    /**
     * Buttons constructor.
     * @param $data
     */
    public function __construct( $data )
    {
        $this->data = $data;
        $this->noLimit = Maintain::getSetting( "no_limit" );
    }
    
    /**
     * Return option data
     * 
     * @param $key
     * @param $default null
     * @return string
     */
    private function getOption( $key, $default = '' )
    {
        return ( isset( $this->data[$key] ) ? $this->data[$key] : $default );
    }
    
    /**
     * Return option data as boolean
     * 
     * @param $key
     * @param $default false
     * @return boolean
     */
    public function getBoolean( $key, $default = false )
    {
        return ( isset( $this->data[$key] ) ? filter_var( $this->data[$key], FILTER_VALIDATE_BOOLEAN, [
            'options' => [
            'default' => false,
        ],
        ] ) === true : $default );
    }
    
    public function getId()
    {
        return $this->getOption( "id", null );
    }
    
    /**
     * Add button
     *
     * @param Button $button
     */
    public function add( Button $button )
    {
        $this->totalButtons++;
        // Show button (on page OR only when opened
        
        if ( $button->showButton() ) {
            if ( !$this->noLimit ) {
                if ( ($button->getBoolean( 'show_desktop' ) || $button->getBoolean( 'show_mobile' )) && ($this->countDesktop >= 7 || $this->countMobile >= 7) ) {
                    // Is desktop, but no place on desktop? Force hide on desktop
                    
                    if ( $button->getBoolean( 'show_desktop' ) && $this->countDesktop >= 7 && $this->countMobile < 7 && $button->getBoolean( 'show_mobile' ) ) {
                        $button->setOption( "show_desktop", false );
                    } else {
                        
                        if ( $button->getBoolean( 'show_mobile' ) && $this->countMobile >= 7 && $this->countDesktop < 7 && $button->getBoolean( 'show_desktop' ) ) {
                            $button->setOption( "show_mobile", false );
                        } else {
                            return;
                        }
                    
                    }
                
                }
            }
            // Add mobile
            if ( $button->getBoolean( 'show_mobile' ) ) {
                $this->countMobile++;
            }
            // Add desktop
            if ( $button->getBoolean( 'show_desktop' ) ) {
                $this->countDesktop++;
            }
            $this->buttons[] = $button->generate();
        }
    
    }
    
    /**
     * Show group?
     *
     * @return bool
     */
    public function show()
    {
        // Only one button? Ignore the group show/schedule/pagerule settings, just show the button.
        // Otherwise you'll get confused why a button doesn't show if it isn't a group
        if ( $this->totalButtons === 1 && !($this->countDesktop === 0 && $this->countMobile === 0) ) {
            return true;
        }
        // Hide on all devices
        
        if ( !$this->getBoolean( 'show_desktop' ) && !$this->getBoolean( 'show_mobile' ) && !$this->getBoolean( 'single_button_mode' ) ) {
            Buttonizer::addEvent( [
                "id"          => $this->getOption( 'id', null ),
                "name"        => $this->getOption( 'name', "Unnamed" ),
                "button_type" => "group",
                "message"     => __( 'The group is hidden on all devices', 'buttonizer-multifunctional-button' ),
                "type"        => "all_devices_hidden",
            ] );
            return;
        }
        
        return ( count( $this->buttons ) > 0 ? true : false );
    }
    
    /**
     * Output
     */
    public function fix()
    {
        return [
            "data"    => $this->data,
            "buttons" => $this->buttons,
        ];
    }

}