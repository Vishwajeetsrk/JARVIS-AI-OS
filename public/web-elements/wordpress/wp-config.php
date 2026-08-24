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
define( 'DB_NAME', 'batch8' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!:&}/[<O]&lz{jmhCb)ZwlW*R&9RP`m`opU6-q704?YmYb-PrzRIw=Q:avJ<x}sa' );
define( 'SECURE_AUTH_KEY',  '&1zVs6{d_dC6x#5:qcHq}Fo9-}.` };aC#h6;|w3ckXVG{v$a@ACXS&zi(=#hXsT' );
define( 'LOGGED_IN_KEY',    '.wAUW4kUl0G}P1L?d+.t tCE(~,@ `1DZST(bcsH]_qAhkQn).Y,+{H4st^CM-h;' );
define( 'NONCE_KEY',        '<#ZTvy}o+/*N=qGiJ>-!{J!>dO+~67nrv<Qbzm[6b8tJ{IM)$*+^e/J39j6=bbZM' );
define( 'AUTH_SALT',        'JmLw<t}{G+E;[gMie8?4zC&[0L}SJk> 6`7.xw*v#fbH1~.yLP{V*[YXQ^NN[ UR' );
define( 'SECURE_AUTH_SALT', '!%yFc8v[naZ<gE&v;?z2uB/1%Y!K8-t$*D@1Pr!/Pdj/u{?QQtL&m!,Pn)LK ;1o' );
define( 'LOGGED_IN_SALT',   'I3]<Mb0)!]cF&h[BCjs`}w/c<A>d4,hsB*/j}~O^xI1CV?W^7Q&B!4#xo!e[>]4w' );
define( 'NONCE_SALT',       '`Gs4GJ@#}#|OdWyFLv:].|a/OvshFC_|0{INAHMbdD9QAo@9,!vxS| j8^4cWEkM' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
