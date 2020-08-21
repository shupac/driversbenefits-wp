<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: backup
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_backup' ) ) {
	class SP_EAP_Field_backup extends SP_EAP_Fields {

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {

			$unique = $this->unique;
			$nonce  = wp_create_nonce( 'eapro_backup_nonce' );
			$export = add_query_arg(
				array(
					'action' => 'eapro-export',
					'unique' => $unique,
					'nonce'  => $nonce,
				), admin_url( 'admin-ajax.php' )
			);

			echo $this->field_before();

			echo '<textarea name="eapro_import_data" class="eapro-import-data"></textarea>';
			echo '<button type="submit" class="button button-primary eapro-confirm eapro-import" data-unique="' . esc_attr( $unique ) . '" data-nonce="' . esc_attr( $nonce ) . '">' . esc_html__( 'Import', 'easy-accordion-free' ) . '</button>';
			echo '<small>( ' . esc_html__( 'copy-paste your backup string here', 'easy-accordion-free' ) . ' )</small>';

			echo '<hr />';
			echo '<textarea readonly="readonly" class="eapro-export-data">' . esc_attr( json_encode( get_option( $unique ) ) ) . '</textarea>';
			echo '<a href="' . esc_url( $export ) . '" class="button button-primary eapro-export" target="_blank">' . esc_html__( 'Export and Download Backup', 'easy-accordion-free' ) . '</a>';

			echo '<hr />';
			echo '<button type="submit" name="eapro_transient[reset]" value="reset" class="button eapro-warning-primary eapro-confirm eapro-reset" data-unique="' . esc_attr( $unique ) . '" data-nonce="' . esc_attr( $nonce ) . '">' . esc_html__( 'Reset All', 'easy-accordion-free' ) . '</button>';
			echo '<small class="eapro-text-error">' . esc_html__( 'Please be sure for reset all of options.', 'easy-accordion-free' ) . '</small>';

			echo $this->field_after();

		}

	}
}
