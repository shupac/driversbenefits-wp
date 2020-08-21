<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: textarea
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_textarea' ) ) {
	class SP_EAP_Field_textarea extends SP_EAP_Fields {

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {

			echo $this->field_before();
			echo $this->shortcoder();
			echo '<textarea name="' . esc_attr( $this->field_name() ) . '"' . $this->field_attributes() . '>' . $this->value . '</textarea>';
			echo $this->field_after();

		}

		public function shortcoder() {

			if ( ! empty( $this->field['shortcoder'] ) ) {

				$shortcoders = ( is_array( $this->field['shortcoder'] ) ) ? $this->field['shortcoder'] : array_filter( (array) $this->field['shortcoder'] );

				foreach ( $shortcoders as $shortcode_id ) {

					if ( isset( SP_EAP::$args['shortcoders'][ $shortcode_id ] ) ) {

						$setup_args   = SP_EAP::$args['shortcoders'][ $shortcode_id ];
						$button_title = ( ! empty( $setup_args['button_title'] ) ) ? $setup_args['button_title'] : esc_html__( 'Add Shortcode', 'easy-accordion-free' );

						echo '<a href="#" class="button button-primary eapro-shortcode-button" data-modal-id="' . esc_attr( $shortcode_id ) . '">' . wp_kses_post( $button_title ) . '</a>';

					}
				}
			}

		}
	}
}
