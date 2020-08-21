<?php

defined( 'WP_UNINSTALL_PLUGIN' ) || exit;

// Load LCP file.
require_once 'plugin-main.php';

$settings = get_option( 'sp_eap_settings' );
if ( true == ( $settings['eap_data_remove'] ) ) {
	// Delete Accordions and shortcodes.
	global $wpdb;
	$wpdb->query( "DELETE FROM wp_posts WHERE post_type = 'sp_easy_accordion'" );
	$wpdb->query( 'DELETE FROM wp_postmeta WHERE post_id NOT IN (SELECT id FROM wp_posts)' );
	$wpdb->query( 'DELETE FROM wp_term_relationships WHERE object_id NOT IN (SELECT id FROM wp_posts)' );

	// Remove option.
	delete_option( 'sp_eap_settings' );
	delete_option( 'sp_eafree_review_notice_dismiss' );
	delete_option( '_transient_timeout_sp-eap-framework-transient' );
	delete_option( '_transient_sp-eap-framework-transient' );
	delete_option( '_transient_timeout_eapro-metabox-transient' );
	delete_option( '_transient_eapro-metabox-transient' );

	// Remove options in Multisite.
	delete_site_option( 'sp_eap_settings' );
	delete_site_option( 'sp_eafree_review_notice_dismiss' );
	delete_site_option( '_transient_timeout_spf-eap-framework-transient' );
	delete_site_option( '_transient_spf-eap-framework-transient' );
	delete_site_option( '_transient_timeout_eapro-metabox-transient' );
	delete_site_option( '_transient_eapro-metabox-transient' );
}
