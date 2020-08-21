<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: switcher
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_switcherf' ) ) {
	class SP_EAP_Field_switcherf extends SP_EAP_Fields {

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {
			$text_off   = ( ! empty( $this->field['text_off'] ) ) ? $this->field['text_off'] : esc_html__( 'Off', 'easy-accordion-free' );
			$text_width = ( ! empty( $this->field['text_width'] ) ) ? ' style="width: ' . $this->field['text_width'] . 'px;"' : '';

			echo $this->field_before();

			echo '<div class="eapro--switcher"' . $text_width . '>';
			echo '<span class="eapro--off">' . $text_off . '</span>';
			echo '<span class="eapro--ball"></span>';
			echo '<input type="text" name="' . $this->field_name() . '" value="' . $this->value . '"' . $this->field_attributes() . ' />';
			echo '</div>';

			echo ( ! empty( $this->field['label'] ) ) ? '<span class="eapro--label">' . $this->field['label'] . '</span>' : '';

			echo '<div class="clear"></div>';

			echo $this->field_after();

		}

	}
}
