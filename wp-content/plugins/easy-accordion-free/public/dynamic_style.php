<?php
$settings = get_option( 'sp_eap_settings' );
$custom_css          = $settings['ea_custom_css'];
$eap_title_font_load = isset( $shortcode_data['eap_title_font_load'] ) ? $shortcode_data['eap_title_font_load'] : '';
$eap_desc_font_load  = isset( $shortcode_data['eap_desc_font_load'] ) ? $shortcode_data['eap_desc_font_load'] : '';
$ea_dynamic_css      = '';
$ea_dynamic_css     .= '<style type="text/css"> #sp-ea-' . $post_id . ' .spcollapsing { height: 0; overflow: hidden; transition-property: height;transition-duration: ' . $eap_animation_time . 'ms;} .sp-easy-accordion iframe {width: 100%;}';
if ( true == $eap_preloader ) {
	$ea_dynamic_css .= '#sp-ea-' . $post_id . '{ position: relative; }#sp-ea-' . $post_id . ' .ea-card{ opacity: 0;}#eap-preloader-' . $post_id . '{ position: absolute; left: 0; top: 0; height: 100%;width: 100%; text-align: center;display: flex; align-items: center;justify-content: center;}';
}
if ( true == $acc_section_title ) {
	$ea_dynamic_css .= '.eap_section_title_' . $post_id . ' { color: ' . $section_title_typho_color . ' !important; margin-bottom:  ' . $acc_section_title_margin_bottom . 'px !important; }';
}
if ( 'vertical' === $accordion_layout ) {
	$ea_dynamic_css .= '#sp-ea-' . $post_id . '.sp-easy-accordion  .sp-ea-single {border: ' . $eap_border_width . 'px ' . $eap_border_style . ' ' . $eap_border_color . '; }#sp-ea-' . $post_id . '.sp-easy-accordion  .sp-ea-single  .ea-header a {color: ' . $eap_title_typho_color . ';}#sp-ea-' . $post_id . '.sp-easy-accordion  .sp-ea-single .ea-body {background: ' . $eap_description_bg . '; color: ' . $eap_content_typo_color . ';}';
	if ( true == $eap_accordion_fillspace ) {
		$ea_dynamic_css .= '#sp-ea-' . $post_id . '.sp-easy-accordion  .sp-ea-single  .ea-body {display: block;height: ' . $eap_accordion_fillspace_height . 'px; overflow: auto;}';
	}
	if ( 'sp-ea-one' === $accordion_theme_class ) {
		$ea_dynamic_css .= '#sp-ea-' . $post_id . '.sp-easy-accordion  .sp-ea-single {background: ' . $eap_header_bg . ';}#sp-ea-' . $post_id . '.sp-easy-accordion  .sp-ea-single  .ea-header a .ea-expand-icon.fa { float: ' . $eap_ex_icon_position . '; color: ' . $eap_icon_color . ';font-size: ' . $eap_icon_size . 'px;}';
		if ( 'right' === $eap_ex_icon_position ) {
			$ea_dynamic_css .= '#sp-ea-' . $post_id . '.sp-easy-accordion  .sp-ea-single  .ea-header a .ea-expand-icon.fa {margin-right: 0;}';
		}
	}
}
$ea_dynamic_css .= $custom_css;
$ea_dynamic_css .= '</style>';
