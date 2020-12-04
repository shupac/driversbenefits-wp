<?php

namespace Buttonizer\Frontend;

use  Buttonizer\Utils\Maintain ;
use  Buttonizer\Frontend\Group\Button\Button ;
use  Buttonizer\Frontend\Group\Group ;
use  Buttonizer\Frontend\PageRules\PageRules ;
use  Buttonizer\Frontend\TimeSchedules\TimeSchedules ;
class Buttonizer
{
    private  $buttonGroups ;
    private  $groupReturns = array() ;
    // Time schedule object
    private static  $timeSchedules = null ;
    private static  $pageRules = null ;
    private static  $logs = array() ;
    private static  $pageData = null ;
    // Current page
    private static  $currentPage = -1 ;
    private static  $currentBlogPost = -1 ;
    private static  $currentCategories = array() ;
    private static  $currentUrl = '' ;
    private static  $currentPageTitle = '' ;
    private static  $currentPageIs404 = false ;
    private static  $currentPageIsFrontPage = false ;
    private static  $currentUserRoles = '' ;
    private static  $published = '_published' ;
    /**
     * Buttons constructor.
     */
    public function __construct( $noAjax = false )
    {
        if ( isset( $_GET['preview'] ) && $_GET['preview'] === '1' && Maintain::hasPermission() ) {
            self::$published = '';
        }
        // Get groups
        $this->buttonGroups = get_option( self::getSettingName( 'buttonizer_buttons' ) );
        if ( isset( $this->buttonGroups[0] ) ) {
            $this->createGroup( $this->buttonGroups[0] );
        }
    }
    
    /**
     * @param $data
     */
    private function createGroup( $data )
    {
        $group = new Group( $data['data'] );
        // Add buttons to group
        foreach ( $data['buttons'] as $button ) {
            $group->add( new Button( $group, $button ) );
        }
        if ( $group->show() ) {
            $this->groupReturns[] = $group->fix();
        }
    }
    
    /**
     * @param $id
     * @return bool
     */
    public static function isOpened( $id )
    {
        return true;
    }
    
    /**
     * Page rules
     *
     * @param $id
     * @return bool
     */
    public static function isActive( $id )
    {
        return true;
    }
    
    /**
     * Returns array
     *
     * @return array
     */
    public function returnArray()
    {
        return $this->groupReturns;
    }
    
    /**
     * @param $message
     * @return bool
     */
    public static function addWarning( $message )
    {
        self::$logs[] = [
            'type'    => 'warning',
            'message' => $message,
        ];
        return true;
    }
    
    /**
     * @param array $message
     * @return bool
     */
    public static function addEvent( $messageData )
    {
        self::$logs[] = $messageData;
        return true;
    }
    
    /**
     * Get setting name
     *
     * @param string $string
     * @return string
     */
    public static function getSettingName( $string = '' )
    {
        return $string . self::$published;
    }
    
    /**
     * Is the user in preview mode?
     * @return boolean
     */
    public static function isPreview()
    {
        return self::$published === "";
    }
    
    /**********************************
     * Current page data
     */
    /**
     * @return array
     */
    public static function getLogs()
    {
        // Not in preview
        if ( !self::isPreview() ) {
            return [];
        }
        return self::$logs;
    }
    
    /**
     * Get current page url
     * @param bool $baseUrl
     * @return string
     */
    public static function getUrl( $baseUrl = true )
    {
        if ( $baseUrl === false ) {
            return str_replace( get_site_url(), "", self::$currentUrl );
        }
        return self::$currentUrl;
    }
    
    /**
     * Get current page
     */
    public static function getPage()
    {
        return self::$currentPage;
    }
    
    /**
     * Get current post
     */
    public static function getBlogPost()
    {
        return self::$currentBlogPost;
    }
    
    /**
     * Get current post categories
     */
    public static function getCategories()
    {
        return self::$currentCategories;
    }
    
    /**
     * Is the current page a front page?
     */
    public static function getTitle()
    {
        return strtolower( self::$currentPageTitle );
    }
    
    /**
     * Is the current page a 404?
     */
    public static function is_404()
    {
        return self::$currentPageIs404;
    }
    
    /**
     * Is the current page a front page?
     */
    public static function isFrontPage()
    {
        return self::$currentPageIsFrontPage;
    }
    
    /**
     * Return the user role of the current user
     */
    public static function getUserRoles()
    {
        
        if ( self::$currentUserRoles === "" ) {
            $userRoles = get_userdata( get_current_user_id() )->roles;
            // If not logged in, add guest role in roles
            if ( !is_user_logged_in() ) {
                $userRoles[] = "guest";
            }
            self::$currentUserRoles = $userRoles;
        }
        
        return self::$currentUserRoles;
    }

}