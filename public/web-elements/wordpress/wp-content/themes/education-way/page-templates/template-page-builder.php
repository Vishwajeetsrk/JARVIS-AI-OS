<?php
/**
 * Template Name: Page Builder Template 
 *
 * @link https://developer.wordpress.org/themes/template-files-section/page-template-files/
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
get_header();

while ( have_posts() ) : the_post();

    the_content();

endwhile; // End of the loop.

get_footer();