<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access pages directly.

//
// Metabox of the uppers section / Upload section.
// Set a unique slug-like ID.
//
$eap_accordion_content_source_settings = 'sp_eap_upload_options';

//
// Create a metabox.
//
SP_EAP::createMetabox(
	$eap_accordion_content_source_settings,
	array(
		'title'     => __( 'Easy Accordion Pro', 'easy-accordion-free' ),
		'post_type' => 'sp_easy_accordion',
		'context'   => 'normal',
	)
);

//
// Create a section.
//
SP_EAP::createSection(
	$eap_accordion_content_source_settings,
	array(
		'fields' => array(
			array(
				'type'  => 'heading',
				'image' => plugin_dir_url( __DIR__ ) . 'img/eap-logo.png',
				'after' => '<i class="fa fa-life-ring"></i> Support',
				'link'  => 'https://shapedplugin.com/support/',
				'class' => 'eap-admin-header',
			),
			array(
				'id'      => 'eap_accordion_type',
				'type'    => 'button_set',
				'title'   => __( 'Accordion Type', 'easy-accordion-free' ),
				'options' => array(
					'content-accordion' => array(
						'text' => __( 'Content', 'wp-carousel-pro' ),
					),
					'post-accordion'    => array(
						'text'     => __( 'Post (Pro)', 'easy-accordion-free' ),
						'pro_only' => true,
					),
				),
				'default' => 'content-accordion',
			),
			// Content Accordion.
			array(
				'id'                     => 'accordion_content_source',
				'type'                   => 'group',
				'title'                  => __( 'Content', 'easy-accordion-free' ),
				'button_title'           => __( 'Add New Item', 'easy-accordion-free' ),
				'class'                  => 'eap_accordion_content_wrapper',
				'accordion_title_prefix' => __( 'Item :', 'easy-accordion-free' ),
				'accordion_title_number' => true,
				'accordion_title_auto'   => true,
				'fields'                 => array(
					array(
						'id'         => 'accordion_content_title',
						'type'       => 'text',
						'wrap_class' => 'eap_accordion_content_source',
						'title'      => __( 'Title', 'easy-accordion-free' ),
					),
					array(
						'id'            => 'accordion_content_description',
						'type'          => 'wp_editor',
						'wrap_class'    => 'eap_accordion_content_source',
						'title'         => __( 'Description', 'easy-accordion-free' ),
						'height'        => '150px',
					),
				),
				'dependency'             => array( 'eap_accordion_type', '==', 'content-accordion' ),
			), // End of Content Accordion.
		), // End of fields array.
	)
);

//
// Metabox for the Accordion Post Type.
// Set a unique slug-like ID.
//
$eap_accordion_shortcode_settings = 'sp_eap_shortcode_options';

//
// Create a metabox.
//
SP_EAP::createMetabox(
	$eap_accordion_shortcode_settings,
	array(
		'title'     => __( 'Shortcode Section', 'easy-accordion-free' ),
		'post_type' => 'sp_easy_accordion',
		'theme'     => 'light',
		'context'   => 'normal',
	)
);
//
// Create a section.
//
SP_EAP::createSection(
	$eap_accordion_shortcode_settings,
	array(
		'title'  => __( 'Accordion Settings', 'easy-accordion-free' ),
		'icon'   => 'fa fa-list-ul',
		'fields' => array(
			array(
				'id'       => 'eap_accordion_layout',
				'type'     => 'image_select',
				'title'    => __( 'Accordion Layout', 'easy-accordion-free' ),
				'subtitle' => __( 'Choose an accordion layout.', 'easy-accordion-free' ),
				'options'  => array(
					'vertical'   => array(
						'image'       => SP_EA_URL . 'admin/img/vertical.png',
						'option_name' => __( 'Vertical', 'easy-accordion-free' ),
					),
					'horizontal' => array(
						'pro_only'    => true,
						'image'       => SP_EA_URL . 'admin/img/horizontal.png',
						'option_name' => __( 'Horizontal', 'easy-accordion-free' ),
					),
				),
				'default'  => 'vertical',
			),
			array(
				'id'         => 'eap_accordion_theme',
				'type'       => 'theme_select',
				'title'      => __( 'Choose a Theme', 'easy-accordion-free' ),
				'class'      => 'sp_eap_accordion_theme',
				'subtitle'   => __( 'Select an accordion theme style. 16+ Premium Themes available in <a href="https://shapedplugin.com/demo/easy-accordion-pro/" target="_blank">pro version!</a> ', 'easy-accordion-free' ),
				'options'    => array(
					'sp-ea-one' => array(
						'text' => __( 'Theme One', 'easy-accordion-free' ),
					),
					'sp-ea-two' => array(
						'text'     => __( '16+ Themes (Pro)', 'easy-accordion-free' ),
						'pro_only' => true,
					),
				),
				'default'    => 'sp-ea-one',
				'dependency' => array( 'eap_accordion_layout', '==', 'vertical' ),
			),
			array(
				'id'       => 'eap_accordion_event',
				'type'     => 'button_set',
				'title'    => __( 'Activator Event', 'easy-accordion-free' ),
				'subtitle' => __( 'Select event click or mouse over to expand accordion.', 'easy-accordion-free' ),
				'options'  => array(
					'ea-click' => array(
						'text' => __( 'Click', 'easy-accordion-free' ),
					),
					'ea-hover' => array(
						'text' => __( 'Mouse Over', 'easy-accordion-free' ),
					),
				),
				'default'  => 'ea-click',
			),
			array(
				'id'       => 'eap_accordion_mode',
				'type'     => 'radio',
				'title'    => __( 'Accordion Mode', 'easy-accordion-free' ),
				'subtitle' => __( 'Expand or collapse accordion option on page load.', 'easy-accordion-free' ),
				'options'  => array(
					'ea-first-open' => __( 'First Open', 'easy-accordion-free' ),
					'ea-multi-open' => __( 'All Open', 'easy-accordion-free' ),
					'ea-all-close'  => __( 'All Folded', 'easy-accordion-free' ),
				),
				'default'  => 'ea-first-open',
			),
			array(
				'id'       => 'eap_mutliple_collapse',
				'type'     => 'switcher',
				'title'    => __( 'Multiple Opening Together', 'easy-accordion-free' ),
				'subtitle' => __( 'Switch on to open multiple accordions together.', 'easy-accordion-free' ),
				'default'  => false,
			),
			array(
				'id'       => 'eap_accordion_fillspace',
				'type'     => 'checkbox',
				'title'    => __( 'Fixed Content Height', 'easy-accordion-free' ),
				'subtitle' => __( 'Check to display collapsible accordion content in a limited amount of space.', 'easy-accordion-free' ),
				'default'  => false,
			),
			array(
				'id'              => 'eap_accordion_fillspace_height',
				'type'            => 'spacing',
				'title'           => __( 'Maximum Height', 'easy-accordion-free' ),
				'subtitle'        => __( 'Set fixed accordion content panel height. Defualt height 200px.', 'easy-accordion-free' ),
				'class'           => 'accordion-fillspace-height',
				'all'             => true,
				'all_icon'        => __( '<i class="fa fa-arrows-v"></i>', 'easy-accordion-free' ),
				'all_placeholder' => __( 'Height', 'easy-accordion-free' ),
				'units'           => array(
					'px',
				),
				'default'         => array(
					'all' => '200',
				),
				'attributes'      => array(
					'min' => 50,
				),
				'dependency'      => array( 'eap_accordion_fillspace', '==', 'true' ),
			),
			array(
				'id'       => 'eap_preloader',
				'type'     => 'switcher',
				'title'    => __( 'Preloader', 'easy-accordion-free' ),
				'subtitle' => __( 'Accordion will be hidden until page load completed.', 'easy-accordion-free' ),
				'default'  => false,
			),
			array(
				'id'         => 'eap_schema_markup',
				'type'       => 'switcher',
				'title'      => __( 'Schema Markup', 'easy-accordion-free' ),
				'subtitle'   => __( 'Enable/Disable schema markup.', 'easy-accordion-free' ),
				'text_on'    => __( 'Enabled', 'easy-accordion-free' ),
				'text_off'   => __( 'Disabled', 'easy-accordion-free' ),
				'text_width' => 94,
				'default'    => false,
			),
		), // Fields array end.
	)
); // End of Upload section.

//
// Carousel settings section begin.
//
SP_EAP::createSection(
	$eap_accordion_shortcode_settings,
	array(
		'title'  => __( 'Display Settings', 'easy-accordion-free' ),
		'icon'   => 'fa fa-th-large',
		'fields' => array(
			array(
				'id'       => 'section_title',
				'type'     => 'switcher',
				'title'    => __( 'Accordion Section Title', 'easy-accordion-free' ),
				'subtitle' => __( 'Show/hide the accordion section title.', 'easy-accordion-free' ),
				'default'  => false,
			),
			array(
				'id'              => 'section_title_margin_bottom',
				'type'            => 'spacing',
				'title'           => __( 'Margin Bottom from Section Title', 'easy-accordion-free' ),
				'subtitle'        => __( 'Set a margin bottom for the accordion section title. Defualt value is 30px.', 'easy-accordion-free' ),
				'all'             => true,
				'all_icon'        => '<i class="fa fa-long-arrow-down"></i>',
				'class'           => 'section-title-margin',
				'all_placeholder' => 'margin',
				'default'         => array(
					'all' => '30',
				),
				'units'           => array(
					'px',
				),
				'dependency'      => array(
					'section_title',
					'==',
					'true',
				),
			),
			array(
				'type'    => 'subheading',
				'content' => __( 'Accordion Expand & Collapse Icon', 'easy-accordion-free' ),
			),
			array(
				'id'       => 'eap_expand_close_icon',
				'type'     => 'switcher',
				'title'    => __( 'Expand & Collapse Icon', 'easy-accordion-free' ),
				'subtitle' => __( 'Show/hide expand and collapse icon.', 'easy-accordion-free' ),
				'default'  => true,
			),
			array(
				'id'         => 'eap_expand_collapse_icon',
				'type'       => 'image_select',
				'title'      => __( 'Expand & Collapse Icon Style', 'easy-accordion-free' ),
				'subtitle'   => __( 'Choose a expand and collapse icon style.', 'easy-accordion-free' ),
				'options'    => array(
					'1'  => array(
						'image' => SP_EA_URL . 'admin/img/1-plus.png',
					),
					'2'  => array(
						'image'    => SP_EA_URL . 'admin/img/2-angle.png',
						'pro_only' => true,
					),
					'3'  => array(
						'image'    => SP_EA_URL . 'admin/img/3-angle-double.png',
						'pro_only' => true,
					),
					'4'  => array(
						'image'    => SP_EA_URL . 'admin/img/4-arrow.png',
						'pro_only' => true,
					),
					'5'  => array(
						'image'    => SP_EA_URL . 'admin/img/5-tick.png',
						'pro_only' => true,
					),
					'6'  => array(
						'image'    => SP_EA_URL . 'admin/img/6-chevron.png',
						'pro_only' => true,
					),
					'7'  => array(
						'image'    => SP_EA_URL . 'admin/img/7-hand.png',
						'pro_only' => true,
					),
					'8'  => array(
						'image'    => SP_EA_URL . 'admin/img/8-carret.png',
						'pro_only' => true,
					),
					'9'  => array(
						'image'    => SP_EA_URL . 'admin/img/9-agnle-2.png',
						'pro_only' => true,
					),
					'10' => array(
						'image'    => SP_EA_URL . 'admin/img/10-angle-double-up.png',
						'pro_only' => true,
					),
					'11' => array(
						'image'    => SP_EA_URL . 'admin/img/11-arrow-up.png',
						'pro_only' => true,
					),
					'12' => array(
						'image'    => SP_EA_URL . 'admin/img/12-agnle-bold-up.png',
						'pro_only' => true,
					),
					'13' => array(
						'image'    => SP_EA_URL . 'admin/img/13-angle-3.png',
						'pro_only' => true,
					),
					'14' => array(
						'image'    => SP_EA_URL . 'admin/img/14-carret-up.png',
						'pro_only' => true,
					),
					'15' => array(
						'image'    => SP_EA_URL . 'admin/img/15-angle-double-down.png',
						'pro_only' => true,
					),
				),
				'default'    => '1',
				'dependency' => array(
					'eap_expand_close_icon',
					'==',
					'true',
				),
			),

			array(
				'id'              => 'eap_icon_size',
				'type'            => 'spacing',
				'title'           => __( 'Expand & Collapse Icon Size', 'easy-accordion-free' ),
				'subtitle'        => __( 'Set accordion collapse and expand icon size. Defualt value is 16px.', 'easy-accordion-free' ),
				'all'             => true,
				'all_icon'        => false,
				'all_placeholder' => 'speed',
				'default'         => array(
					'all' => '16',
				),
				'units'           => array(
					'px',
				),
				'attributes'      => array(
					'min' => 0,
				),
				'dependency'      => array(
					'eap_expand_close_icon',
					'==',
					'true',
				),
			),
			array(
				'id'         => 'eap_icon_color_set',
				'type'       => 'color',
				'title'      => __( 'Icon Color', 'easy-accordion-free' ),
				'subtitle'   => __( 'Set icon color.', 'easy-accordion-free' ),
				'default'    => '#444',
				'dependency' => array(
					'eap_expand_close_icon',
					'==',
					'true',
				),
			),

			array(
				'id'         => 'eap_icon_position',
				'type'       => 'button_set',
				'title'      => __( 'Expand & Collapse Icon Position', 'easy-accordion-free' ),
				'subtitle'   => __( 'Set accordion expand and collapse icon position or alingment.', 'easy-accordion-free' ),
				'options'    => array(
					'left'  => array(
						'text' => __( 'Left', 'easy-accordion-free' ),
					),
					'right' => array(
						'text' => __( 'Right', 'easy-accordion-free' ),
					),
				),
				'default'    => 'left',
				'dependency' => array(
					'eap_expand_close_icon',
					'==',
					'true',
				),
			),
			array(
				'type'    => 'subheading',
				'content' => __( 'Accordion Item Title & Description', 'easy-accordion-free' ),
			),
			array(
				'id'       => 'eap_border_css',
				'type'     => 'border',
				'title'    => __( 'Accordion Border', 'easy-accordion-free' ),
				'subtitle' => __( 'Set accordion item border. Defualt value is 1px.', 'easy-accordion-free' ),
				'all'      => true,
				'default'  => array(
					'all'   => 1,
					'style' => 'solid',
					'color' => '#e2e2e2',
				),
			),
			// array(
			// 	'id'       => 'eap_title_color',
			// 	'type'     => 'color',
			// 	'title'    => __( 'Title  Color', 'easy-accordion-free' ),
			// 	'subtitle' => __( 'Set accordion title color.', 'easy-accordion-free' ),
			// 	'default'  => '#444',
			// ),
			array(
				'id'       => 'eap_header_bg_color',
				'type'     => 'color',
				'title'    => __( 'Title Background Color', 'easy-accordion-free' ),
				'subtitle' => __( 'Set accordion title background color.', 'easy-accordion-free' ),
				'default'  => '#eee',
			),
			// array(
			// 	'id'       => 'eap_description_color',
			// 	'type'     => 'color',
			// 	'title'    => __( 'Description Color', 'easy-accordion-free' ),
			// 	'subtitle' => __( 'Set accordion description color.', 'easy-accordion-free' ),
			// 	'default'  => '#444',
			// ),
			array(
				'id'       => 'eap_description_bg_color',
				'type'     => 'color',
				'title'    => __( 'Description Background Color', 'easy-accordion-free' ),
				'subtitle' => __( 'Set accordion description background color.', 'easy-accordion-free' ),
				'default'  => '#fff',
			),
			array(
				'id'       => 'eap_animation_time',
				'type'     => 'spinner',
				'title'    => __( 'Transition Time', 'easy-accordion-free' ),
				'subtitle' => __( 'Set accordion expand and collapse transition time. Defualt value is 500 milliseconds.', 'easy-accordion-free' ),
				'unit'     => 'ms',
				'min'      => 0,
				'max'      => 99999,
				'default'  => 500,
			),
		),
	)
); // Accordion settings section end.

//
// Typography section begin.
//
SP_EAP::createSection(
	$eap_accordion_shortcode_settings,
	array(
		'title'           => __( 'Typography', 'easy-accordion-free' ),
		'icon'            => 'fa fa-font',
		'enqueue_webfont' => true,
		'fields'          => array(
			array(
				'type'    => 'notice',
				'content' => __( 'These Typography (940+ Google Fonts) options are available in the <a href="https://shapedplugin.com/plugin/easy-accordion-pro/" target="_blank">Pro Version</a> only except color fields.', 'easy-accordion-free' ),
			),
			array(
				'id'         => 'section_title_font_load',
				'type'       => 'switcherf',
				'title'      => __( 'Load Accordion Section Title Font', 'easy-accordion-free' ),
				'subtitle'   => __( 'On/Off google font for the section title.', 'easy-accordion-free' ),
				'default'    => false,
				'dependency' => array(
					'section_title',
					'==',
					'true',
					true,
				),
			),
			array(
				'id'           => 'eap_section_title_typography',
				'type'         => 'typography',
				'title'        => __( 'Accordion Section Title Font', 'easy-accordion-free' ),
				'subtitle'     => __( 'Set Accordion section title font properties.', 'easy-accordion-free' ),
				'default'      => array(
					'font-family'    => 'Open Sans',
					'font-style'     => '600',
					'font-size'      => '28',
					'line-height'    => '32',
					'letter-spacing' => '0',
					'text-align'     => 'left',
					'text-transform' => 'none',
					'type'           => 'google',
					'unit'           => 'px',
					'color'          => '#444',
				),
				'preview'      => 'always',
				'dependency'   => array(
					'section_title',
					'==',
					'true',
					true,
				),
				'preview_text' => 'Accordion Section Title',
			),
			array(
				'id'       => 'eap_title_font_load',
				'type'     => 'switcherf',
				'title'    => __( 'Load Accordion Item Title Font', 'easy-accordion-free' ),
				'subtitle' => __( 'On/Off google font for the accordion item title.', 'easy-accordion-free' ),
				'default'  => false,
			),
			array(
				'id'           => 'eap_title_typography',
				'type'         => 'typography',
				'title'        => __( 'Item Title Font', 'easy-accordion-free' ),
				'subtitle'     => __( 'Set accordion item title font properties.', 'easy-accordion-free' ),
				'default'      => array(
					'font-family'    => 'Open Sans',
					'font-style'     => '600',
					'font-size'      => '20',
					'line-height'    => '30',
					'letter-spacing' => '0',
					'color'          => '#444',
					'active_color'   => '#444',
					'hover_color'    => '#444',
					'text-align'     => 'left',
					'text-transform' => 'none',
					'type'           => 'google',
				),
				'preview_text' => 'Accordion Title',
				'preview'      => 'always',
				'color'        => true,
			),
			array(
				'id'       => 'eap_desc_font_load',
				'type'     => 'switcherf',
				'title'    => __( 'Load Accordion Item Description Font', 'easy-accordion-free' ),
				'subtitle' => __( 'On/Off google font for the accordion item description.', 'easy-accordion-free' ),
				'default'  => false,
			),
			array(
				'id'           => 'eap_content_typography',
				'type'         => 'typography',
				'title'        => __( 'Description Font', 'easy-accordion-free' ),
				'subtitle'     => __( 'Set accordion item description font properties.', 'easy-accordion-free' ),
				'default'      => array(
					'color'          => '#444',
					'font-family'    => 'Open Sans',
					'font-style'     => '400',
					'font-size'      => '16',
					'line-height'    => '26',
					'letter-spacing' => '0',
					'text-align'     => 'left',
					'text-transform' => 'none',
					'type'           => 'google',
				),
				'preview'      => 'always',
				'preview_text' => 'The Accordion Description',
			),
		), // End of fields array.
	)
); // Style settings section end.
SP_EAP::createSection(
	$eap_accordion_shortcode_settings,
	array(
		'name'   => 'sp_eap_upgrade_area',
		'title'  => __( 'Upgrade to Pro', 'easy-accordion-free' ),
		'icon'   => ' fa fa-rocket',
		'class'  => 'eap-upgrade',
		'fields' => array(
			array(
				'type' => 'upgrade',
			),
		),
	)
);
//
// Metabox of the footer section / shortocde section.
// Set a unique slug-like ID.
//
$eap_display_shortcode = 'sp_eap_display_shortcode';

//
// Create a metabox.
//
SP_EAP::createMetabox(
	$eap_display_shortcode,
	array(
		'title'     => 'Easy Accordion',
		'post_type' => 'sp_easy_accordion',
		'context'   => 'normal',
	)
);

//
// Create a section.
//
SP_EAP::createSection(
	$eap_display_shortcode,
	array(
		'fields' => array(
			array(
				'type'  => 'shortcode',
				'class' => 'eap-admin-footer',
			),
		),
	)
);
