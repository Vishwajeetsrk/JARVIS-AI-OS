<?php
/**
 * Typography Options
 *
 * @since 1.0.0
 */
$wp_customize->add_panel(
    'education_way_typography_options',
    array(
        'priority'       => 50,
        'capability'     => 'edit_theme_options',
        'theme_supports' => '',
        'title'          => esc_html__('Typography Option', 'education-way'),
    )
);

/**
 * Paragraph Font Family
 *
 * @since 1.0.0
 */
$wp_customize->add_section(
    'education_way_paragraph_typography_option',
    array(
        'title'    => esc_html__('Paragraph Font Options', 'education-way'),
        'panel'    => 'education_way_typography_options',
        'priority' => 3,
    )
);

/**
 * Paragraph Font Family 
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_paragraph_font_family_url',
    array(
        'default'           => $default['education_way_paragraph_font_family_url'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'education_way_paragraph_font_family_url',
    array(
        'type'        => 'text',
        'label'       => esc_html__('Paragraph Font Family URL ', 'education-way'),
        'description' => sprintf('%1$s <a href="%2$s" target="_blank">%3$s</a> %4$s',
        __( 'Insert', 'education-way' ),
        esc_url('https://www.google.com/fonts'),
        __('Google Font URL' , 'education-way'),
        __('for embed fonts.' ,'education-way')
        ),
        'section'  => 'education_way_paragraph_typography_option',
        'priority' => 30
    )
);

/**
 * Paragraph Font Family Name
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_paragraph_font_family_name',
    array(
        'default'           => $default['education_way_paragraph_font_family_name'],
        'sanitize_callback' => 'sanitize_text_field',
    )
);
$wp_customize->add_control(
    'education_way_paragraph_font_family_name',
    array(
        'type'     => 'text',
        'label'    => esc_html__('Paragraph Font Family Name ', 'education-way'),
        'description'    => esc_html__('Add Font Family Name For Paragraphs, Example: Source Sans Pro, sans-serif', 'education-way'),
        'section'  => 'education_way_paragraph_typography_option',
        'priority' => 30
    )
);

/**
 * Paragraph font size
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_paragraph_font_size',
    array(
        'default'           => $default['education_way_paragraph_font_size'],
        'sanitize_callback' => 'education_way_sanitize_number',
    )
);
$wp_customize->add_control(
    'education_way_paragraph_font_size',
    array(
        'type'    => 'number',
        'label'    => esc_html__('Paragraph Font Size ', 'education-way'),
        'description'    => esc_html__('Enter Font Size', 'education-way'),
        'section'  => 'education_way_paragraph_typography_option',
        'input_attrs' => array(
                        'min' => '8',
                        'max' => '16',
                        'step' => '1',
                ),
        'priority' => 30
    )
);

/**
 * Paragraph Font Weight
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_paragraph_font_weight',
    array(
        'default'           => $default['education_way_paragraph_font_weight'],
        'sanitize_callback' => 'education_way_sanitize_number',
    )
);
$wp_customize->add_control(
    'education_way_paragraph_font_weight',
    array(
        'type'     => 'number',
        'label'    => esc_html__('Paragraph Font Weight ', 'education-way'),
        'description'    => esc_html__('Enter Font Weight Value', 'education-way'),
        'section'  => 'education_way_paragraph_typography_option',
        'priority' => 30
    )
);

/**
 * Paragraph Line Height
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_paragraph_line_height',
    array(
        'default'           => $default['education_way_paragraph_line_height'],
        'sanitize_callback' => 'education_way_sanitize_floatnumber',
    )
);
$wp_customize->add_control(
    'education_way_paragraph_line_height',
    array(
        'type'    => 'number',
        'label'    => esc_html__('Paragraph Line Height ', 'education-way'),
        'description'    => esc_html__('Enter Line Height', 'education-way'),
        'section'  => 'education_way_paragraph_typography_option',
        'input_attrs' => array(
                        'min' => '0',
                        'max' => '4',
                        'step' => '0.1',
                ),
        'priority' => 30
    )
);

/**
 * Letter Spacing
 *
 * @since 1.0.0
 */
$wp_customize->add_setting(
    'education_way_paragraph_letter_spacing',
    array(
        'default'           => $default['education_way_paragraph_letter_spacing'],
        'sanitize_callback' => 'education_way_sanitize_number',
    )
);
$wp_customize->add_control(
    'education_way_paragraph_letter_spacing',
    array(
        'type'    => 'number',
        'label'    => esc_html__('Paragraph Letter Spacing', 'education-way'),
        'description'    => esc_html__('Enter Letter Spacing', 'education-way'),
        'section'  => 'education_way_paragraph_typography_option',
        'input_attrs' => array(
                        'min' => '-20',
                        'max' => '4',
                        'step' => '1',
                ),
        'priority' => 30
    )
);