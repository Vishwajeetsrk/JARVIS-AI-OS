<?php

/*-------------------------------------------------------------------------------------------*/
/**
 * Sidebar Option
 *
 */
$wp_customize->add_section(
    'education_way_default_sidebar_layout_option',
    array(
        'title'    => esc_html__('Default Sidebar Layout Option', 'education-way'),
        'panel'    => 'education_way_theme_options',
        'priority' => 5,
    )
);

/**
 * Sidebar Option
 */
$wp_customize->add_setting(
    'education_way_sidebar_layout_option',
    array(
        'default'           => $default['education_way_sidebar_layout_option'],
        'sanitize_callback' => 'education_way_sanitize_select',
    )
);


$layout = education_way_sidebar_layout();
$wp_customize->add_control('education_way_sidebar_layout_option',
    array(
        'label'       => esc_html__('Default Sidebar Layout', 'education-way'),
        'description' => esc_html__('Home/front page does not have sidebar. Inner pages like blog, archive single page/post Sidebar Layout. However single page/post sidebar can be overridden.', 'education-way'),
        'section'     => 'education_way_default_sidebar_layout_option',
        'type'        => 'select',
        'choices'     => $layout,
        'priority'    => 10
    )
);


/*-------------------------------------------------------------------------------------------*/

/**
 * Blog/Archive Layout Option
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'education_way_blog_archive_layout_option',
    array(
        'title'    => esc_html__('Blog/Archive Layout Option', 'education-way'),
        'panel'    => 'education_way_theme_options',
        'priority' => 6,
    )
);

/**
 * Blog Page Title
 */
$wp_customize->add_setting(
    'education_way_blog_title_option',
    array(
        'default'           => $default['education_way_blog_title_option'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);

$wp_customize->add_control('education_way_blog_title_option',
    array(
        'label'    => esc_html__('Blog Page Title', 'education-way'),
        'section'  => 'education_way_blog_archive_layout_option',
        'type'     => 'text',
        'priority' => 11
    )
);

/**
 * Exclude Categories In Blog/Archive Pages
 */
$wp_customize->add_setting(
    'education_way_exclude_cat_blog_archive_option',
    array(
        'default'           => $default['education_way_exclude_cat_blog_archive_option'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control('education_way_exclude_cat_blog_archive_option',
    array(
        'label'        => esc_html__('Exclude Categories In Blog Page', 'education-way'),
        'description'  => esc_html__('Enter categories ids with comma separated eg: 2,7,14,47. For including all categories left blank', 'education-way'),
        'section'      => 'education_way_blog_archive_layout_option',
        'type'         => 'text',
        'priority'     => 13
    )
);


/**
 * Read More Text
 */
$wp_customize->add_setting(
    'education_way_read_more_text_blog_archive_option',
    array(
        'default'           => $default['education_way_read_more_text_blog_archive_option'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control('education_way_read_more_text_blog_archive_option',
    array(
        'label'    => esc_html__('Read More Text', 'education-way'),
        'section'  => 'education_way_blog_archive_layout_option',
        'type'     => 'text',
        'priority' => 14
    )
);

/**
 * Featured Image
 */
$wp_customize->add_setting(
    'education_way_featured_image_blog_page',
    array(
        'default'           => $default['education_way_featured_image_blog_page'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);
$wp_customize->add_control('education_way_featured_image_blog_page',
    array(
        'label'    => esc_html__('Hide/Show Featured Image in Blog Page', 'education-way'),
        'section'  => 'education_way_blog_archive_layout_option',
        'type'     => 'checkbox',
        'priority' => 14
    )
);

/**
 * Hide Meta 
 */
$wp_customize->add_setting(
    'education_way_meta_options_blog_page',
    array(
        'default'           => $default['education_way_meta_options_blog_page'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);
$wp_customize->add_control('education_way_meta_options_blog_page',
    array(
        'label'    => esc_html__('Hide/Show Meta Fields', 'education-way'),
        'section'  => 'education_way_blog_archive_layout_option',
        'type'     => 'checkbox',
        'priority' => 14
    )
);

/**
 * Pagination Types
 */
$pagination_types = education_way_pagination_types();
$wp_customize->add_setting(
    'education_way_blog_pagination_types',
    array(
        'default'           => $default['education_way_blog_pagination_types'],
        'sanitize_callback' => 'education_way_sanitize_select',
    )
);
$wp_customize->add_control('education_way_blog_pagination_types',
    array(
        'label'    => esc_html__('Select Required Pagination Type', 'education-way'),
        'section'  => 'education_way_blog_archive_layout_option',
        'type'     => 'select',
        'choices'  => $pagination_types,
        'priority' => 14
    )
);