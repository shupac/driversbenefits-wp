<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}  // if direct access

/**
 * Scripts and styles
 */
class SP_EA_Front_Scripts {

	/**
	 * @var null
	 * @since 1.0
	 */
	protected static $_instance = null;

	/**
	 * @return SP_EA_Front_Scripts
	 * @since 1.0
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Initialize the class
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'front_scripts' ) );
	}


	/**
	 * Plugin Scripts and Styles
	 */
	public function front_scripts() {
		$settings = get_option( 'sp_eap_settings' );
		$prefix   = defined( 'WP_DEBUG' ) && WP_DEBUG ? '' : '.min';
		// CSS Files.
		if ( false != $settings['eap_dequeue_fa_css'] ) {
			wp_enqueue_style( 'sp-ea-font-awesome', SP_EA_URL . 'public/assets/css/font-awesome.min.css', array(), SP_EA_VERSION );
		}
		wp_register_style( 'sp-ea-style', SP_EA_URL . 'public/assets/css/ea-style.css', array(), SP_EA_VERSION );

		// JS Files.
		wp_register_script( 'sp-ea-accordion-js', SP_EA_URL . 'public/assets/js/collapse' . $prefix . '.js', array( 'jquery' ), SP_EA_VERSION, false );
		wp_register_script( 'sp-ea-accordion-config', SP_EA_URL . 'public/assets/js/script.js', array( 'jquery', 'sp-ea-accordion-js' ), SP_EA_VERSION, true );
	}
}

new SP_EA_Front_Scripts();
