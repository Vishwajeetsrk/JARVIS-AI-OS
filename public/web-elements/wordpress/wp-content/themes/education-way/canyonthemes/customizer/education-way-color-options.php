<?php
/**
 * Typography Options
 *
 * @since 1.0.0
 */
$wp_customize->add_panel(
    'education_way_color_options',
    array(
        'priority'       => 50,
        'capability'     => 'edit_theme_options',
        'theme_supports' => '',
        'title'          => esc_html__('Theme Color Options', 'education-way'),
    )
);

/**
 * Basic Color Options Section
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'education_way_basic_color_option',
    array(
        'title'    => esc_html__('Basic Color Options', 'education-way'),
        'panel'    => 'education_way_color_options',
        'priority' => 3,
    )
);
/*
* Primary Color 
*/
$wp_customize->add_setting(
    'education_way_primary_color',
    array(
        'default'           => $default['education_way_primary_color'],
        'sanitize_callback' => 'sanitize_hex_color',
    )
);
$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'education_way_primary_color', array(
    'label'  => esc_html__('Primary Color', 'education-way'),
    'section'      => 'education_way_basic_color_option',
    'priority'     => 14,

)));