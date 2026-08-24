<?php
/**
 * Canyon Theme Customizer
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
if (!function_exists('education_way_customize_register')) :
    function education_way_customize_register($wp_customize)
    {
        $wp_customize->get_setting('blogname')->transport         = 'refresh';
        $wp_customize->get_setting('blogdescription')->transport  = 'refresh';
        $wp_customize->get_setting('header_textcolor')->transport = 'postMessage';
        $wp_customize->get_setting( 'custom_logo' )->transport = 'refresh';

        /*default variable used in setting*/
        $default = education_way_get_default_theme_options();

        /**
         * Customizer setting
         */
        require get_template_directory() . '/canyonthemes/core/customizer-core.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-customizer-function.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-sanitize.php';
        require get_template_directory() . '/canyonthemes/customizer/customizer.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-copy-right.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-theme-options.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-header-info-section.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-layout-design-options.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-typography-options.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-color-options.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-animation-options.php';
        require get_template_directory() . '/canyonthemes/customizer/education-way-single-page-options.php';

    }
    add_action('customize_register', 'education_way_customize_register');
endif;
/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */

if (!function_exists('education_way_customize_preview_js')) :
    function education_way_customize_preview_js()
    {
        wp_enqueue_script('education-way-customizer', get_template_directory_uri() . 'assets/js/customizer.js', array('customize-preview'), '1.0.1', true);
    }

    add_action('customize_preview_init', 'education_way_customize_preview_js');

endif;

/**
 * Adding color in Theme Customizer cutom section
 */

function education_way_customizer_script() {
  
    wp_enqueue_style( 'education-way-customizer-style', get_template_directory_uri() .'/canyonthemes/core/css/customizer-style.css'); 
}
add_action( 'customize_controls_enqueue_scripts', 'education_way_customizer_script' );