<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'stic3' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '0[grhi[hQ4+U;&#Bl~cVJs<lG3{Y}y+Y6WyA)Rfi)ZSgJ6`X*Uz,+xQ6H:x#XZ:9' );
define( 'SECURE_AUTH_KEY',  '?y0{&Hg;}>qh[)N3L-LgV~yR<np:Oex5)q>S5HeX{Ov{0sbu+wqmQ%pvmd;80yy]' );
define( 'LOGGED_IN_KEY',    '5>2nX|tp 8>B)N[jMk%X$mRwH-lS3}v,=?2K-@5tq>Uri{{|/5brAWwjPL`SM1H>' );
define( 'NONCE_KEY',        'J`(ZBC`,EX|Y)ByOjr,@7h{e^YkaAX}SL3~*I,c#xA%qf-NpD+-:tv5F]^P. csS' );
define( 'AUTH_SALT',        'oE{5:X,_vppwv~mWQ/.D@_>pFq9x(K((pKJ2_s-n}XhtEt6j;ESEJvTR+I<)5-lK' );
define( 'SECURE_AUTH_SALT', '( g_nvOyZEJ5q4|I/-zUc>nq!`x|a1%NGs,r7;G{Y:28Cid{%e>cz1Tqbjz38QZU' );
define( 'LOGGED_IN_SALT',   '@)?VFC8R[X=}4RPl Dy?Qiz|CPU axhVhkY7ijIrlxXq=JbymjkYn ,l*P/IzzXW' );
define( 'NONCE_SALT',       '@._*D=:c13q35TsFsjP,G5J/TQ0:i.Tw=D|^`Kcdeg?A1^;10}@Y#@gy9)acM&o}' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
