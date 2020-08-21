<?php
/**
 * Plugin name: Easy Accordion
 * Plugin URI:  https://shapedplugin.com/plugin/easy-accordion-pro/
 * Description: The best Responsive and Touch-friendly drag & drop <strong>Accordion FAQ</strong> builder plugin for WordPress.
 * Author:      ShapedPlugin
 * Author URI:  https://shapedplugin.com/
 * Version:     2.0.9
 * Text Domain: easy-accordion-free
 * Domain Path: /languages/
 *
 * @package easy-accordion-free
 * */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-easy-accordion-free-activator.php
 */
function activate_easy_accordion() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-easy-accordion-free-activator.php';
	Easy_Accordion_Free_Activator::activate();
}
register_activation_hook( __FILE__, 'activate_easy_accordion' );

/**
 * The main class.
 */
class SP_EASY_ACCORDION_FREE {
	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    2.0.0
	 * @access   protected
	 * @var      Easy_Accordion_Free_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	public $loader;
	/**
	 * Currently plugin version.
	 *
	 * @since 2.0.0
	 *
	 * @var string
	 */
	public $version = '2.0.9';

	/**
	 * The name of the plugin.
	 *
	 * @since 2.0.0
	 *
	 * @var string
	 */
	public $plugin_name = 'easy-accordion-free';

	/**
	 * Plugin textdomain.
	 *
	 * @since 2.0.0
	 *
	 * @var string
	 */
	public $domain = 'easy-accordion-free';
	/**
	 * Plugin file.
	 *
	 * @var string
	 */
	private $file = __FILE__;
	/**
	 * Holds class object
	 *
	 * @var   object
	 * @since 2.0.0
	 */
	private static $instance;
	/**
	 * Initialize the SP_EASY_ACCORDION_FREE() class
	 *
	 * @since  2.0.0
	 * @return object
	 */
	public static function init() {
		if ( ! isset( self::$instance ) && ! ( self::$instance instanceof SP_EASY_ACCORDION_FREE ) ) {
			self::$instance = new SP_EASY_ACCORDION_FREE();
			self::$instance->setup();
		}
		return self::$instance;
	}
	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since 2.0.0
	 */
	public function setup() {
		$this->define_constants();
		$this->includes();
		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_common_hooks();
	}
	/**
	 * Define constant if not already set
	 *
	 * @since 2.0.0
	 *
	 * @param string      $name Define constant.
	 * @param string|bool $value Define constant.
	 */
	public function define( $name, $value ) {
		if ( ! defined( $name ) ) {
			define( $name, $value );
		}
	}

	/**
	 * Define constants
	 *
	 * @since 2.0.0
	 */
	public function define_constants() {
		$this->define( 'SP_EA_VERSION', $this->version );
		$this->define( 'SP_PLUGIN_NAME', $this->plugin_name );
		$this->define( 'SP_EA_PATH', plugin_dir_path( __FILE__ ) );
		$this->define( 'SP_EA_URL', plugin_dir_url( __FILE__ ) );
		$this->define( 'SP_EA_BASENAME', plugin_basename( __FILE__ ) );
		$this->define( 'SP_EA_INCLUDES', SP_EA_PATH . '/includes' );
	}
	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    2.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Easy_Accordion_Free_Admin( SP_PLUGIN_NAME, SP_EA_VERSION );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_admin_styles' );
		$this->loader->add_filter( 'post_updated_messages', $plugin_admin, 'eap_updated_messages', 10, 2 );
		$this->loader->add_filter( 'manage_sp_easy_accordion_posts_columns', $plugin_admin, 'filter_accordion_admin_column' );

		$this->loader->add_action( 'manage_sp_easy_accordion_posts_custom_column', $plugin_admin, 'display_accordion_admin_fields', 10, 2 );
		$this->loader->add_filter( 'admin_footer_text', $plugin_admin, 'sp_eap_review_text', 10, 2 );
		$this->loader->add_filter( 'plugin_row_meta', $plugin_admin, 'after_easy_accodion_row_meta', 10, 4 );
		$this->loader->add_action( 'activated_plugin', $plugin_admin, 'sp_ea_redirect_after_activation', 10, 2 );
		// Help Page.
		$help_page = new Easy_Accordion_Free_Help( SP_PLUGIN_NAME, SP_EA_VERSION );
		$this->loader->add_action( 'admin_menu', $help_page, 'help_admin_menu', 40 );
		$this->loader->add_filter( 'plugin_action_links', $help_page, 'add_plugin_action_links', 10, 2 );
	}
		/**
		 * Define the locale for this plugin for internationalization.
		 *
		 * Uses the Easy_Accordion_Free_I18n class in order to set the domain and to register the hook
		 * with WordPress.
		 *
		 * @since    2.0.0
		 * @access   private
		 */
	private function set_locale() {

		$plugin_i18n = new Easy_Accordion_Free_I18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}
	/**
	 * Register common hooks.
	 *
	 * @since 2.0.0
	 * @access private
	 */
	private function define_common_hooks() {
		$plugin_cpt           = new Easy_Accordion_Free_Post_Type( $this->plugin_name, $this->version );
		$plugin_review_notice = new Easy_Accordion_Free_Review( SP_PLUGIN_NAME, SP_EA_VERSION );
		$this->loader->add_action( 'init', $plugin_cpt, 'easy_accordion_post_type', 10 );

		$this->loader->add_action( 'admin_notices', $plugin_review_notice, 'display_admin_notice' );
		$this->loader->add_action( 'wp_ajax_sp-eafree-never-show-review-notice', $plugin_review_notice, 'dismiss_review_notice' );
	}
	/**
	 * Included required files.
	 *
	 * @return void
	 */
	public function includes() {
		require_once SP_EA_INCLUDES . '/class-easy-accordion-free-updates.php';
		require_once SP_EA_INCLUDES . '/class-easy-accordion-free-loader.php';
		require_once SP_EA_INCLUDES . '/class-easy-accordion-free-post-types.php';
		require_once SP_EA_INCLUDES . '/class-easy-accordion-free-i18n.php';
		require_once SP_EA_PATH . 'admin/views/eap-mce-button/button.php';
		require_once SP_EA_PATH . '/public/views/scripts.php';
		require_once SP_EA_PATH . '/admin/class-easy-accordion-free-admin.php';
		require_once SP_EA_PATH . '/admin/views/help.php';
		require_once SP_EA_PATH . '/admin/views/models/classes/setup.class.php';
		require_once SP_EA_PATH . '/admin/views/metabox-config.php';
		require_once SP_EA_PATH . '/admin/views/option-config.php';
		require_once SP_EA_PATH . '/admin/views/notices/review.php';
		require_once SP_EA_PATH . '/public/views/class-easy-accordion-free-shortcode.php';
		require_once SP_EA_PATH . '/public/views/deprecated/shortcode-deprecated.php';
	}
	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Easy_Accordion_Free_Loader. Orchestrates the hooks of the plugin.
	 * - Easy_Accordion_Free_i18n. Defines internationalization functionality.
	 * - Easy_Accordion_Free_Admin. Defines all hooks for the admin area.
	 * - Easy_Accordion_Free_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    2.0.0
	 * @access   private
	 */
	private function load_dependencies() {
		$this->loader = new Easy_Accordion_Free_Loader();

	}
	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    2.0.0
	 */
	public function run() {
		$this->loader->run();
	}
}

/**
 * Main instance of Easy Accordion
 *
 * Returns the main instance of the Easy Accordion.
 *
 * @since 2.0.0
 */
function sp_ea() {
	$plugin = SP_EASY_ACCORDION_FREE::init();
	$plugin->loader->run();
}
sp_ea();
