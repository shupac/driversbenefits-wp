<?php

function console_log($output, $with_script_tags = true) {
  $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . ');';
  if ($with_script_tags) {
      $js_code = '<script>' . $js_code . '</script>';
  }
  echo $js_code;
}

function load_stylesheets() {
	wp_register_style( 'stylesheet', get_template_directory_uri() . '/style.css', array(), false, 'all' );
	wp_enqueue_style('stylesheet');
	wp_enqueue_style('main', get_template_directory_uri() . '/css/main.css', array(), false, 'all');
}

function load_jquery() {
	wp_deregister_script( 'jquery' );
	wp_enqueue_script( 'jquery', get_template_directory_uri() . '/js/lib/jquery-3.5.1.min.js' , array(), '3.5.1', false );
}

function load_bootstrap() {
	wp_enqueue_script( 'popper', get_template_directory_uri() . '/js/lib/popper.min.js' , array(), '1.12.9', false );
	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/lib/bootstrap.min.js' , array(), '4.5.0', false );
}

function load_js() {
	wp_register_script( 'customjs', get_template_directory_uri() . '/js/main.js', array(), false, true );
	wp_enqueue_script( 'customjs' );
}

function load_datepicker() {
	wp_enqueue_script('datepicker', get_template_directory_uri() . '/js/lib/bootstrap-datepicker.min.js' , array(), '5.0.0', false );
	wp_register_style( 'datepicker', get_template_directory_uri() . '/css/lib/bootstrap-datepicker.min.css', array(), false, 'all' );
	wp_enqueue_style('datepicker');
}

register_nav_menus(
	array(
		'top-menu' => __('Top Menu', 'theme'),
		'footer-menu' => __('Footer Menu', 'theme'),
	)
);

add_theme_support('menus');
add_theme_support('post-thumbnails');
add_action( 'wp_enqueue_scripts', 'load_stylesheets' );
add_action( 'wp_enqueue_scripts', 'load_jquery' );
add_action( 'wp_enqueue_scripts', 'load_js' );
add_action( 'wp_enqueue_scripts', 'load_datepicker' );
add_action( 'wp_enqueue_scripts', 'load_bootstrap' );
