<?php
/**
 * Theme Option
 *
 * @since 1.0.0
 */
$wp_customize->add_panel(
    'education_way_theme_options',
    array(
        'priority'       => 50,
        'capability'     => 'edit_theme_options',
        'theme_supports' => '',
        'title'          => esc_html__('Theme Option', 'education-way'),
    )
);
/*-------------------------------------------------------------------------------------------*/
/**
 * Hide Static page in Home page
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'education_way_front_page_option',
    array(
        'title'    => esc_html__('Front Page Options', 'education-way'),
        'panel'    => 'education_way_theme_options',
        'priority' => 3,
    )
);

/**
 *   Show/Hide Static page/Posts in Home page
 */
$wp_customize->add_setting(
    'education_way_front_page_hide_option',
    array(
        'default'           => $default['education_way_front_page_hide_option'],
        'sanitize_callback' => 'education_way_sanitize_checkbox',
    )
);

$wp_customize->add_control('education_way_front_page_hide_option',
    array(
        'label'    => esc_html__('Hide Blog Posts or Static Page on Front Page', 'education-way'),
        'section'  => 'education_way_front_page_option',
        'type'     => 'checkbox',
        'priority' => 10
    )
);


/*-------------------------------------------------------------------------------------------*/
/**
 * Breadcrumb Options
 *
 * @since 1.0.0
 */

$wp_customize->add_section(
    'education_way_breadcrumb_option',
    array(
        'title'    => esc_html__('Breadcrumb Options', 'education-way'),
        'panel'    => 'education_way_theme_options',
        'priority' => 2,
    )
);

/*-------------------------------------------------------------------------------------------*/
/**
 * Search Placeholder
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'education_way_search_option',
    array(
        'title'     => esc_html__('Search', 'education-way'),
        'panel'     => 'education_way_theme_options',
        'priority'  => 8,
    )
);

/**
 *Search Placeholder
 */
$wp_customize->add_setting(
    'education_way_post_search_placeholder_option',
    array(
        'default'           => $default['education_way_post_search_placeholder_option'],
        'sanitize_callback' => 'sanitize_text_field',

    )
);

$wp_customize->add_control('education_way_post_search_placeholder_option',
    array(
        'label'    => esc_html__('Search Placeholder', 'education-way'),
        'section'  => 'education_way_search_option',
        'type'     => 'text',
        'priority' => 10
    )
);

 /*-------------------------------------------------------------------------------------------*/
    /**
     * Breadcrumb Options
     *
     * @since 1.0.0
     */
    $wp_customize->add_section(
        'education_way_breadcrumb_option',
        array(
                'title' => esc_html__('Breadcrumb Options', 'education-way'),
                'panel' => 'education_way_theme_options',
                'priority' => 6,
             )
    );

    /**
     * Breadcrumb Option
     */
    $wp_customize->add_setting(
        'education_way_breadcrumb_setting_option',
        array(
                'default' => $default['education_way_breadcrumb_setting_option'],
                'sanitize_callback' => 'education_way_sanitize_select',

             )
    );

    
    $hide_show_breadcrumb_option = education_way_show_breadcrumb_option();
    $wp_customize->add_control('education_way_breadcrumb_setting_option',
        array(
                'label' => esc_html__('Breadcrumb Options', 'education-way'),
                'section' => 'education_way_breadcrumb_option',
                'choices' => $hide_show_breadcrumb_option,
                'type' => 'select',
                'priority' => 10
              )
    );


    /**
     *   Show/Hide Breadcrumb in Home page
     */
    $wp_customize->add_setting(
        'education_way_hide_breadcrumb_front_page_option',
        array(
                'default' => $default['education_way_hide_breadcrumb_front_page_option'],
                'sanitize_callback' => 'education_way_sanitize_checkbox',
             )
    );
    $wp_customize->add_control('education_way_hide_breadcrumb_front_page_option',
        array(
                'label' => esc_html__('Show/Hide Breadcrumb in Home page', 'education-way'),
                'section' => 'education_way_breadcrumb_option',
                'type' => 'checkbox',
                'priority' => 10
             )
    );