<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.

/**
 * Populate the taxonomy name list to he select option.
 *
 * @return void
 */
function sp_eap_get_taxonomies() {
	extract( $_REQUEST );
	$taxonomy_names = get_object_taxonomies( array( 'post_type' => $eap_post_type ), 'names' );
	echo '<option value="">Select Taxonomy</option>';
	foreach ( $taxonomy_names as $key => $label ) {
		echo '<option value="' . $label . '">' . $label . '</option>';
	}
	die( 0 );
}
add_action( 'wp_ajax_sp_eap_get_taxonomies', 'sp_eap_get_taxonomies' );

/**
 * Populate the taxonomy terms list to the select option.
 *
 * @return void
 */
function sp_eap_get_terms() {
	extract( $_REQUEST );
	$terms = get_terms( $eap_post_taxonomy );
	foreach ( $terms as $key => $value ) {
		echo '<option value="' . $value->term_id . '">' . $value->name . '</option>';
	}
	die( 0 );
}
add_action( 'wp_ajax_sp_eap_get_terms', 'sp_eap_get_terms' );

/**
 * Get specific post to the select box.
 *
 * @return void
 */
function sp_eap_get_posts() {
	extract( $_REQUEST );
	$all_posts = get_posts(
		array(
			'post_type'      => $eap_post_type,
			'posts_per_page' => -1,
		)
	);
	foreach ( $all_posts as $key => $post_obj ) {
		echo '<option value="' . $post_obj->ID . '">' . $post_obj->post_title . '</option>';
	}
	die( 0 );
}
add_action( 'wp_ajax_sp_eap_get_posts', 'sp_eap_get_posts' );

/**
 *
 * Export
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! function_exists( 'eapro_export' ) ) {
	function eapro_export() {

		$nonce  = ( ! empty( $_GET['nonce'] ) ) ? sanitize_text_field( wp_unslash( $_GET['nonce'] ) ) : '';
		$unique = ( ! empty( $_GET['unique'] ) ) ? sanitize_text_field( wp_unslash( $_GET['unique'] ) ) : '';

		if ( ! wp_verify_nonce( $nonce, 'eapro_backup_nonce' ) ) {
			die( esc_html__( 'Error: Nonce verification has failed. Please try again.', 'easy-accordion-free' ) );
		}

		if ( empty( $unique ) ) {
			die( esc_html__( 'Error: Options unique id could not valid.', 'easy-accordion-free' ) );
		}

		// Export
		header( 'Content-Type: application/json' );
		header( 'Content-disposition: attachment; filename=backup-' . gmdate( 'd-m-Y' ) . '.json' );
		header( 'Content-Transfer-Encoding: binary' );
		header( 'Pragma: no-cache' );
		header( 'Expires: 0' );

		echo json_encode( get_option( $unique ) );

		die();

	}
	add_action( 'wp_ajax_eapro-export', 'eapro_export' );
}

/**
 *
 * Import Ajax
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! function_exists( 'eapro_import_ajax' ) ) {
	function eapro_import_ajax() {

		$nonce  = ( ! empty( $_POST['nonce'] ) ) ? sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) : '';
		$unique = ( ! empty( $_POST['unique'] ) ) ? sanitize_text_field( wp_unslash( $_POST['unique'] ) ) : '';
		$data   = ( ! empty( $_POST['data'] ) ) ? wp_kses_post_deep( json_decode( wp_unslash( trim( $_POST['data'] ) ), true ) ) : array();

		if ( ! wp_verify_nonce( $nonce, 'eapro_backup_nonce' ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'Error: Nonce verification has failed. Please try again.', 'easy-accordion-free' ) ) );
		}

		if ( empty( $unique ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'Error: Options unique id could not valid.', 'easy-accordion-free' ) ) );
		}

		if ( empty( $data ) || ! is_array( $data ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'Error: Import data could not valid.', 'easy-accordion-free' ) ) );
		}

		// Success
		update_option( $unique, $data );

		wp_send_json_success();

	}
	add_action( 'wp_ajax_eapro-import', 'eapro_import_ajax' );
}

/**
 *
 * Reset Ajax
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! function_exists( 'eapro_reset_ajax' ) ) {
	function eapro_reset_ajax() {

		$nonce  = ( ! empty( $_POST['nonce'] ) ) ? sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) : '';
		$unique = ( ! empty( $_POST['unique'] ) ) ? sanitize_text_field( wp_unslash( $_POST['unique'] ) ) : '';

		if ( ! wp_verify_nonce( $nonce, 'eapro_backup_nonce' ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'Error: Nonce verification has failed. Please try again.', 'easy-accordion-free' ) ) );
		}

		// Success
		delete_option( $unique );

		wp_send_json_success();

	}
	add_action( 'wp_ajax_eapro-reset', 'eapro_reset_ajax' );
}

/**
 *
 * Chosen Ajax
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! function_exists( 'eapro_chosen_ajax' ) ) {
	function eapro_chosen_ajax() {

		$nonce = ( ! empty( $_POST['nonce'] ) ) ? sanitize_text_field( wp_unslash( $_POST['nonce'] ) ) : '';
		$type  = ( ! empty( $_POST['type'] ) ) ? sanitize_text_field( wp_unslash( $_POST['type'] ) ) : '';
		$term  = ( ! empty( $_POST['term'] ) ) ? sanitize_text_field( wp_unslash( $_POST['term'] ) ) : '';
		$query = ( ! empty( $_POST['query_args'] ) ) ? wp_kses_post_deep( $_POST['query_args'] ) : array();

		if ( ! wp_verify_nonce( $nonce, 'eapro_chosen_ajax_nonce' ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'Error: Nonce verification has failed. Please try again.', 'easy-accordion-free' ) ) );
		}

		if ( empty( $type ) || empty( $term ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'Error: Missing request arguments.', 'easy-accordion-free' ) ) );
		}

		$capability = apply_filters( 'eapro_chosen_ajax_capability', 'manage_options' );

		if ( ! current_user_can( $capability ) ) {
			wp_send_json_error( array( 'error' => esc_html__( 'You do not have required permissions to access.', 'easy-accordion-free' ) ) );
		}

		// Success
		$options = SP_EAP_Fields::field_data( $type, $term, $query );

		wp_send_json_success( $options );

	}
	add_action( 'wp_ajax_eapro-chosen', 'eapro_chosen_ajax' );
}
