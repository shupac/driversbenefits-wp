<?php
/**
 * Shortcode query for id.
 */
$args          = new WP_Query(
	array(
		'post_type'      => 'sp_easy_accordion',
		'post_status'    => 'any',
		'posts_per_page' => '300',
	)
);
$shortcode_ids = wp_list_pluck( $args->posts, 'ID' );
if ( count( $shortcode_ids ) > 0 ) {
	foreach ( $shortcode_ids as $shortcode_key => $shortcode_id ) {
		$shortcode_data = get_post_meta( $shortcode_id, 'sp_eap_shortcode_options', true );

		$eap_title_typography   = isset( $shortcode_data['eap_title_typography'] ) ? $shortcode_data['eap_title_typography'] : '';
		$eap_content_typography = isset( $shortcode_data['eap_content_typography'] ) ? $shortcode_data['eap_content_typography'] : '';
		$eap_title_color        = isset( $shortcode_data['eap_title_color'] ) ? $shortcode_data['eap_title_color'] : '';
		$eap_description_color  = isset( $shortcode_data['eap_description_color'] ) ? $shortcode_data['eap_description_color'] : '';
		if ( ! empty( $eap_title_typography ) ) {
			$shortcode_data['eap_title_typography'] = array(
				'font-family'    => 'Open Sans',
				'font-style'     => '600',
				'font-size'      => '20',
				'line-height'    => '30',
				'letter-spacing' => '0',
				'color'          => isset( $shortcode_data['eap_title_color'] ) ? $shortcode_data['eap_title_color'] : '#444',
				'text-align'     => 'left',
				'text-transform' => 'none',
				'type'           => 'google',
			);
		}
		if ( ! empty( $eap_content_typography ) ) {
			$shortcode_data['eap_content_typography'] = array(
				'font-family'    => 'Open Sans',
				'font-style'     => '400',
				'font-size'      => '16',
				'line-height'    => '26',
				'letter-spacing' => '0',
				'color'          => isset( $shortcode_data['eap_description_color'] ) ? $shortcode_data['eap_description_color'] : '#444',
				'text-align'     => 'left',
				'text-transform' => 'none',
				'type'           => 'google',
			);
		}

		if ( ! empty( $eap_title_color ) ) {
			unset( $shortcode_data['eap_title_color'] );
		}
		if ( ! empty( $eap_description_color ) ) {
			unset( $shortcode_data['eap_description_color'] );
		}

		update_post_meta( $shortcode_id, 'sp_eap_shortcode_options', $shortcode_data );
	}
}
