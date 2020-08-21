<?php if ( ! defined( 'ABSPATH' ) ) {
	die; } // Cannot access directly.

if ( ! function_exists( 'eapro_get_google_fonts' ) ) {
	function eapro_get_google_fonts() {
		return [
			'Open Sans'           => [ [ '300', '300italic', 'normal', 'italic', '600', '600italic', '700', '700italic', '800', '800italic' ], [ 'cyrillic-ext', 'cyrillic', 'greek-ext', 'latin-ext', 'greek', 'latin', 'vietnamese' ] ],
			'Open Sans Condensed' => [ [ '300', '300italic', '700' ], [ 'cyrillic-ext', 'cyrillic', 'greek-ext', 'latin-ext', 'greek', 'latin', 'vietnamese' ] ],
		];
	}
}
