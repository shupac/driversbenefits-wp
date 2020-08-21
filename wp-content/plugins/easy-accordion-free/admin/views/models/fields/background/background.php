<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: background
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_background' ) ) {
	class SP_EAP_Field_background extends SP_EAP_Fields {

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {

			$args = wp_parse_args(
				$this->field, array(
					'background_color'              => true,
					'background_image'              => true,
					'background_position'           => true,
					'background_repeat'             => true,
					'background_attachment'         => true,
					'background_size'               => true,
					'background_origin'             => false,
					'background_clip'               => false,
					'background_blend_mode'         => false,
					'background_gradient'           => false,
					'background_gradient_color'     => true,
					'background_gradient_direction' => true,
					'background_image_preview'      => true,
					'background_auto_attributes'    => false,
					'background_image_library'      => 'image',
					'background_image_placeholder'  => esc_html__( 'No background selected', 'easy-accordion-free' ),
				)
			);

			$default_value = array(
				'background-color'              => '',
				'background-image'              => '',
				'background-position'           => '',
				'background-repeat'             => '',
				'background-attachment'         => '',
				'background-size'               => '',
				'background-origin'             => '',
				'background-clip'               => '',
				'background-blend-mode'         => '',
				'background-gradient-color'     => '',
				'background-gradient-direction' => '',
			);

			$default_value = ( ! empty( $this->field['default'] ) ) ? wp_parse_args( $this->field['default'], $default_value ) : $default_value;

			$this->value = wp_parse_args( $this->value, $default_value );

			echo $this->field_before();

			echo '<div class="eapro--background-colors">';

			//
			// Background Color
			if ( ! empty( $args['background_color'] ) ) {

				echo '<div class="eapro--color">';

				echo ( ! empty( $args['background_gradient'] ) ) ? '<div class="eapro--title">' . esc_html__( 'From', 'easy-accordion-free' ) . '</div>' : '';

				SP_EAP::field(
					array(
						'id'      => 'background-color',
						'type'    => 'color',
						'default' => $default_value['background-color'],
					), $this->value['background-color'], $this->field_name(), 'field/background'
				);

				echo '</div>';

			}

			//
			// Background Gradient Color
			if ( ! empty( $args['background_gradient_color'] ) && ! empty( $args['background_gradient'] ) ) {

				echo '<div class="eapro--color">';

				echo ( ! empty( $args['background_gradient'] ) ) ? '<div class="eapro--title">' . esc_html__( 'To', 'easy-accordion-free' ) . '</div>' : '';

				SP_EAP::field(
					array(
						'id'      => 'background-gradient-color',
						'type'    => 'color',
						'default' => $default_value['background-gradient-color'],
					), $this->value['background-gradient-color'], $this->field_name(), 'field/background'
				);

				echo '</div>';

			}

			//
			// Background Gradient Direction
			if ( ! empty( $args['background_gradient_direction'] ) && ! empty( $args['background_gradient'] ) ) {

				echo '<div class="eapro--color">';

				echo ( ! empty( $args['background_gradient'] ) ) ? '<div class="eapro---title">' . esc_html__( 'Direction', 'easy-accordion-free' ) . '</div>' : '';

				SP_EAP::field(
					array(
						'id'      => 'background-gradient-direction',
						'type'    => 'select',
						'options' => array(
							''          => esc_html__( 'Gradient Direction', 'easy-accordion-free' ),
							'to bottom' => esc_html__( '&#8659; top to bottom', 'easy-accordion-free' ),
							'to right'  => esc_html__( '&#8658; left to right', 'easy-accordion-free' ),
							'135deg'    => esc_html__( '&#8664; corner top to right', 'easy-accordion-free' ),
							'-135deg'   => esc_html__( '&#8665; corner top to left', 'easy-accordion-free' ),
						),
					), $this->value['background-gradient-direction'], $this->field_name(), 'field/background'
				);

				echo '</div>';

			}

			echo '</div>';

			//
			// Background Image
			if ( ! empty( $args['background_image'] ) ) {

				echo '<div class="eapro--background-image">';

				SP_EAP::field(
					array(
						'id'          => 'background-image',
						'type'        => 'media',
						'class'       => 'eapro-assign-field-background',
						'library'     => $args['background_image_library'],
						'preview'     => $args['background_image_preview'],
						'placeholder' => $args['background_image_placeholder'],
						'attributes'  => array( 'data-depend-id' => $this->field['id'] ),
					), $this->value['background-image'], $this->field_name(), 'field/background'
				);

				echo '</div>';

			}

			$auto_class   = ( ! empty( $args['background_auto_attributes'] ) ) ? ' eapro--auto-attributes' : '';
			$hidden_class = ( ! empty( $args['background_auto_attributes'] ) && empty( $this->value['background-image']['url'] ) ) ? ' eapro--attributes-hidden' : '';

			echo '<div class="eapro--background-attributes' . esc_attr( $auto_class . $hidden_class ) . '">';

			//
			// Background Position
			if ( ! empty( $args['background_position'] ) ) {

				SP_EAP::field(
					array(
						'id'      => 'background-position',
						'type'    => 'select',
						'options' => array(
							''              => esc_html__( 'Background Position', 'easy-accordion-free' ),
							'left top'      => esc_html__( 'Left Top', 'easy-accordion-free' ),
							'left center'   => esc_html__( 'Left Center', 'easy-accordion-free' ),
							'left bottom'   => esc_html__( 'Left Bottom', 'easy-accordion-free' ),
							'center top'    => esc_html__( 'Center Top', 'easy-accordion-free' ),
							'center center' => esc_html__( 'Center Center', 'easy-accordion-free' ),
							'center bottom' => esc_html__( 'Center Bottom', 'easy-accordion-free' ),
							'right top'     => esc_html__( 'Right Top', 'easy-accordion-free' ),
							'right center'  => esc_html__( 'Right Center', 'easy-accordion-free' ),
							'right bottom'  => esc_html__( 'Right Bottom', 'easy-accordion-free' ),
						),
					), $this->value['background-position'], $this->field_name(), 'field/background'
				);

			}

			//
			// Background Repeat
			if ( ! empty( $args['background_repeat'] ) ) {

				SP_EAP::field(
					array(
						'id'      => 'background-repeat',
						'type'    => 'select',
						'options' => array(
							''          => esc_html__( 'Background Repeat', 'easy-accordion-free' ),
							'repeat'    => esc_html__( 'Repeat', 'easy-accordion-free' ),
							'no-repeat' => esc_html__( 'No Repeat', 'easy-accordion-free' ),
							'repeat-x'  => esc_html__( 'Repeat Horizontally', 'easy-accordion-free' ),
							'repeat-y'  => esc_html__( 'Repeat Vertically', 'easy-accordion-free' ),
						),
					), $this->value['background-repeat'], $this->field_name(), 'field/background'
				);

			}

			//
			// Background Attachment
			if ( ! empty( $args['background_attachment'] ) ) {

				SP_EAP::field(
					array(
						'id'      => 'background-attachment',
						'type'    => 'select',
						'options' => array(
							''       => esc_html__( 'Background Attachment', 'easy-accordion-free' ),
							'scroll' => esc_html__( 'Scroll', 'easy-accordion-free' ),
							'fixed'  => esc_html__( 'Fixed', 'easy-accordion-free' ),
						),
					), $this->value['background-attachment'], $this->field_name(), 'field/background'
				);

			}

			//
			// Background Size
			if ( ! empty( $args['background_size'] ) ) {

				SP_EAP::field(
					array(
						'id'      => 'background-size',
						'type'    => 'select',
						'options' => array(
							''        => esc_html__( 'Background Size', 'easy-accordion-free' ),
							'cover'   => esc_html__( 'Cover', 'easy-accordion-free' ),
							'contain' => esc_html__( 'Contain', 'easy-accordion-free' ),
						),
					), $this->value['background-size'], $this->field_name(), 'field/background'
				);

			}

			//
			// Background Origin
			if ( ! empty( $args['background_origin'] ) ) {

				SP_EAP::field(
					array(
						'id'      => 'background-origin',
						'type'    => 'select',
						'options' => array(
							''            => esc_html__( 'Background Origin', 'easy-accordion-free' ),
							'padding-box' => esc_html__( 'Padding Box', 'easy-accordion-free' ),
							'border-box'  => esc_html__( 'Border Box', 'easy-accordion-free' ),
							'content-box' => esc_html__( 'Content Box', 'easy-accordion-free' ),
						),
					), $this->value['background-origin'], $this->field_name(), 'field/background'
				);

			}

			//
			// Background Clip
			if ( ! empty( $args['background_clip'] ) ) {

				SP_EAP::field(
					array(
						'id'      => 'background-clip',
						'type'    => 'select',
						'options' => array(
							''            => esc_html__( 'Background Clip', 'easy-accordion-free' ),
							'border-box'  => esc_html__( 'Border Box', 'easy-accordion-free' ),
							'padding-box' => esc_html__( 'Padding Box', 'easy-accordion-free' ),
							'content-box' => esc_html__( 'Content Box', 'easy-accordion-free' ),
						),
					), $this->value['background-clip'], $this->field_name(), 'field/background'
				);

			}

			//
			// Background Blend Mode
			if ( ! empty( $args['background_blend_mode'] ) ) {

				SP_EAP::field(
					array(
						'id'      => 'background-blend-mode',
						'type'    => 'select',
						'options' => array(
							''            => esc_html__( 'Background Blend Mode', 'easy-accordion-free' ),
							'normal'      => esc_html__( 'Normal', 'easy-accordion-free' ),
							'multiply'    => esc_html__( 'Multiply', 'easy-accordion-free' ),
							'screen'      => esc_html__( 'Screen', 'easy-accordion-free' ),
							'overlay'     => esc_html__( 'Overlay', 'easy-accordion-free' ),
							'darken'      => esc_html__( 'Darken', 'easy-accordion-free' ),
							'lighten'     => esc_html__( 'Lighten', 'easy-accordion-free' ),
							'color-dodge' => esc_html__( 'Color Dodge', 'easy-accordion-free' ),
							'saturation'  => esc_html__( 'Saturation', 'easy-accordion-free' ),
							'color'       => esc_html__( 'Color', 'easy-accordion-free' ),
							'luminosity'  => esc_html__( 'Luminosity', 'easy-accordion-free' ),
						),
					), $this->value['background-blend-mode'], $this->field_name(), 'field/background'
				);

			}

			echo '</div>';

			echo $this->field_after();

		}

		public function output() {

			$output    = '';
			$bg_image  = array();
			$important = ( ! empty( $this->field['output_important'] ) ) ? '!important' : '';
			$element   = ( is_array( $this->field['output'] ) ) ? join( ',', $this->field['output'] ) : $this->field['output'];

			// Background image and gradient
			$background_color        = ( ! empty( $this->value['background-color'] ) ) ? $this->value['background-color'] : '';
			$background_gd_color     = ( ! empty( $this->value['background-gradient-color'] ) ) ? $this->value['background-gradient-color'] : '';
			$background_gd_direction = ( ! empty( $this->value['background-gradient-direction'] ) ) ? $this->value['background-gradient-direction'] : '';
			$background_image        = ( ! empty( $this->value['background-image']['url'] ) ) ? $this->value['background-image']['url'] : '';

			if ( $background_color && $background_gd_color ) {
				$gd_direction = ( $background_gd_direction ) ? $background_gd_direction . ',' : '';
				$bg_image[]   = 'linear-gradient(' . $gd_direction . $background_color . ',' . $background_gd_color . ')';
			}

			if ( $background_image ) {
				$bg_image[] = 'url(' . $background_image . ')';
			}

			if ( ! empty( $bg_image ) ) {
				$output .= 'background-image:' . implode( ',', $bg_image ) . $important . ';';
			}

			// Common background properties
			$properties = array( 'color', 'position', 'repeat', 'attachment', 'size', 'origin', 'clip', 'blend-mode' );

			foreach ( $properties as $property ) {
				$property = 'background-' . $property;
				if ( ! empty( $this->value[ $property ] ) ) {
					$output .= $property . ':' . $this->value[ $property ] . $important . ';';
				}
			}

			if ( $output ) {
				$output = $element . '{' . $output . '}';
			}

			$this->parent->output_css .= $output;

			return $output;

		}

	}
}
