<?php
/**
 * Top Header Section Hide/Show  options
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return array $education_way_show_top_header_section_option
 *
 */
if (!function_exists('education_way_show_top_header_section_option')) :
    function education_way_show_top_header_section_option()
    {
        $education_way_show_top_header_section_option = array(
            'show' => esc_html__('Show', 'education-way'),
            'hide' => esc_html__('Hide', 'education-way')
        );
        return apply_filters('education_way_show_top_header_section_option', $education_way_show_top_header_section_option);
    }
endif;


/**
 * Show/Hide Feature Image  options
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return array $education_way_show_feature_image_option
 *
 */
if (!function_exists('education_way_show_feature_image_option')) :
    function education_way_show_feature_image_option()
    {
        $education_way_show_feature_image_option = array(
            'show' => esc_html__('Show', 'education-way'),
            'hide' => esc_html__('Hide', 'education-way')
        );
        return apply_filters('education_way_show_feature_image_option', $education_way_show_feature_image_option);
    }
endif;


/**
 * Slider  options
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return array $education_way_slider_option
 *
 */
if (!function_exists('education_way_slider_option')) :
    function education_way_slider_option()
    {
        $education_way_slider_option = array(
            'show' => esc_html__('Show', 'education-way'),
            'hide' => esc_html__('Hide', 'education-way')
        );
        return apply_filters('education_way_slider_option', $education_way_slider_option);
    }
endif;

/**
 * Sidebar layout options
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return array $education_way_sidebar_layout
 *
 */
if (!function_exists('education_way_sidebar_layout')) :
    function education_way_sidebar_layout()
    {
        $education_way_sidebar_layout = array(
            'right-sidebar'   => esc_html__('Right Sidebar', 'education-way'),
            'left-sidebar'    => esc_html__('Left Sidebar', 'education-way'),
            'no-sidebar'      => esc_html__('No Sidebar', 'education-way'),
        );
        return apply_filters('education_way_sidebar_layout', $education_way_sidebar_layout);
    }
endif;

/**
 * Blog/Archive Description Option
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return array $education_way_blog_excerpt
 *
 */
if ( !function_exists( 'education_way_blog_excerpt' ) ) :
    
    function education_way_blog_excerpt()
    
    {
        $education_way_blog_excerpt = array(
            'excerpt' => esc_html__('Excerpt', 'education-way'),
            'content' => esc_html__('Content', 'education-way'),

        );
        return apply_filters('education_way_blog_excerpt', $education_way_blog_excerpt);
    }
endif;

/**
 * Header Search Option
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return array $education_way_header_search
 *
 */
if ( !function_exists( 'education_way_header_search' ) ) :
    
    function education_way_header_search()
    
    {
        $education_way_header_search = array(
            'show' => esc_html__('Show Search', 'education-way'),
            'hide' => esc_html__('Hide Search', 'education-way'),

        );
        return apply_filters('education_way_header_search', $education_way_header_search);
    }
endif;

/**
 * Pagination Options for Blog Page. 
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return array $education_way_header_search
 *
 */
if ( !function_exists( 'education_way_pagination_types' ) ) :
    
    function education_way_pagination_types()
    
    {
        $education_way_pagination_types = array(
            'default' => esc_html__('Default', 'education-way'),
            'numeric' => esc_html__('Numeric', 'education-way'),

        );
        return apply_filters('education_way_pagination_types', $education_way_pagination_types);
    }
endif;

/**
 * Breadcrumb  display option options
 *
 * @since Quality Construction 1.0.0
 *
 * @param null
 * @return array $education_way_show_breadcrumb_option
 *
 */
if (!function_exists('education_way_show_breadcrumb_option')) :
    function education_way_show_breadcrumb_option()
    {
        $education_way_show_breadcrumb_option = array(
            'simple'    => esc_html__( 'Theme Default','education-way'),
            'disable'   => esc_html__( 'Disable','education-way')
        );
        return apply_filters('education_way_show_breadcrumb_option', $education_way_show_breadcrumb_option);
    }
endif;
