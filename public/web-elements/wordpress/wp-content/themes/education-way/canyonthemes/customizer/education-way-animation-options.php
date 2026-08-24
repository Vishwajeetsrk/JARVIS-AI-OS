<?php 
/*-------------------------------------------------------------------------------------------*/
/**
 * Animation Options
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'education_way_animation_option',
    array(
        'title'    => esc_html__('Disable Animation', 'education-way'),
        'panel'    => 'education_way_theme_options',
        'priority' => 3,
    )
);

/**
 *   Show/Hide Static page/Posts in Home page
 */
$wp_customize->add_setting(
    'education_way_animation_disable_option',
    array(
        'default'           => $default['education_way_animation_disable_option'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);

$wp_customize->add_control('education_way_animation_disable_option',
    array(
        'label'    => esc_html__('Checked to Disable Animation', 'education-way'),
        'section'  => 'education_way_animation_option',
        'type'     => 'checkbox',
        'priority' => 10
    )
);