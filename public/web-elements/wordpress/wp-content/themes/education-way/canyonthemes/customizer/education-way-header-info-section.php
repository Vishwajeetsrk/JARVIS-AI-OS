<?php
/**
 * Canyon Header Info Section
 *
 */
$wp_customize->add_section(
    'education_way_top_header_info_section',
    array(
        'priority'   => 1,
        'capability' => 'edit_theme_options',
        'panel'      => 'education_way_theme_options',
        'title'      => esc_html__('Top Header Info', 'education-way'),
    )
);

$wp_customize->add_setting(
    'education_way_top_header_section',
    array(
        'default'           => $default['education_way_top_header_section'],
        'sanitize_callback' => 'education_way_sanitize_select',
    )
);

$hide_show_top_header_option = education_way_slider_option();
$wp_customize->add_control(
    'education_way_top_header_section',
    array(
        'type'               => 'radio',
        'label'              => esc_html__('Top Header Info Option', 'education-way'),
        'description'        => esc_html__('Show/hide Option for Top Header Info Section.', 'education-way'),
        'section'            => 'education_way_top_header_info_section',
        'choices'            => $hide_show_top_header_option,
        'priority'           => 5
    )
);

/**
 * Field for Font Awesome Icon
 *
 */
$wp_customize->add_setting(
    'education_way_top_header_section_phone_number_icon',
    array(
        'default'           => $default['education_way_top_header_section_phone_number_icon'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);

$wp_customize->add_control(
    'education_way_top_header_section_phone_number_icon',
    array(
        'type'               => 'text',
        'description'        => esc_html__('Insert Font Awesome Class Name', 'education-way'),
        'section'            => 'education_way_top_header_info_section',
        'priority'           => 6
    )
);

/**
 * Field for Top Header Phone Number
 *
 */
$wp_customize->add_setting(
    'education_way_top_header_phone_no',
    array(
        'default'           => $default['education_way_top_header_phone_no'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'education_way_top_header_phone_no',
    array(
        'type'       => 'text',
        'label'      => esc_html__('Phone Number', 'education-way'),
        'section'    => 'education_way_top_header_info_section',
        'priority'   => 8
    )
);

/**
 * Field for Fonsome Icon
 *
 */
$wp_customize->add_setting(
    'education_way_email_icon',
    array(
        'default'           => $default['education_way_email_icon'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);

$wp_customize->add_control(
    'education_way_email_icon',
    array(
        'type'        => 'text',
        'description' => esc_html__('Insert Font Awesome Class Name', 'education-way'),
        'section'     => 'education_way_top_header_info_section',
        'priority'    => 8
    )
);

/**
 * Field for Top Header Email Address
 *
 */
$wp_customize->add_setting(
    'education_way_top_header_email',
    array(
        'default'           => $default['education_way_top_header_email'],
        'sanitize_callback' => 'sanitize_email',
    )
);
$wp_customize->add_control(
    'education_way_top_header_email',
    array(
        'type'      => 'email',
        'label'     => esc_html__('Email Address', 'education-way'),
        'section'   => 'education_way_top_header_info_section',
        'priority'  => 8
    )
);

/**
 *   Show/Hide Search Icon
 */
$wp_customize->add_setting(
    'education_way_header_search_icon',
    array(
        'default'           => $default['education_way_header_search_icon'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'education_way_header_search_icon',
    array(
        'type'               => 'checkbox',
        'label'              => esc_html__('Search Icon', 'education-way'),
        'description'        => esc_html__('Show/hide Search Icon.', 'education-way'),
        'section'            => 'education_way_top_header_info_section',
        'priority'           => 30
    )
);