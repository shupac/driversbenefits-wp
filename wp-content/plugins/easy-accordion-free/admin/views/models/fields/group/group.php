<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: group
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_group' ) ) {
	class SP_EAP_Field_group extends SP_EAP_Fields {

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {

			$args = wp_parse_args(
				$this->field, array(
					'max'                    => 0,
					'min'                    => 0,
					'fields'                 => array(),
					'button_title'           => esc_html__( 'Add New', 'easy-accordion-free' ),
					'accordion_title_prefix' => '',
					'accordion_title_number' => false,
					'accordion_title_auto'   => true,
				)
			);

			$title_prefix = ( ! empty( $args['accordion_title_prefix'] ) ) ? $args['accordion_title_prefix'] : '';
			$title_number = ( ! empty( $args['accordion_title_number'] ) ) ? true : false;
			$title_auto   = ( ! empty( $args['accordion_title_auto'] ) ) ? true : false;

			if ( ! empty( $this->parent ) && preg_match( '/' . preg_quote( '[' . $this->field['id'] . ']' ) . '/', $this->parent ) ) {

				echo '<div class="eapro-notice eapro-notice-danger">' . esc_html__( 'Error: Nested field id can not be same with another nested field id.', 'easy-accordion-free' ) . '</div>';

			} else {

				echo $this->field_before();

				echo '<div class="eapro-cloneable-item eapro-cloneable-hidden">';

				echo '<div class="eapro-cloneable-helper">';
				echo '<i class="eapro-cloneable-sort fa fa-arrows-alt"></i>';
				echo '<i class="eapro-cloneable-clone fa fa-clone"></i>';
				echo '<i class="eapro-cloneable-remove eapro-confirm fa fa-times" data-confirm="' . esc_html__( 'Are you sure to delete this item?', 'easy-accordion-free' ) . '"></i>';
				echo '</div>';

				echo '<h4 class="eapro-cloneable-title">';
				echo '<span class="eapro-cloneable-text">';
				echo ( $title_number ) ? '<span class="eapro-cloneable-title-number"></span>' : '';
				echo ( $title_prefix ) ? '<span class="eapro-cloneable-title-prefix">' . esc_attr( $title_prefix ) . '</span>' : '';
				echo ( $title_auto ) ? '<span class="eapro-cloneable-value"><span class="eapro-cloneable-placeholder"></span></span>' : '';
				echo '</span>';
				echo '</h4>';

				echo '<div class="eapro-cloneable-content">';
				foreach ( $this->field['fields'] as $field ) {

					$field_parent  = $this->parent . '[' . $this->field['id'] . ']';
					$field_default = ( isset( $field['default'] ) ) ? $field['default'] : '';

					SP_EAP::field( $field, $field_default, '_nonce', 'field/group', $field_parent );

				}
				echo '</div>';

				echo '</div>';

				echo '<div class="eapro-cloneable-wrapper eapro-data-wrapper" data-title-number="' . esc_attr( $title_number ) . '" data-unique-id="' . esc_attr( $this->unique ) . '" data-field-id="[' . esc_attr( $this->field['id'] ) . ']" data-max="' . esc_attr( $args['max'] ) . '" data-min="' . esc_attr( $args['min'] ) . '">';

				if ( ! empty( $this->value ) ) {

					$num = 0;

					foreach ( $this->value as $value ) {

						$first_id    = ( isset( $this->field['fields'][0]['id'] ) ) ? $this->field['fields'][0]['id'] : '';
						$first_value = ( isset( $value[ $first_id ] ) ) ? $value[ $first_id ] : '';
						$first_value = ( is_array( $first_value ) ) ? reset( $first_value ) : $first_value;

						echo '<div class="eapro-cloneable-item">';

						  echo '<div class="eapro-cloneable-helper">';
						  echo '<i class="eapro-cloneable-sort fa fa-arrows-alt"></i>';
						  echo '<i class="eapro-cloneable-clone fa fa-clone"></i>';
						  echo '<i class="eapro-cloneable-remove eapro-confirm fa fa-times" data-confirm="' . esc_html__( 'Are you sure to delete this item?', 'easy-accordion-free' ) . '"></i>';
						  echo '</div>';

						  echo '<h4 class="eapro-cloneable-title">';
						  echo '<span class="eapro-cloneable-text">';
						  echo ( $title_number ) ? '<span class="eapro-cloneable-title-number">' . esc_attr( $num + 1 ) . '.</span>' : '';
						  echo ( $title_prefix ) ? '<span class="eapro-cloneable-title-prefix">' . esc_attr( $title_prefix ) . '</span>' : '';
						  echo ( $title_auto ) ? '<span class="eapro-cloneable-value">' . esc_attr( $first_value ) . '</span>' : '';
						  echo '</span>';
						  echo '</h4>';

						  echo '<div class="eapro-cloneable-content">';

						foreach ( $this->field['fields'] as $field ) {

							$field_parent = $this->parent . '[' . $this->field['id'] . ']';
							$field_unique = ( ! empty( $this->unique ) ) ? $this->unique . '[' . $this->field['id'] . '][' . $num . ']' : $this->field['id'] . '[' . $num . ']';
							$field_value  = ( isset( $field['id'] ) && isset( $value[ $field['id'] ] ) ) ? $value[ $field['id'] ] : '';

							SP_EAP::field( $field, $field_value, $field_unique, 'field/group', $field_parent );

						}

						echo '</div>';

						echo '</div>';

						$num++;

					}
				}

				echo '</div>';

				echo '<div class="eapro-cloneable-alert eapro-cloneable-max">' . esc_html__( 'You can not add more than', 'easy-accordion-free' ) . ' ' . esc_attr( $args['max'] ) . '</div>';
				echo '<div class="eapro-cloneable-alert eapro-cloneable-min">' . esc_html__( 'You can not remove less than', 'easy-accordion-free' ) . ' ' . esc_attr( $args['min'] ) . '</div>';

				echo '<a href="#" class="button button-primary eapro-cloneable-add">' . wp_kses_post( $args['button_title'] ) . '</a>';

				echo $this->field_after();

			}

		}

		public function enqueue() {

			if ( ! wp_script_is( 'jquery-ui-accordion' ) ) {
				wp_enqueue_script( 'jquery-ui-accordion' );
			}

			if ( ! wp_script_is( 'jquery-ui-sortable' ) ) {
				wp_enqueue_script( 'jquery-ui-sortable' );
			}

		}

	}
}
