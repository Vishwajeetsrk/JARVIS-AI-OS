<?php
/**
 * Plugin Name: Contact Form 7 Widget For Elementor Page Builder
 * Description: Adds Contact Form 7 widget element to Elementor page builder for easy drag & drop the created contact forms with CF7 (contact form 7).
 * Version:     1.0.8
 * Author:      voidCoders
 * Plugin URI:  https://demo.voidcoders.com/plugins/contact-form7-widget-for-elementor/
 * Author URI:  https://voidcoders.com
 * Text Domain: void
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


function void_cf7_widget() {
	// Load localization file
	load_plugin_textdomain( 'void' );

	// Notice if the Elementor is not active
	if ( ! did_action( 'elementor/loaded' ) ) {
		return;
	}

	// Check version required
	$elementor_version_required = '1.0.0';
	if ( ! version_compare( ELEMENTOR_VERSION, $elementor_version_required, '>=' ) ) {
		return;
	}

	// Require the main plugin file
	require( __DIR__ . '/plugin.php' );   //loading the main plugin

}
add_action( 'plugins_loaded', 'void_cf7_widget' ); 

// display custom admin notice
function void_cf7_widget_notice() { ?>

	<?php if (!did_action( 'elementor/loaded' )  || !is_plugin_active( 'contact-form-7/wp-contact-form-7.php' ) ) : ?>
		<div class="notice notice-warning is-dismissible">
			<p><?php echo sprintf( __( '<a href="%s"  target="_blank" >Elementor Page Builder</a> and <a href="%s"  target="_blank" >Contact Form 7</a>  must be installed and activated for "Contact Form 7 Widget For Elementor Page Builder" to work' ),  'https://wordpress.org/plugins/elementor/', 'https://wordpress.org/plugins/contact-form-7/'); ?></p>
		</div>
	<?php endif; ?>

<?php }
add_action('admin_notices', 'void_cf7_widget_notice');


// add plugin activation time

function void_cf7_activation_time(){
    $get_installation_time = strtotime("now");
    add_option('void_cf7_elementor_activation_time', $get_installation_time ); 
}
register_activation_hook( __FILE__, 'void_cf7_activation_time' );

//check if review notice should be shown or not

function void_cf7_check_installation_time() {

    $spare_me = get_option('void_cf7_spare_me');
    if( !$spare_me ){
        $install_date = get_option( 'void_cf7_elementor_activation_time' );
        $past_date = strtotime( '-7 days' );
     
        if ( $past_date >= $install_date ) {
     
            add_action( 'admin_notices', 'void_cf7_display_admin_notice' );
     
        }
    }
}
add_action( 'admin_init', 'void_cf7_check_installation_time' );
 
/**
* Display Admin Notice, asking for a review
**/
function void_cf7_display_admin_notice() {
    // wordpress global variable 
    global $pagenow;
    if( $pagenow == 'index.php' ){
 
        $dont_disturb = esc_url( get_admin_url() . '?spare_me2=1' );
        $plugin_info = get_plugin_data( __FILE__ , true, true );       
        $reviewurl = esc_url( 'https://wordpress.org/support/plugin/cf7-widget-elementor/reviews/#new-post' );
        $void_url = esc_url( 'https://voidcoders.com/shop/' );
     
        printf(__('<div class="void-cf7-review wrap">You have been using <b> %s </b> for a while. We hope you liked it ! Please give us a quick rating, it works as a boost for us to keep working on the plugin ! Also you can visit our <a href="%s" target="_blank">site</a> to get more themes & Plugins<div class="void-cf7-review-btn"><a href="%s" class="button button-primary" target=
            "_blank">Rate Now!</a><a href="%s" class="void-cf7-review-done"> Already Done !</a></div></div>', $plugin_info['TextDomain']), $plugin_info['Name'], $void_url, $reviewurl, $dont_disturb );
    }
}
// remove the notice for the user if review already done or if the user does not want to
function void_cf7_spare_me(){    
    if( isset( $_GET['spare_me2'] ) && !empty( $_GET['spare_me2'] ) ){
        $spare_me = $_GET['spare_me2'];
        if( $spare_me == 1 ){
            add_option( 'void_cf7_spare_me' , TRUE );
        }
    }
}
add_action( 'admin_init', 'void_cf7_spare_me', 5 );

//add admin css
function void_cf7_admin_css(){
     global $pagenow;
    if( $pagenow == 'index.php' ){
        wp_enqueue_style( 'void-cf7-admin', plugins_url( 'assets/css/void-cf7-admin.css', __FILE__ ) );
    }
}
add_action( 'admin_enqueue_scripts', 'void_cf7_admin_css' );