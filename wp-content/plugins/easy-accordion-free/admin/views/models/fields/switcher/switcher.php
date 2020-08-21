<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: switcher
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_switcher' ) ) {
	class SP_EAP_Field_switcher extends SP_EAP_Fields {

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {

			$active     = ( ! empty( $this->value ) ) ? ' eapro--active' : '';
			$text_on    = ( ! empty( $this->field['text_on'] ) ) ? $this->field['text_on'] : esc_html__( 'On', 'easy-accordion-free' );
			$text_off   = ( ! empty( $this->field['text_off'] ) ) ? $this->field['text_off'] : esc_html__( 'Off', 'easy-accordion-free' );
			$text_width = ( ! empty( $this->field['text_width'] ) ) ? ' style="width: ' . esc_attr( $this->field['text_width'] ) . 'px;"' : '';

			echo $this->field_before();

			echo '<div class="eapro--switcher' . esc_attr( $active ) . '"' . $text_width . '>';
			echo '<span class="eapro--on">' . esc_attr( $text_on ) . '</span>';
			echo '<span class="eapro--off">' . esc_attr( $text_off ) . '</span>';
			echo '<span class="eapro--ball"></span>';
			echo '<input type="text" name="' . esc_attr( $this->field_name() ) . '" value="' . esc_attr( $this->value ) . '"' . $this->field_attributes() . ' />';
			echo '</div>';

			echo ( ! empty( $this->field['label'] ) ) ? '<span class="eapro--label">' . esc_attr( $this->field['label'] ) . '</span>' : '';

			echo $this->field_after();

		}

	}
}
