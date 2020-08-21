<?php

/**
 * The file that defines the shortcode plugin class.
 *
 * A class definition that define easy accordion  shortcode of the plugin.
 *
 * @link       https://shapedplugin.com/
 * @since      2.0.0
 *
 * @package   easy-accordion-free
 * @subpackage easy-accordion-free/includes
 */

/**
 * The Shortcode class.
 *
 * This is used to define shortcode, shortcode attributes.
 *
 * @since      2.0.0
 * @package   easy-accordion-free
 * @subpackage easy-accordion-free/includes
 * @author     ShapedPlugin <shapedplugin@gmail.com>
 */
class Easy_Accordion_Free_Shortcode {

	/**
	 * Holds the class object.
	 *
	 * @since 2.0.0
	 * @var object
	 */
	public static $instance;

	/**
	 * Contain the base class object.
	 *
	 * @since 2.0.0
	 * @var object
	 */
	public $base;

	/**
	 * Holds the accordion data.
	 *
	 * @since 2.0.0
	 * @var array
	 */
	public $data;


	/**
	 * Undocumented variable
	 *
	 * @var string $post_id The post id of the accordion shortcode.
	 */
	public $post_id;


	/**
	 * Allows for accessing single instance of class. Class should only be constructed once per call.
	 *
	 * @since 2.0.0
	 * @static
	 * @return Easy_Accordion_Free_Shortcode Shortcode instance.
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Primary class constructor.
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		add_shortcode( 'sp_easyaccordion', array( $this, 'sp_easy_accordion_shortcode' ) );
	}


	/**
	 * A shortcode for rendering the accordion.
	 *
	 * @param [string] $attributes Shortcode attributes.
	 * @param [string] $content Shortcode content.
	 * @return array
	 */
	public function sp_easy_accordion_shortcode( $attributes, $content = null ) {
		if ( empty( $attributes['id'] ) || ( get_post_status( $attributes['id'] ) === 'trash' ) ) {
			return;
		}

		$post_id = intval( $attributes['id'] );

		// Content Accordion.
		$upload_data = get_post_meta( $post_id, 'sp_eap_upload_options', true );
		if ( empty( $upload_data ) ) {
				return;
		}
		$accordion_type  = isset( $upload_data['eap_accordion_type'] ) ? $upload_data['eap_accordion_type'] : '';
		$content_sources = $upload_data['accordion_content_source'];

		// Shortcode Option.
		$shortcode_data        = get_post_meta( $post_id, 'sp_eap_shortcode_options', true );
		$accordion_layout      = isset( $shortcode_data['eap_accordion_layout'] ) ? $shortcode_data['eap_accordion_layout'] : '';
		$accordion_theme_class = isset( $shortcode_data['eap_accordion_theme'] ) ? $shortcode_data['eap_accordion_theme'] : '';
		global $accordion_wraper_class;
		$accordion_wraper_class = $accordion_theme_class . ' sp-easy-accordion';
		$accordion_item_class   = 'sp-ea-single';
		$eap_schema_markup                  = isset( $shortcode_data['eap_schema_markup'] ) ? $shortcode_data['eap_schema_markup'] : false;
		// Accordion settings.
		$eap_preloader                   = isset( $shortcode_data['eap_preloader'] ) ? $shortcode_data['eap_preloader'] : false;
		$eap_active_event                = isset( $shortcode_data['eap_accordion_event'] ) ? $shortcode_data['eap_accordion_event'] : '';
		$eap_accordion_mode              = isset( $shortcode_data['eap_accordion_mode'] ) ? $shortcode_data['eap_accordion_mode'] : '';
		$eap_mutliple_collapse           = isset( $shortcode_data['eap_mutliple_collapse'] ) ? $shortcode_data['eap_mutliple_collapse'] : '';
		$eap_accordion_fillspace         = isset( $shortcode_data['eap_accordion_fillspace'] ) ? $shortcode_data['eap_accordion_fillspace'] : '';
		$eap_accordion_fillspace_height  = isset( $shortcode_data['eap_accordion_fillspace_height']['all'] ) ? $shortcode_data['eap_accordion_fillspace_height']['all'] : $shortcode_data['eap_accordion_fillspace_height'];
		$acc_section_title               = isset( $shortcode_data['section_title'] ) ? $shortcode_data['section_title'] : '';
		$acc_section_title_margin_bottom = isset( $shortcode_data['section_title_margin_bottom']['all'] ) ? $shortcode_data['section_title_margin_bottom']['all'] : $shortcode_data['section_title_margin_bottom'];
		$accordion_height                = isset( $shortcode_data['accordion_height'] ) ? $shortcode_data['accordion_height'] : '';
		$eap_animation_time              = isset( $shortcode_data['eap_animation_time'] ) ? $shortcode_data['eap_animation_time'] : '';

		$eap_border       = isset( $shortcode_data['eap_border_css'] ) ? $shortcode_data['eap_border_css'] : '';
		$eap_border_width = isset( $eap_border['all'] ) ? $eap_border['all'] : $eap_border['width'];
		$eap_border_style = isset( $eap_border['style'] ) ? $eap_border['style'] : '';
		$eap_border_color = isset( $eap_border['color'] ) ? $eap_border['color'] : '';
		// Section title.
		$section_title_typho       = isset( $shortcode_data['eap_section_title_typography'] ) ? $shortcode_data['eap_section_title_typography'] : '';
		$section_title_typho_color = isset( $section_title_typho['color'] ) ? $section_title_typho['color'] : '#444';
		// Accordion title.
		$eap_title_typho       = isset( $shortcode_data['eap_title_typography'] ) ? $shortcode_data['eap_title_typography'] : '';
		$eap_title_tag         = isset( $shortcode_data['ea_title_heading_tag'] ) ? $shortcode_data['ea_title_heading_tag'] : '3';
		$eap_title_typho_color = isset( $eap_title_typho['color'] ) ? $eap_title_typho['color'] : '#444';
		$eap_title_padding     = isset( $shortcode_data['eap_title_padding'] ) ? $shortcode_data['eap_title_padding'] : '';
		$eap_header_bg         = isset( $shortcode_data['eap_header_bg_color'] ) ? $shortcode_data['eap_header_bg_color'] : '';
		// header icon.
		// Expand / Collapse Icon.
		$eap_icon                 = isset( $shortcode_data['eap_expand_close_icon'] ) ? $shortcode_data['eap_expand_close_icon'] : '';
		$eap_expand_collapse_icon = isset( $shortcode_data['eap_expand_collapse_icon'] ) ? $shortcode_data['eap_expand_collapse_icon'] : '';
		$eap_ex_icon_position     = isset( $shortcode_data['eap_icon_position'] ) ? $shortcode_data['eap_icon_position'] : '';
		$eap_icon_size            = isset( $shortcode_data['eap_icon_size']['all'] ) ? $shortcode_data['eap_icon_size']['all'] : $shortcode_data['eap_icon_size'];
		$eap_icon_color           = isset( $shortcode_data['eap_icon_color_set'] ) ? $shortcode_data['eap_icon_color_set'] : '';
		$eap_collapse_icon        = 'fa-plus';
		$eap_expand_icon          = 'fa-minus';
		// Description.
		$eap_content_typo       = isset( $shortcode_data['eap_content_typography'] ) ? $shortcode_data['eap_content_typography'] : '';
		$eap_content_typo_color = isset( $eap_content_typo['color'] ) ? $eap_content_typo['color'] : '#444';
		$eap_description_bg     = isset( $shortcode_data['eap_description_bg_color'] ) ? $shortcode_data['eap_description_bg_color'] : '';
		wp_enqueue_style( 'sp-ea-style' );
		wp_enqueue_script( 'sp-ea-accordion-js' );
		wp_enqueue_script( 'sp-ea-accordion-config' );
		include SP_EA_PATH . '/public/dynamic_style.php';
		ob_start();
		echo $ea_dynamic_css;
		include SP_EA_PATH . '/public/views/templates/default-accordion.php';
		$html = ob_get_contents();
		ob_end_clean();
		return apply_filters( 'sp_easy_accordion', $html, $post_id );
	}
};
new Easy_Accordion_Free_Shortcode();
