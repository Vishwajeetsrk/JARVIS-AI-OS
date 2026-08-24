<?php
/**
 * The template for displaying all pages
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 * @link https://codex.wordpress.org/Template_Hierarchy
 * @package Canyon Themes
 * @subpackage Canyon
 */

get_header();

$education_way_hide_front_page_content = education_way_get_option( 'education_way_front_page_hide_option' );

/*show widget in front page, now user are not force to use front page*/
if ( !is_home() ) {
   
    do_action( 'education_way_home_page_section' );
   
    dynamic_sidebar( 'education-way-home-page' );
}

if ( 'posts' == get_option('show_on_front') ) {

    include( get_home_template() );

} else {
    
    if ( 1 != $education_way_hide_front_page_content ) {
       
        include( get_page_template() );
    }
}

get_footer();
