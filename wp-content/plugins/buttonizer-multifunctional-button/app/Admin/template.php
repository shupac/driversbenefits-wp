<?php

require_once(ABSPATH . 'wp-admin/includes/screen.php');

if (!defined('ABSPATH') || !defined('WP_ADMIN')) {
    exit("No script kiddies please");
}

if (is_rtl()) {
	$body_classes[] = 'rtl';
}

global $current_screen;

// Catch plugins that call get_current_screen()
if (empty($current_screen)) {
	set_current_screen();
}

$body_classes[] = ' locale-' . sanitize_html_class( strtolower( str_replace( '_', '-', get_user_locale() ) ) );

?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<title>Buttonizer</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<?php 
	do_action( 'admin_print_styles' );

	do_action( 'admin_print_scripts' );
	
	?>

	<script type="text/javascript">
		addLoadEvent = function(func){if(typeof jQuery!="undefined")jQuery(document).ready(func);else if(typeof wpOnload!='function'){wpOnload=func;}else{var oldonload=wpOnload;wpOnload=function(){oldonload();func();}}};
		var ajaxurl = '<?php echo admin_url( 'admin-ajax.php', 'relative' ); ?>';
	</script>
</head>
<body class="<?=implode(" ", $body_classes)?>">

<div class="buttonizer-admin-overlay">
	<p><b><?php echo __('Buttonizer is loading...', 'buttonizer-multifunctional-button') ?></b></p>

	<p>
		<?php
			echo sprintf(
				// Translators: First link goes to our knowledge base, the second link goes to the admin panel.
				__('When Buttonizer does not start, <a %1$s>click here</a> to find out what is going wrong or <a %2$s>click here</a> to return to the WordPress admin dashboard.', 'buttonizer-multifunctional-button'),
				'href="https://community.buttonizer.pro/knowledgebase/28" target="_blank"',
				'href="'. admin_url() .'"'
			);
		?>
	</p>

	<script type="application/javascript">
		setTimeout(function() {
			document.querySelector(".buttonizer-admin-overlay").innerHTML += "<div style=\'margin-top: 40px;\'><?php echo __('When you have a slow internet connection or slow webserver, give it a moment...', 'buttonizer-multifunctional-button') ?></div>";
		}, 10000);
	</script>

	<noscript>
		<div class="buttonizer-no-script"><?php echo __('Hi there! JavaScript is disabled in your browser. Please consider to enable JavaScript in your browser to use Buttonizer.', 'buttonizer-multifunctional-button') ?></div>
	</noscript>
</div>

<?php 
	do_action( 'admin_footer', '' );

	do_action( 'admin_print_footer_scripts' );
 ?>
</body>
</html>