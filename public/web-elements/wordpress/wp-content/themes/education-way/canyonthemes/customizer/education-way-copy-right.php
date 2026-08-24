<?php
/**
 * Copyright Info Section
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'education_way_copyright_info_section',
    array(
        'priority'        => 50,
        'capability'      => 'edit_theme_options',
        'theme_supports'  => '',
        'title'           => esc_html__('Footer Option', 'education-way'),
    )
);

/**
 * Field for Copyright
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_copyright',
    array(
        'default'           => $default['education_way_copyright'],
        'sanitize_callback' => 'wp_kses_post',
    )
);
$wp_customize->add_control(
    'education_way_copyright',
    array(
        'type'     => 'text',
        'label'    => esc_html__('Copyright', 'education-way'),
        'section'  => 'education_way_copyright_info_section',
        'priority' => 8
    )
);

/**
 * Go to Top
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_footer_go_to_top',
    array(
        'default'           => $default['education_way_footer_go_to_top'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);
$wp_customize->add_control(
    'education_way_footer_go_to_top',
    array(
        'type'     => 'checkbox',
        'label'    => esc_html__('Enable/Disable Go to top ', 'education-way'),
        'description'    => esc_html__('Go to top Option for Footer Section', 'education-way'),
        'section'  => 'education_way_copyright_info_section',
        'priority' => 8
    )
);