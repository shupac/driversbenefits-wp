<?php

namespace Buttonizer\Frontend\Group\Button;

use  Buttonizer\Frontend\Buttonizer ;
class Button
{
    private  $groupObject ;
    private  $data ;
    //    private $styling = StylingObject;
    /**
     * Buttons constructor.
     * @param $groupObject
     * @param $data
     */
    public function __construct( $groupObject, $data )
    {
        $this->groupObject = $groupObject;
        $this->data = $data;
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
    
    /**
     * @param $key
     * @param $value
     * @return bool
     */
    public function setOption( $key, $value )
    {
        $this->data[$key] = $value;
        return true;
    }
    
    /**
     * Show buttons, based on their settings
     * @return bool
     */
    public function showButton()
    {
        // Button not in use
        
        if ( !$this->getBoolean( "show_desktop" ) && !$this->getBoolean( "show_mobile" ) ) {
            Buttonizer::addEvent( [
                "id"          => $this->getOption( 'id', null ),
                "group_id"    => $this->groupObject->getId(),
                "name"        => $this->getOption( 'name', "Unnamed" ),
                "button_type" => "button",
                "message"     => __( 'The button is hidden on all devices', 'buttonizer-multifunctional-button' ),
                "type"        => "all_devices_hidden",
            ] );
            return false;
        }
        
        return true;
    }
    
    /**
     * @return array
     */
    public function generate()
    {
        // Action is a link to a page
        
        if ( $this->getOption( 'type', 'url' ) === "page" ) {
            $pageUrl = get_page_link( $this->getOption( 'action', 0 ) );
            $this->data['action'] = ( $pageUrl ? $pageUrl : "" );
        }
        
        // Return data
        return $this->data;
    }

}