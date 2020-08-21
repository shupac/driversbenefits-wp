<?php
/**
 * The post accordion template.
 *
 * @package easy_accordion_free
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( empty( $content_sources ) ) {
	return;
}
if ( true == $acc_section_title ) {
	echo '<h2 class="eap_section_title_' . $post_id . '"> ' . get_the_title( $post_id ) . ' </h2>';
}
echo '<div id="sp-ea-' . $post_id . '" class="' . $accordion_wraper_class . '" data-ex-icon="' . $eap_expand_icon . '" data-col-icon="' . $eap_collapse_icon . '"  data-ea-active="' . $eap_active_event . '"  data-ea-mode="' . $accordion_layout . '" data-preloader="' . $eap_preloader . '">';
if ( true == $eap_preloader ) {
	echo '<div id="eap-preloader-' . $post_id . '" class="accordion-preloader">';
	echo '<img src="' . SP_EA_URL . 'public/assets/ea_loader.gif"/>';
	echo '</div>';
}
$ea_key = 1;
foreach ( $content_sources as $key => $content_source ) {
	$content_title       = $content_source['accordion_content_title'];
	$content_embed       = $content_source['accordion_content_description'];
	$content_description = wpautop( $content_embed );
	if ( 'ea-first-open' === $eap_accordion_mode ) {
		$a_open_first      = ( 1 == $ea_key ) ? 'collapsed show' : '';
		$expand_icon_first = ( 1 == $ea_key ) ? $eap_expand_icon : $eap_collapse_icon;
		$expand_class      = ( 1 == $ea_key ) ? 'ea-expand' : '';
	} elseif ( 'ea-multi-open' === $eap_accordion_mode ) {
		$a_open_first      = 'collapsed show';
		$expand_icon_first = $eap_expand_icon;
		$expand_class      = 'ea-expand';
	} elseif ( 'ea-all-close' === $eap_accordion_mode ) {
		$a_open_first      = 'spcollapse';
		$expand_icon_first = $eap_collapse_icon;
		$expand_class      = '';
	}
	$data_parent_id      = ( false == $eap_mutliple_collapse ) ? 'data-parent="#sp-ea-' . $post_id . '"' : '';
	$eap_exp_icon_markup = ( true == $eap_icon ) ? '<i class="ea-expand-icon fa ' . $expand_icon_first . '"></i>' : '';
	$data_sptarget       = 'data-sptarget="#collapse' . $post_id . $key . '"';
	$eap_icon_markup     = $eap_exp_icon_markup;
	if ( ! empty( $content_description ) ) {
		$content_description_markup = sprintf(
			'<div class="ea-body"> %1$s </div>',
			do_shortcode( $content_description )
		);
	} elseif ( empty( $content_description ) ) {
		$content_description_markup = sprintf(
			'<div class="ea-body"> No Content </div>'
		);
	}
		echo '<div class="ea-card ' . $expand_class . ' ' . $accordion_item_class . '">';
			echo sprintf(
				'<h3 class="ea-header"><a class="collapsed" data-sptoggle="spcollapse" %1$s href="">%2$s %3$s</a></h3>',
				$data_sptarget,
				$eap_icon_markup,
				$content_title
			);
		echo '<div class="sp-collapse spcollapse ' . $a_open_first . '" id="collapse' . $post_id . $key . '" ' . $data_parent_id . '>';
		echo $content_description_markup;
		echo '</div>';
		echo '</div>';
	$ea_key++;
}
if ( $eap_schema_markup ) {
	$markup = '<script type="application/ld+json">
	{
	  "@context": "https://schema.org",
	  "@type": "FAQPage",
	  "mainEntity": [';
	foreach ( $content_sources as $keys => $content_source ) {
		$content_title       = $content_source['accordion_content_title'];
		$content_description = $content_source['accordion_content_description'];
		$markup             .= '{
			"@type": "Question",
			"name": "' . esc_attr( wp_strip_all_tags( $content_title ) ) . '",
			"acceptedAnswer": {
			  "@type": "Answer",
			  "text": "' . esc_html( $content_description ) . '"
			}
		  }';
		if ( $keys !== $key ) {
			$markup .= ',';
		}
	}
	  $markup .= ']
	}
	</script>';

	echo $markup;
}
echo '</div>';
