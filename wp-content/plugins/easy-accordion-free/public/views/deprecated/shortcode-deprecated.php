<?php
/**
 * Registering shortcode.
 *
 * @package Easy Accordion Free
 */
function lazy_p_wp_accordion_free_files() {
		wp_enqueue_script( 'jquery', false, array(), false, false );
		wp_register_style( 'lazy--p-accordion-main-css', SP_EA_URL . 'public/views/deprecated/css/style.css', array(), SP_EA_VERSION );
		wp_register_script( 'lazy-p-accordion-main-js', SP_EA_URL . 'public/views/deprecated/js/jquery.beefup.min.js', array( 'jquery' ), SP_EA_VERSION, false );
}
add_action( 'wp_enqueue_scripts', 'lazy_p_wp_accordion_free_files' );

function easy_accordion_free_wrapper( $atts, $content = null ) {
	/* Including all files */
	extract(
		shortcode_atts(
			array(
				'id' => '',
			), $atts
		)
	);
	wp_enqueue_style( 'lazy--p-accordion-main-css' );
	wp_enqueue_script( 'lazy-p-accordion-main-js' );
	return '
		<script type="text/javascript">
			jQuery(document).ready(function() {
				jQuery(".easy_accordion_single' . $id . ' .single_accordion").beefup({
					openSingle : true,
					trigger: ".ea-item-head",
					content: ".ea-item-body",
					openClass : "ea-item-expand",
					animation : "slide",
					openSpeed : "200",
					closeSpeed : "200",
					scroll : false
				});
			});
		</script>
		
		<div id="ea_one" class="easy_accordion_wrapper easy_accordion_single' . $id . ' ' . $id . '">' . do_shortcode( $content ) . '</div>
		
	';
}
add_shortcode( 'efaccordion', 'easy_accordion_free_wrapper' );

function easy_accordion_free_items( $atts, $content = null ) {

	extract(
		shortcode_atts(
			array(
				'title' => '',
				'text'  => '',
			), $atts
		)
	);

	return '
	<div class="single_accordion">
		<h2 class="ea-item-head">' . $title . '</h2>
		<div class="ea-item-body">' . $text . '</div>		
	</div>
	';
}
add_shortcode( 'efitems', 'easy_accordion_free_items' );

// Accordion form shortcode.
function wap_accordion_items_shortcode( $atts ) {
	extract(
		shortcode_atts(
			array(
				'id'    => '01',
				'items' => '10',
			), $atts, 'wcp_testimonial'
		)
	);
	wp_enqueue_style( 'lazy--p-accordion-main-css' );
	wp_enqueue_script( 'lazy-p-accordion-main-js' );
	$q = new WP_Query(
		array(
			'posts_per_page' => -1,
			'post_type'      => 'eaf-items',
		)
	);

	$list = '
		<script type="text/javascript">
			jQuery(document).ready(function() {
				jQuery(".easy_accordion_single' . $id . ' .single_accordion").beefup({
					openSingle : true,
					trigger: ".ea-item-head",
					content: ".ea-item-body",
					openClass : "ea-item-expand",
					animation : "slide",
					openSpeed : "200",
					closeSpeed : "200",
					scroll : false
				});
			});
		</script>		
	
		<div id="ea_one" class="easy_accordion_wrapper easy_accordion_single' . $id . '">	
		
	';
	while ( $q->have_posts() ) :
		$q->the_post();
		$idd           = get_the_ID();
		$content_main  = do_shortcode( get_the_content() );
		$content_autop = wpautop( trim( $content_main ) );

		$list .= '		
		<div class="single_accordion">
			<h2 class="ea-item-head">' . do_shortcode( get_the_title() ) . '</h2>
			<div class="ea-item-body">' . do_shortcode( $content_autop ) . '</div>		
		</div>
		';

	endwhile;
	$list .= '</div>';

	wp_reset_query();
	return $list;
}
add_shortcode( 'eaf_items', 'wap_accordion_items_shortcode' );
