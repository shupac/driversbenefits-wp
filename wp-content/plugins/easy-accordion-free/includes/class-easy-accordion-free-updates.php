<?php
/**
 * Fired during plugin updates
 *
 * @link       https://shapedplugin.com/
 * @since      2.0.6
 *
 * @package    Easy_Accordion_Free
 * @subpackage Easy_Accordion_Free/includes
 */

// don't call the file directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Fired during plugin updates.
 *
 * This class defines all code necessary to run during the plugin's updates.
 *
 * @since      2.0.6
 * @package    Easy_Accordion_Free
 * @subpackage Easy_Accordion_Free/includes
 * @author     ShapedPlugin <support@shapedplugin.com>
 */
class Easy_Accordion_Free_Updates {

	/**
	 * DB updates that need to be run
	 *
	 * @var array
	 */
	private static $updates = [
		'2.0.6' => 'updates/update-2.0.6.php',
		'2.0.7' => 'updates/update-2.0.7.php',
	];

	/**
	 * Binding all events
	 *
	 * @since 2.0.6
	 *
	 * @return void
	 */
	public function __construct() {
		add_action( 'plugins_loaded', array( $this, 'do_updates' ) );
	}

	/**
	 * Check if need any update
	 *
	 * @since 2.0.6
	 *
	 * @return boolean
	 */
	public function is_needs_update() {
		$installed_version = get_option( 'easy_accordion_free_version' );

		if ( false === $installed_version ) {
			update_option( 'easy_accordion_free_version', SP_EA_VERSION );
			update_option( 'easy_accordion_free_db_version', SP_EA_VERSION );
		}

		if ( version_compare( $installed_version, SP_EA_VERSION, '<' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * Do updates.
	 *
	 * @since 2.0.6
	 *
	 * @return void
	 */
	public function do_updates() {
		$this->perform_updates();
	}

	/**
	 * Perform all updates
	 *
	 * @since 2.0.6
	 *
	 * @return void
	 */
	public function perform_updates() {
		if ( ! $this->is_needs_update() ) {
			return;
		}

		$installed_version = get_option( 'easy_accordion_free_version' );

		foreach ( self::$updates as $version => $path ) {
			if ( version_compare( $installed_version, $version, '<' ) ) {
				include $path;
				update_option( 'easy_accordion_free_version', $version );
			}
		}

		update_option( 'easy_accordion_free_version', SP_EA_VERSION );

	}

}
new Easy_Accordion_Free_Updates();
