<?php
/**
 * Slider Section
 *
 */
$wp_customize->add_section(
    'education_way_slider_section',
    array(
        'title'     => esc_html__('Slider Setting Option', 'education-way'),
        'panel'     => 'education_way_theme_options',
        'priority'  => 4,
    )
);
/**
 * Homepage Slider Repeater Section
 *
 */
$slider_pages = array();
$slider_pages_obj = get_pages();
$slider_pages[''] = esc_html__('Select Page For Slider','education-way');
foreach ($slider_pages_obj as $page) {
    $slider_pages[$page->ID] = $page->post_title;
}
$wp_customize->add_setting( 
    'education_way_slider_option', 
    array(
    'sanitize_callback' => 'education_way_sanitize_slider_data',
    'default'           => $default['education_way_slider_option']
) );
$wp_customize->add_control(
    new PT_Repeater_Control(
        $wp_customize,
        'education_way_slider_option',
        array(
            'label'                      => __('Slider Page Selection Section','education-way'),
            'description'                => __('Select Page For Slider Having Featured Image. You can drag to reposition the slider items','education-way'),
            'section'                    => 'education_way_slider_section',
            'settings'                   => 'education_way_slider_option',
            'repeater_main_label'        => __('Select Page For Slider ','education-way'),
            'repeater_add_control_field' => __('Add New Slide','education-way')
        ),
        array(
            'selectpage'                 => array(
            'type'                       => 'select',
            'label'                      => __( 'Select Page For Slide', 'education-way' ),
            'options'                    => $slider_pages
            ),
            'button_text'                => array(
            'type'                       => 'text',
            'label'                      => __( 'Button Text', 'education-way' ),
            ),
            'button_link'                => array(
            'type'                       => 'url',
            'label'                      => __( 'Button Link', 'education-way' ),
            ),
            'optional_button_text'       => array(
            'type'                       => 'text',
            'label'                      => __( 'Secondary Button Text', 'education-way' ),
            ),
            'optional_button_link'       => array(
            'type'                       => 'url',
            'label'                      => __( 'Secondary Button Link', 'education-way' ),
            ),
        )
    )
);

/**
 * Homepage Slider Section Show
 *
 */
$wp_customize->add_setting(
    'education_way_homepage_slider_option',
    array(
        'default'           => $default['education_way_homepage_slider_option'],
        'sanitize_callback' => 'education_way_sanitize_select',
    )
);
$hide_show_option = education_way_slider_option();
$wp_customize->add_control(
    'education_way_homepage_slider_option',
    array(
        'type'        => 'radio',
        'label'       => esc_html__('Slider Option', 'education-way'),
        'description' => esc_html__('Show/hide option for homepage Slider Section.', 'education-way'),
        'section'     => 'education_way_slider_section',
        'choices'     => $hide_show_option,
        'priority'    => 7
    )
);