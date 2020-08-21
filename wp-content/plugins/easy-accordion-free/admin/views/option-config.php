<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.

//
// Set a unique slug-like ID.
//
$prefix = 'sp_eap_settings';

//
// Create options.
//
SP_EAP::createOptions(
	$prefix,
	array(
		'menu_title'       => __( 'Settings', 'easy-accordion-free' ),
		'menu_slug'        => 'eap_settings',
		'menu_parent'      => 'edit.php?post_type=sp_easy_accordion',
		'menu_type'        => 'submenu',
		'ajax_save'        => true,
		'show_bar_menu'    => false,
		'save_defaults'    => true,
		'show_reset_all'   => true,
		'show_all_options' => false,
		'show_search'      => false,
		'show_footer'      => false,
		'framework_title'  => __( 'Easy Accordion', 'easy-accordion-free' ),
		'framework_class'  => 'sp-eap-options',
		'theme'            => 'light',
	)
);

//
// Create a section.
//
SP_EAP::createSection(
	$prefix,
	array(
		'title'  => __( 'Advanced Settings', 'easy-accordion-free' ),
		'icon'   => 'fa fa-cogs',
		'fields' => array(
			array(
				'id'       => 'eap_data_remove',
				'type'     => 'checkbox',
				'title'    => __( 'Clean-up Data on Deletion', 'easy-accordion-free' ),
				'subtitle' => __( 'Check this box if you would like Easy Accordion to completely remove all of its data when the plugin is deleted.', 'easy-accordion-free' ),
				'default'  => false,
			),
			array(
				'type'    => 'subheading',
				'content' => __( 'Enqueue or Dequeue CSS', 'easy-accordion-free' ),
			),
			array(
				'id'         => 'eap_dequeue_fa_css',
				'type'       => 'switcher',
				'title'      => __( 'Font Awesome CSS', 'easy-accordion-free' ),
				'subtitle'   => __( 'Switch to enqueue/dequeue font awesome CSS.', 'easy-accordion-free' ),
				'default'    => true,
				'text_on'    => __( 'enqueue', 'easy-accordion-free' ),
				'text_off'   => __( 'dequeue', 'easy-accordion-free' ),
				'text_width' => '92',
			),
		),
	)
);

//
// Custom CSS Fields.
//
SP_EAP::createSection(
	$prefix,
	array(
		'id'     => 'custom_css_section',
		'title'  => __( 'Custom CSS', 'easy-accordion-free' ),
		'icon'   => 'fa fa-css3',
		'fields' => array(
			array(
				'id'       => 'ea_custom_css',
				'type'     => 'code_editor',
				'title'    => __( 'Custom CSS', 'easy-accordion-free' ),
				'subtitle' => __( 'Type your custom CSS.', 'easy-accordion-free' ),
				'settings' => array(
					'mode'  => 'css',
					'theme' => 'monokai',
				),
			),
		),
	)
);


