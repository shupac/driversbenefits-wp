<?php
/**
 * Fired during plugin activation
 *
 * @link       https://shapedplugin.com
 * @since      2.0.0
 *
 * @package    Easy_Accordion_Free
 * @subpackage Easy_Accordion_Free/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      2.0.0
 * @package    Easy_Accordion_Free
 * @subpackage Easy_Accordion_Free/includes
 * @author     ShapedPlugin<shapedplugin@gmail.com>
 */
class Easy_Accordion_Free_Activator {

	/**
	 * Easy Accordion Free activator.
	 *
	 * Deactivate the free version during the activation of the Easy Accordion.
	 *
	 * @since  2.0.0
	 * @return void
	 */
	public static function activate() {
		deactivate_plugins( 'easy-accordion-pro/easy-accordion-pro.php' );
	}
}
