<?php 
/*-------------------------------------------------------------------------------------------*/
/**
 * Theme Option
 *
 * @since 1.0.0
 */
$wp_customize->add_panel(
    'education_way_single_page_options',
    array(
        'priority'       => 50,
        'capability'     => 'edit_theme_options',
        'theme_supports' => '',
        'title'          => esc_html__('Single Page & Post Options', 'education-way'),
    )
);

/**
 * Single Post Options
 *
 */
$wp_customize->add_section(
    'education_way_single_post_page_section',
    array(
        'title'    => esc_html__('Single Post Options', 'education-way'),
        'panel'    => 'education_way_single_page_options',
        'priority' => 7,
    )
);


/**
 * Feature Image Option Single Post
 */
$wp_customize->add_setting(
    'education_way_show_feature_image_single_option',
    array(
        'default'           => $default['education_way_show_feature_image_single_option'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'education_way_show_feature_image_single_option',
    array(
        'type'     => 'checkbox',
        'label'    => esc_html__('Hide Feature Image', 'education-way'),
        'section'  => 'education_way_single_post_page_section',
        'priority' => 5
    )
);

/**
 * Meta Options for Single Post
 */
$wp_customize->add_setting(
    'education_way_meta_fields_single_option',
    array(
        'default'           => $default['education_way_meta_fields_single_option'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'education_way_meta_fields_single_option',
    array(
        'type'     => 'checkbox',
        'label'    => esc_html__('Hide Meta Fields', 'education-way'),
        'section'  => 'education_way_single_post_page_section',
        'priority' => 6
    )
);

/**
 * Single Page Options
 *
 */
$wp_customize->add_section(
    'education_way_single_page_section',
    array(
        'title'    => esc_html__('Single Page Options', 'education-way'),
        'panel'    => 'education_way_single_page_options',
        'priority' => 7,
    )
);

/**
 * Feature Image Option Single Page
 */
$wp_customize->add_setting(
    'education_way_show_feature_image_single_page',
    array(
        'default'           => $default['education_way_show_feature_image_single_page'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'education_way_show_feature_image_single_page',
    array(
        'type'     => 'checkbox',
        'label'    => esc_html__('Hide Feature Image ', 'education-way'),
        'section'  => 'education_way_single_page_section',
        'priority' => 5
    )
);

/* ========================
* Related Post Section 
===========================*/
$wp_customize->add_section(
    'education_way_single_related_post_section',
    array(
        'title'    => esc_html__('Related Post Options', 'education-way'),
        'panel'    => 'education_way_single_page_options',
        'priority' => 7,
    )
);

/**
 * Show Hide Related Post In Single Post 
*/
$wp_customize->add_setting(
    'education_way_related_post_show_hide',
    array(
        'default'           => $default['education_way_related_post_show_hide'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);

$wp_customize->add_control(
    'education_way_related_post_show_hide',
    array(
        'type'     => 'checkbox',
        'label'    => esc_html__('Show Related Post ', 'education-way'),
        'section'  => 'education_way_single_related_post_section',
        'priority' => 10
    )
);