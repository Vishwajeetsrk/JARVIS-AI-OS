<?php
/**
 * Canyon default theme options.
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */

if ( !function_exists('education_way_get_default_theme_options' ) ) :

    /**
     * Get default theme options.
     *
     * @since 1.0.0
     *
     * @return array Default theme options.
     */
    function education_way_get_default_theme_options()
    {

        $default = array();

        // Homepage Slider Section
        $default['education_way_homepage_slider_option']               = 'hide';

        // footer copyright.
        $default['education_way_copyright']                            = esc_html__('Copyright All Rights Reserved', 'education-way');
        $default['education_way_footer_go_to_top']                     = 1;
                                                    
        // Home Page Top header Info.
        $default['education_way_top_header_section']                   = 'hide';
        $default['education_way_top_header_section_phone_number_icon'] = 'fa-phone';
        $default['education_way_top_header_phone_no']                  = '';
        $default['education_way_email_icon']                           = 'fa-envelope-o';
        $default['education_way_top_header_email']                     = '';
		
        // Blog.
        $default['education_way_sidebar_layout_option']                = 'right-sidebar';
        $default['education_way_blog_title_option']                    = esc_html__('Latest Blog', 'education-way');
        $default['education_way_exclude_cat_blog_archive_option']      = '';
        $default['education_way_read_more_text_blog_archive_option']   = esc_html__('Read More', 'education-way');
        $default['education_way_featured_image_blog_page']             = 0;
        $default['education_way_meta_options_blog_page']               = 0;
        $default['education_way_blog_pagination_types']                = 'default';
        $default['education_way_breadcrumb_setting_option']            = 'simple';
        $default['education_way_hide_breadcrumb_front_page_option']    = 0;
        $default['education_way_columns_option']                       = 'large-image';
     
        // Details page.
        $default['education_way_show_feature_image_single_option']     = 0;
        $default['education_way_meta_fields_single_option']            = 0;
        $default['education_way_show_feature_image_single_page']       = 0; 

        //Related Posts
        $default['education_way_related_post_show_hide']              = 0;
        
        // Color Option.
        $default['education_way_primary_color']                        = '#ec5538';
                                                 
        //extra options
        $default['education_way_front_page_hide_option']               = 0;
        $default['education_way_post_search_placeholder_option']       = esc_html__('Search', 'education-way');
        $default['education_way_slider_option']                        = '';
        $default['education_way_header_cart_icon']                     = 0;
        $default['education_way_header_search_icon']                   = 1;

        //Typography Options
        //Paragraph Font Options
        $default['education_way_paragraph_font_family_url'] = esc_url('https://fonts.googleapis.com/css?family=Poppins','education-way');
        $default['education_way_paragraph_font_family_name'] = esc_html__('Poppins, sans-serif','education-way');
        $default['education_way_paragraph_font_weight'] = 400;
        $default['education_way_paragraph_line_height'] = 1.8;
        $default['education_way_paragraph_font_size'] = 15;
        $default['education_way_paragraph_letter_spacing'] = 1;

        //Disable Animation 
        $default['education_way_animation_disable_option'] = 0;


        // Pass through filter.
        $default                                               = apply_filters( 'education_way_get_default_theme_options', $default );
        return $default;
    }
endif;
