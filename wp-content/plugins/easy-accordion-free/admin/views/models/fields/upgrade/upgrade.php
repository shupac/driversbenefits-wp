<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.
/**
 *
 * Field: upgrade
 *
 * @since 1.0.0
 * @version 1.0.0
 */
if ( ! class_exists( 'SP_EAP_Field_upgrade' ) ) {
	class SP_EAP_Field_upgrade extends SP_EAP_Fields {

		public function __construct( $field, $value = '', $unique = '', $where = '', $parent = '' ) {
			parent::__construct( $field, $value, $unique, $where, $parent );
		}

		public function render() {

			// Get the Post ID.
			$post_id = get_the_ID();

			echo ( ! empty( $post_id ) ) ? '<div class="sp-ea-upgrade-area">
			<div class="sp-ea-upgrade-header text-center">
					<h1>Get more Advanced Functionality & Flexibility with Pro!</h1>
					<p>Upgrade to Pro Version of  Easy Accordion to benefit from all features!</p>
					<div class="sp-ea-button">
						<div>
							<a href="https://shapedplugin.com/plugin/easy-accordion-pro/" class="btn btn-one" target="_blank" title="">Upgrade to Pro!</a>
						</div>
						<div>
							<a href="https://shapedplugin.com/demo/easy-accordion-pro/" class="btn btn-two" target="_blank" title="">All Features & Demo</a>
						</div>
					</div>
					<img src="' . SP_EA_URL . 'admin/img/aa-img.jpg" alt="">
			</div>
	
		<div class="sp-ea-upgrade-body">
			<h1 class="text-center">Powerful Premium Features Include</h2>
			<p class="text-center">You will have access to tons of premium features which help you to create professional looking <br>
			accordions easily. Some of the remarkable features:</p>
			<div class="upgrade-feature container">			
		<div class="col-6">
			<ul>
				<li>16+ Beautiful Themes with Preview.</li>
				<li>2 Layouts. (Horizontal and Vertical)</li>
				<li>Advanced Shortcode Generator.</li>
				<li>Multi-level or Nested Accordion.</li>
				<li>14+ Expand & Collapse Icon Style Sets.</li>
				<li> Accordion from Posts, Pages & Category.</li>
				<li>Accordion from Custom Post Types & Taxonomy.</li>
				<li>WooCommerce FAQ Tab Accordion.</li>
				<li>Group Accordion FAQs Showcase.</li>
				<li>Limit To Display Number of Accordion.</li>
				<li>25+ Smooth Animation & Effects.</li>
				<li> Margin Between Accordions.</li>
				<li>Accordion Border and Radius options.</li>
				<li>AutoPlay Accordion.</li>
			</ul>
		</div>
		<div class="col-6">
			<ul>
				<li> 940+ Google Fonts. (Typography Options)</li>
				<li>Supported any Contents. (e.g. HTML, shortcodes, images, YouTube, audio etc.)</li>
				<li>Accordion Title Background Color & Custom Padding.</li>
				<li> Accordion Description Background Color.</li>
				<li>Accordion Description Custom Padding.</li>
				<li>FontAwesome Icon Picker before Accordion Title.</li>
				<li>HTML Title Tag (H1-H6 tags) and Strip HTML.</li>
				<li>Multilingual & RTL Ready.</li>
				<li>Widget Supported.</li>
				<li>Multi-site Supported.</li>
				<li>Developer friendly & easy to use.</li>
				<li>Highly Customizable.</li>
				<li>And much more options.</li>
			</ul>
		</div>
			</div>
		</div>
		<div class="sp-ea-upgrade-footer text-center">
			<h1>Join the 12000+ Happy Users</h2>
			<div class="buy-btn">
				<a href="https://shapedplugin.com/plugin/easy-accordion-pro/" target="_blank">Get a License Now!</a>
			</div>
		</div>
	</div>' : '';
		}

	}
}
