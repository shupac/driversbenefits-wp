<?php
/**
 * The help page for the Easy Accordion Free
 *
 * @package Easy Accordion Free
 * @subpackage easy-accordion-free/admin
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}  // if direct access.

/**
 * The help class for the Easy Accordion Free
 */
class Easy_Accordion_Free_Help {

	/**
	 * Wp Carousel Pro single instance of the class
	 *
	 * @var null
	 * @since 2.0
	 */
	protected static $_instance = null;

	/**
	 * Main EASY_ACCORDION_PRO_HELP Instance
	 *
	 * @since 2.0
	 * @static
	 * @see sp_eap_help()
	 * @return self Main instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Add admin menu.
	 *
	 * @return void
	 */
	public function help_admin_menu() {
		add_submenu_page(
			'edit.php?post_type=sp_easy_accordion',
			__( 'Easy Accordion Help', 'easy-accordion-free' ),
			__( 'Help', 'easy-accordion-free' ),
			'manage_options',
			'eap_help',
			array(
				$this,
				'help_page_callback',
			)
		);
	}

	/**
	 * The Easy Accordion Help Callback.
	 *
	 * @return void
	 */
	public function help_page_callback() {
		echo '
        <div class="wrap about-wrap sp-eap-help">
        <h1>' . esc_html__( 'Welcome to Easy Accordion!', ' Easy-accordion-pro' ) . '</h1>
        </div>
        <div class="wrap about-wrap sp-eap-help">
			<p class="about-text">' . esc_html__(
		'Thank you for installing Easy Accordion! You\'re now running the most popular Easy Accordion plugin.
			This video will help you get started with the plugin.',
    'easy-accordion-free'
) . '</p>
						<div class="wp-badge"></div>

			<hr>

			<div class="headline-feature feature-video">
				<iframe width="560" height="315" src="https://www.youtube.com/embed/rZrx-4cisAY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
			<hr>

			<div class="feature-section three-col">
				<div class="col">
					<div class="sp-eap-feature sp-eap-text-center">
						<i class="sp-eap-font-icon fa fa-life-ring"></i>
						<h3>' . esc_html__( 'Need any Assistance?', 'easy-accordion-free' ) . '</h3>
						<p>' . esc_html__( 'Our Expert Support Team is always ready to help you out promptly.', 'easy-accordion-free' ) . '</p>
						<a href="https://shapedplugin.com/support-forum/ask-question/" target="_blank" class="button button-primary">' . esc_html__( 'Contact Support', 'easy-accordion-free' ) . '</a>
					</div>
				</div>
				<div class="col">
					<div class="sp-eap-feature sp-eap-text-center">
						<i class="sp-eap-font-icon fa fa-file-text"></i>
						<h3>' . esc_html__( 'Looking for Documentation?', 'easy-accordion-free' ) . '</h3>
						<p>' . esc_html__( 'We have detailed documentation on every aspects of Easy Accordion.', 'easy-accordion-free' ) . '</p>
						<a href="https://shapedplugin.com/docs/docs/easy-accordion/introduction/" target="_blank" class="button button-primary">' . esc_html__( 'Documentation', 'easy-accordion-free' ) . '</a>
					</div>
				</div>
				<div class="col">
					<div class="sp-eap-feature sp-eap-text-center">
						<i class="sp-eap-font-icon fa fa-thumbs-up"></i>
						<h3>' . esc_html__( 'Like This Plugin?', 'easy-accordion-free' ) . '</h3>
						<p>' . esc_html__( 'If you like Easy Accordion, please leave us a 5 star rating.', 'easy-accordion-free' ) . '</p>
						<a href="https://wordpress.org/support/plugin/easy-accordion-free/reviews/?filter=5" target="_blank" class="button button-primary">' . esc_html__( 'Rate The Plugin', 'easy-accordion-free' ) . '</a>
					</div>
				</div>
			</div>

			<hr>
		</div>';
	}

	/**
	 * Add plugin action menu
	 *
	 * @param array  $links The action link.
	 * @param string $file The file.
	 *
	 * @return array
	 */
	public function add_plugin_action_links( $links, $file ) {

		if ( $file === SP_EA_BASENAME ) {
			$new_links =
				sprintf( '<a href="%s">%s</a>', admin_url( 'post-new.php?post_type=sp_easy_accordion' ), __( 'Add Accordion', 'easy-accordion-free' ) );
			array_unshift( $links, $new_links );

			$links['go_pro'] = sprintf( '<a target="_blank" href="%1$s" style="color: #35b747; font-weight: 700;">Go Premium!</a>', 'https://shapedplugin.com/plugin/easy-accordion-pro' );
		}

		return $links;
	}

}
