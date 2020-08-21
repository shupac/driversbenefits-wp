<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'EhoBL6EWINRULcT09/zK15YRP1cekPfUDZBaUbsdMjSAj1jbHqjy18WAaxrv1zLTuLW6cgAeRknmlaxQfvuIOg==');
define('SECURE_AUTH_KEY',  'VkWqwrId64o7UFU/Q9NkYxANs5E/gAo26qskNoptmhj0wRW9gVesvjbOpKD9GI+YeuLvLSVGZeDo611J5WjuWQ==');
define('LOGGED_IN_KEY',    '0huoHhp5G+lMlIO9th8/nAMNuW/443IR6NAVshyVti8zFmhgn8qfGY7DRQVJSU3oMK69/KVo7yJmA/wTrotsvw==');
define('NONCE_KEY',        'feWIdkN2jEGIrBT1XkE+AHKCXOuMeZcRe8HApv+YJXoWp8OTfY6Paawkoqye6PbadMjEwy/2FJVj357/E1yFug==');
define('AUTH_SALT',        'Zu2UbvzDUYzpsRVEo2TfSPN5qIqKvhS3g11Jl4cwPnJW+bIwbn1O0jeszgnOBBVoa0kUCYPrX6kBNZqkgjy7Tg==');
define('SECURE_AUTH_SALT', 'y/e6E9adW/3raLnHr3eAquYJQtVAEbC4zEVaLfIOapRynvptlzHw7fi0lub8vG5bGjBuvsAPrSGe4RTo0J4sEw==');
define('LOGGED_IN_SALT',   '4ydBeq8/sMa/2A9K557QPrXWTqbWPkMiQmsasEGO87Bvrd8wBUUfHOzQCs0mNIU5YDUUOplcQ4jVt0sG7oOxKw==');
define('NONCE_SALT',       'Fn20tu9j4wVjTWIu3GvvTjedJX6gKXDKfgzRegwB0PHStqVxtgZsveFx7/33RXEwG87DjnsQybFTbQ84ViyFgg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

define( 'WP_DEBUG', true );
define( 'DB_BACKEND_URL', 'https://driversbenefits.herokuapp.com' );


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
