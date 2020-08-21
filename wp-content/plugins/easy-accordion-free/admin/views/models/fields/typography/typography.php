<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: typography
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_typography' ) ) {
	class SP_EAP_Field_typography extends SP_EAP_Fields {

		public $chosen = false;

		public $value = array();

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {

			echo $this->field_before();

			$args = wp_parse_args(
				$this->field, array(
					'font_family'        => true,
					'font_weight'        => true,
					'font_style'         => true,
					'font_size'          => true,
					'line_height'        => true,
					'letter_spacing'     => true,
					'text_align'         => true,
					'text_transform'     => true,
					'color'              => true,
					'chosen'             => true,
					'preview'            => true,
					'subset'             => true,
					'multi_subset'       => false,
					'extra_styles'       => false,
					'backup_font_family' => false,
					'font_variant'       => false,
					'word_spacing'       => false,
					'text_decoration'    => false,
					'custom_style'       => false,
					'exclude'            => '',
					'unit'               => 'px',
					'line_height_unit'   => '',
					'preview_text'       => 'The quick brown fox jumps over the lazy dog',
				)
			);

			$default_value = array(
				'font-family'        => '',
				'font-weight'        => '',
				'font-style'         => '',
				'font-variant'       => '',
				'font-size'          => '',
				'line-height'        => '',
				'letter-spacing'     => '',
				'word-spacing'       => '',
				'text-align'         => '',
				'text-transform'     => '',
				'text-decoration'    => '',
				'backup-font-family' => '',
				'color'              => '',
				'custom-style'       => '',
				'type'               => '',
				'subset'             => '',
				'extra-styles'       => array(),
			);

			$default_value    = ( ! empty( $this->field['default'] ) ) ? wp_parse_args( $this->field['default'], $default_value ) : $default_value;
			$this->value      = wp_parse_args( $this->value, $default_value );
			$this->chosen     = $args['chosen'];
			$chosen_class     = ( $this->chosen ) ? ' eapro--chosen' : '';
			$line_height_unit = ( ! empty( $args['line_height_unit'] ) ) ? $args['line_height_unit'] : $args['unit'];

			echo '<div class="eapro--typography' . esc_attr( $chosen_class ) . '" data-unit="' . esc_attr( $args['unit'] ) . '" data-line-height-unit="' . esc_attr( $line_height_unit ) . '" data-exclude="' . esc_attr( $args['exclude'] ) . '">';

			echo '<div class="eapro--blocks eapro--blocks-selects">';

			//
			// Font Family
			if ( ! empty( $args['font_family'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Font Family', 'easy-accordion-free' ) . '</div>';
				echo $this->create_select( array( $this->value['font-family'] => $this->value['font-family'] ), 'font-family', esc_html__( 'Select a font', 'easy-accordion-free' ) );
				echo '</div>';
			}

			//
			// Backup Font Family
			if ( ! empty( $args['backup_font_family'] ) ) {
				echo '<div class="eapro--block eapro--block-backup-font-family hidden">';
				echo '<div class="eapro--title">' . esc_html__( 'Backup Font Family', 'easy-accordion-free' ) . '</div>';
				echo $this->create_select(
					apply_filters(
						'eapro_field_typography_backup_font_family', array(
							'Arial, Helvetica, sans-serif',
							"'Arial Black', Gadget, sans-serif",
							"'Comic Sans MS', cursive, sans-serif",
							'Impact, Charcoal, sans-serif',
							"'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
							'Tahoma, Geneva, sans-serif',
							"'Trebuchet MS', Helvetica, sans-serif'",
							'Verdana, Geneva, sans-serif',
							"'Courier New', Courier, monospace",
							"'Lucida Console', Monaco, monospace",
							'Georgia, serif',
							'Palatino Linotype',
						)
					), 'backup-font-family', esc_html__( 'Default', 'easy-accordion-free' )
				);
				echo '</div>';
			}

			//
			// Font Style and Extra Style Select
			if ( ! empty( $args['font_weight'] ) || ! empty( $args['font_style'] ) ) {

				//
				// Font Style Select
				echo '<div class="eapro--block eapro--block-font-style hidden">';
				echo '<div class="eapro--title">' . esc_html__( 'Font Style', 'easy-accordion-free' ) . '</div>';
				echo '<select class="eapro--font-style-select" data-placeholder="Default">';
				echo '<option value="">' . ( ! $this->chosen ? esc_html__( 'Default', 'easy-accordion-free' ) : '' ) . '</option>';
				if ( ! empty( $this->value['font-weight'] ) || ! empty( $this->value['font-style'] ) ) {
					echo '<option value="' . esc_attr( strtolower( $this->value['font-weight'] . $this->value['font-style'] ) ) . '" selected></option>';
				}
				echo '</select>';
				echo '<input type="hidden" name="' . esc_attr( $this->field_name( '[font-weight]' ) ) . '" class="eapro--font-weight" value="' . esc_attr( $this->value['font-weight'] ) . '" />';
				echo '<input type="hidden" name="' . esc_attr( $this->field_name( '[font-style]' ) ) . '" class="eapro--font-style" value="' . esc_attr( $this->value['font-style'] ) . '" />';

				//
				// Extra Font Style Select
				if ( ! empty( $args['extra_styles'] ) ) {
					echo '<div class="eapro--block-extra-styles hidden">';
					echo ( ! $this->chosen ) ? '<div class="eapro--title">' . esc_html__( 'Load Extra Styles', 'easy-accordion-free' ) . '</div>' : '';
					$placeholder = ( $this->chosen ) ? esc_html__( 'Load Extra Styles', 'easy-accordion-free' ) : esc_html__( 'Default', 'easy-accordion-free' );
					echo $this->create_select( $this->value['extra-styles'], 'extra-styles', $placeholder, true );
					echo '</div>';
				}

				echo '</div>';

			}

			//
			// Subset
			if ( ! empty( $args['subset'] ) ) {
				echo '<div class="eapro--block eapro--block-subset hidden">';
				echo '<div class="eapro--title">' . esc_html__( 'Subset', 'easy-accordion-free' ) . '</div>';
				$subset = ( is_array( $this->value['subset'] ) ) ? $this->value['subset'] : array_filter( (array) $this->value['subset'] );
				echo $this->create_select( $subset, 'subset', esc_html__( 'Default', 'easy-accordion-free' ), $args['multi_subset'] );
				echo '</div>';
			}

			//
			// Text Align
			if ( ! empty( $args['text_align'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Text Align', 'easy-accordion-free' ) . '</div>';
				echo $this->create_select(
					array(
						'inherit' => esc_html__( 'Inherit', 'easy-accordion-free' ),
						'left'    => esc_html__( 'Left', 'easy-accordion-free' ),
						'center'  => esc_html__( 'Center', 'easy-accordion-free' ),
						'right'   => esc_html__( 'Right', 'easy-accordion-free' ),
						'justify' => esc_html__( 'Justify', 'easy-accordion-free' ),
						'initial' => esc_html__( 'Initial', 'easy-accordion-free' ),
					), 'text-align', esc_html__( 'Default', 'easy-accordion-free' )
				);
				echo '</div>';
			}

			//
			// Font Variant
			if ( ! empty( $args['font_variant'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Font Variant', 'easy-accordion-free' ) . '</div>';
				echo $this->create_select(
					array(
						'normal'         => esc_html__( 'Normal', 'easy-accordion-free' ),
						'small-caps'     => esc_html__( 'Small Caps', 'easy-accordion-free' ),
						'all-small-caps' => esc_html__( 'All Small Caps', 'easy-accordion-free' ),
					), 'font-variant', esc_html__( 'Default', 'easy-accordion-free' )
				);
				echo '</div>';
			}

			//
			// Text Transform
			if ( ! empty( $args['text_transform'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Text Transform', 'easy-accordion-free' ) . '</div>';
				echo $this->create_select(
					array(
						'none'       => esc_html__( 'None', 'easy-accordion-free' ),
						'capitalize' => esc_html__( 'Capitalize', 'easy-accordion-free' ),
						'uppercase'  => esc_html__( 'Uppercase', 'easy-accordion-free' ),
						'lowercase'  => esc_html__( 'Lowercase', 'easy-accordion-free' ),
					), 'text-transform', esc_html__( 'Default', 'easy-accordion-free' )
				);
				echo '</div>';
			}

			//
			// Text Decoration
			if ( ! empty( $args['text_decoration'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Text Decoration', 'easy-accordion-free' ) . '</div>';
				echo $this->create_select(
					array(
						'none'               => esc_html__( 'None', 'easy-accordion-free' ),
						'underline'          => esc_html__( 'Solid', 'easy-accordion-free' ),
						'underline double'   => esc_html__( 'Double', 'easy-accordion-free' ),
						'underline dotted'   => esc_html__( 'Dotted', 'easy-accordion-free' ),
						'underline dashed'   => esc_html__( 'Dashed', 'easy-accordion-free' ),
						'underline wavy'     => esc_html__( 'Wavy', 'easy-accordion-free' ),
						'underline overline' => esc_html__( 'Overline', 'easy-accordion-free' ),
						'line-through'       => esc_html__( 'Line-through', 'easy-accordion-free' ),
					), 'text-decoration', esc_html__( 'Default', 'easy-accordion-free' )
				);
				echo '</div>';
			}

			echo '</div>';

			echo '<div class="eapro--blocks eapro--blocks-inputs">';

			//
			// Font Size
			if ( ! empty( $args['font_size'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Font Size', 'easy-accordion-free' ) . '</div>';
				echo '<div class="eapro--input-wrap">';
				echo '<input type="number" name="' . esc_attr( $this->field_name( '[font-size]' ) ) . '" class="eapro--font-size eapro--input eapro-input-number" value="' . esc_attr( $this->value['font-size'] ) . '" />';
				echo '<span class="eapro--unit">' . esc_attr( $args['unit'] ) . '</span>';
				echo '</div>';
				echo '</div>';
			}

			//
			// Line Height
			if ( ! empty( $args['line_height'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Line Height', 'easy-accordion-free' ) . '</div>';
				echo '<div class="eapro--input-wrap">';
				echo '<input type="number" name="' . esc_attr( $this->field_name( '[line-height]' ) ) . '" class="eapro--line-height eapro--input eapro-input-number" value="' . esc_attr( $this->value['line-height'] ) . '" />';
				echo '<span class="eapro--unit">' . esc_attr( $line_height_unit ) . '</span>';
				echo '</div>';
				echo '</div>';
			}

			//
			// Letter Spacing
			if ( ! empty( $args['letter_spacing'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Letter Spacing', 'easy-accordion-free' ) . '</div>';
				echo '<div class="eapro--input-wrap">';
				echo '<input type="number" name="' . esc_attr( $this->field_name( '[letter-spacing]' ) ) . '" class="eapro--letter-spacing eapro--input eapro-input-number" value="' . esc_attr( $this->value['letter-spacing'] ) . '" />';
				echo '<span class="eapro--unit">' . esc_attr( $args['unit'] ) . '</span>';
				echo '</div>';
				echo '</div>';
			}

			//
			// Word Spacing
			if ( ! empty( $args['word_spacing'] ) ) {
				echo '<div class="eapro--block">';
				echo '<div class="eapro--title">' . esc_html__( 'Word Spacing', 'easy-accordion-free' ) . '</div>';
				echo '<div class="eapro--input-wrap">';
				echo '<input type="number" name="' . esc_attr( $this->field_name( '[word-spacing]' ) ) . '" class="eapro--word-spacing eapro--input eapro-input-number" value="' . esc_attr( $this->value['word-spacing'] ) . '" />';
				echo '<span class="eapro--unit">' . esc_attr( $args['unit'] ) . '</span>';
				echo '</div>';
				echo '</div>';
			}

			echo '</div>';

			//
			// Font Color
			if ( ! empty( $args['color'] ) ) {
				$default_color_attr = ( ! empty( $default_value['color'] ) ) ? ' data-default-color="' . esc_attr( $default_value['color'] ) . '"' : '';
				echo '<div class="eapro--block eapro--block-font-color">';
				echo '<div class="eapro--title">' . esc_html__( 'Font Color', 'easy-accordion-free' ) . '</div>';
				echo '<div class="eapro-field-color">';
				echo '<input type="text" name="' . esc_attr( $this->field_name( '[color]' ) ) . '" class="eapro-color eapro--color" value="' . esc_attr( $this->value['color'] ) . '"' . $default_color_attr . ' />';
				echo '</div>';
				echo '</div>';
			}

			//
			// Custom style
			if ( ! empty( $args['custom_style'] ) ) {
				echo '<div class="eapro--block eapro--block-custom-style">';
				echo '<div class="eapro--title">' . esc_html__( 'Custom Style', 'easy-accordion-free' ) . '</div>';
				echo '<textarea name="' . esc_attr( $this->field_name( '[custom-style]' ) ) . '" class="eapro--custom-style">' . esc_attr( $this->value['custom-style'] ) . '</textarea>';
				echo '</div>';
			}

			//
			// Preview
			$always_preview = ( $args['preview'] !== 'always' ) ? ' hidden' : '';

			if ( ! empty( $args['preview'] ) ) {
				echo '<div class="eapro--block eapro--block-preview' . esc_attr( $always_preview ) . '">';
				echo '<div class="eapro--toggle fa fa-toggle-off"></div>';
				echo '<div class="eapro--preview">' . esc_attr( $args['preview_text'] ) . '</div>';
				echo '</div>';
			}

			echo '<input type="hidden" name="' . esc_attr( $this->field_name( '[type]' ) ) . '" class="eapro--type" value="' . esc_attr( $this->value['type'] ) . '" />';
			echo '<input type="hidden" name="' . esc_attr( $this->field_name( '[unit]' ) ) . '" class="eapro--unit-save" value="' . esc_attr( $args['unit'] ) . '" />';

			echo '</div>';

			echo $this->field_after();

		}

		public function create_select( $options, $name, $placeholder = '', $is_multiple = false ) {

			$multiple_name = ( $is_multiple ) ? '[]' : '';
			$multiple_attr = ( $is_multiple ) ? ' multiple data-multiple="true"' : '';
			$chosen_rtl    = ( $this->chosen && is_rtl() ) ? ' chosen-rtl' : '';

			$output  = '<select name="' . esc_attr( $this->field_name( '[' . $name . ']' . $multiple_name ) ) . '" class="eapro--' . esc_attr( $name ) . esc_attr( $chosen_rtl ) . '" data-placeholder="' . esc_attr( $placeholder ) . '"' . $multiple_attr . '>';
			$output .= ( ! empty( $placeholder ) ) ? '<option value="">' . esc_attr( ( ! $this->chosen ) ? $placeholder : '' ) . '</option>' : '';

			if ( ! empty( $options ) ) {
				foreach ( $options as $option_key => $option_value ) {
					if ( $is_multiple ) {
						$selected = ( in_array( $option_value, $this->value[ $name ] ) ) ? ' selected' : '';
						$output  .= '<option value="' . esc_attr( $option_value ) . '"' . esc_attr( $selected ) . '>' . esc_attr( $option_value ) . '</option>';
					} else {
						$option_key = ( is_numeric( $option_key ) ) ? $option_value : $option_key;
						$selected   = ( $option_key === $this->value[ $name ] ) ? ' selected' : '';
						$output    .= '<option value="' . esc_attr( $option_key ) . '"' . esc_attr( $selected ) . '>' . esc_attr( $option_value ) . '</option>';
					}
				}
			}

			$output .= '</select>';

			return $output;

		}

		public function enqueue() {

			if ( ! wp_script_is( 'eapro-webfontloader' ) ) {

				SP_EAP::include_plugin_file( 'fields/typography/google-fonts.php' );

				wp_enqueue_script( 'eapro-webfontloader', 'https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.min.js', array( 'eapro' ), '1.6.28', true );

				$webfonts = array();

				$customwebfonts = apply_filters( 'eapro_field_typography_customwebfonts', array() );

				if ( ! empty( $customwebfonts ) ) {
					$webfonts['custom'] = array(
						'label' => esc_html__( 'Custom Web Fonts', 'easy-accordion-free' ),
						'fonts' => $customwebfonts,
					);
				}

				$webfonts['safe'] = array(
					'label' => esc_html__( 'Safe Web Fonts', 'easy-accordion-free' ),
					'fonts' => apply_filters(
						'eapro_field_typography_safewebfonts', array(
							'Arial',
							'Arial Black',
							'Helvetica',
							'Times New Roman',
							'Courier New',
							'Tahoma',
							'Verdana',
							'Impact',
							'Trebuchet MS',
							'Comic Sans MS',
							'Lucida Console',
							'Lucida Sans Unicode',
							'Georgia, serif',
							'Palatino Linotype',
						)
					),
				);

				$webfonts['google'] = array(
					'label' => esc_html__( 'Google Web Fonts', 'easy-accordion-free' ),
					'fonts' => apply_filters(
						'eapro_field_typography_googlewebfonts', eapro_get_google_fonts()
					),
				);

				$defaultstyles = apply_filters( 'eapro_field_typography_defaultstyles', array( 'normal', 'italic', '700', '700italic' ) );

				$googlestyles = apply_filters(
					'eapro_field_typography_googlestyles', array(
						'100'       => 'Thin 100',
						'100italic' => 'Thin 100 Italic',
						'200'       => 'Extra-Light 200',
						'200italic' => 'Extra-Light 200 Italic',
						'300'       => 'Light 300',
						'300italic' => 'Light 300 Italic',
						'normal'    => 'Normal 400',
						'italic'    => 'Normal 400 Italic',
						'500'       => 'Medium 500',
						'500italic' => 'Medium 500 Italic',
						'600'       => 'Semi-Bold 600',
						'600italic' => 'Semi-Bold 600 Italic',
						'700'       => 'Bold 700',
						'700italic' => 'Bold 700 Italic',
						'800'       => 'Extra-Bold 800',
						'800italic' => 'Extra-Bold 800 Italic',
						'900'       => 'Black 900',
						'900italic' => 'Black 900 Italic',
					)
				);

				$webfonts = apply_filters( 'eapro_field_typography_webfonts', $webfonts );

				wp_localize_script(
					'eapro', 'eapro_typography_json', array(
						'webfonts'      => $webfonts,
						'defaultstyles' => $defaultstyles,
						'googlestyles'  => $googlestyles,
					)
				);

			}

		}

		public function enqueue_google_fonts() {

			$value     = $this->value;
			$families  = array();
			$is_google = false;

			if ( ! empty( $this->value['type'] ) ) {
				$is_google = ( $this->value['type'] === 'google' ) ? true : false;
			} else {
				SP_EAP::include_plugin_file( 'fields/typography/google-fonts.php' );
				$is_google = ( array_key_exists( $this->value['font-family'], eapro_get_google_fonts() ) ) ? true : false;
			}

			if ( $is_google ) {

				// set style
				$font_weight = ( ! empty( $value['font-weight'] ) ) ? $value['font-weight'] : '';
				$font_style  = ( ! empty( $value['font-style'] ) ) ? $value['font-style'] : '';

				if ( $font_weight || $font_style ) {
					$style                       = $font_weight . $font_style;
					$families['style'][ $style ] = $style;
				}

				// set extra styles
				if ( ! empty( $value['extra-styles'] ) ) {
					foreach ( $value['extra-styles'] as $extra_style ) {
						$families['style'][ $extra_style ] = $extra_style;
					}
				}

				// set subsets
				if ( ! empty( $value['subset'] ) ) {
					$value['subset'] = ( is_array( $value['subset'] ) ) ? $value['subset'] : array_filter( (array) $value['subset'] );
					foreach ( $value['subset'] as $subset ) {
						$families['subset'][ $subset ] = $subset;
					}
				}

				$all_styles  = ( ! empty( $families['style'] ) ) ? ':' . implode( ',', $families['style'] ) : '';
				$all_subsets = ( ! empty( $families['subset'] ) ) ? ':' . implode( ',', $families['subset'] ) : '';

				$families = $this->value['font-family'] . str_replace( array( 'normal', 'italic' ), array( 'n', 'i' ), $all_styles ) . $all_subsets;

				$this->parent->typographies[] = $families;

				return $families;

			}

			return false;

		}

		public function output() {

			$output    = '';
			$bg_image  = array();
			$important = ( ! empty( $this->field['output_important'] ) ) ? '!important' : '';
			$element   = ( is_array( $this->field['output'] ) ) ? join( ',', $this->field['output'] ) : $this->field['output'];

			$font_family   = ( ! empty( $this->value['font-family'] ) ) ? $this->value['font-family'] : '';
			$backup_family = ( ! empty( $this->value['backup-font-family'] ) ) ? ', ' . $this->value['backup-font-family'] : '';

			if ( $font_family ) {
				$output .= 'font-family:"' . $font_family . '"' . $backup_family . $important . ';';
			}

			// Common font properties
			$properties = array(
				'color',
				'font-weight',
				'font-style',
				'font-variant',
				'text-align',
				'text-transform',
				'text-decoration',
			);

			foreach ( $properties as $property ) {
				if ( isset( $this->value[ $property ] ) && $this->value[ $property ] !== '' ) {
					$output .= $property . ':' . $this->value[ $property ] . $important . ';';
				}
			}

			$properties = array(
				'font-size',
				'line-height',
				'letter-spacing',
				'word-spacing',
			);

			$unit             = ( ! empty( $this->value['unit'] ) ) ? $this->value['unit'] : '';
			$line_height_unit = ( ! empty( $this->value['line_height_unit'] ) ) ? $this->value['line_height_unit'] : $unit;

			foreach ( $properties as $property ) {
				if ( isset( $this->value[ $property ] ) && $this->value[ $property ] !== '' ) {
					$unit    = ( $property === 'line-height' ) ? $line_height_unit : $unit;
					$output .= $property . ':' . $this->value[ $property ] . $unit . $important . ';';
				}
			}

			$custom_style = ( ! empty( $this->value['custom-style'] ) ) ? $this->value['custom-style'] : '';

			if ( $output ) {
				$output = $element . '{' . $output . $custom_style . '}';
			}

			$this->parent->output_css .= $output;

			return $output;

		}

	}
}
