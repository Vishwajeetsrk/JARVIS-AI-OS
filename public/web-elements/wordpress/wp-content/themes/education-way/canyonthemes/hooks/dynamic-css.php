<?php
/**
 * Dynamic css
 *
 * @package Canyon Themes
 * @subpackage Canyon
 *
 * @param null
 * @return void
 *
 */
if ( !function_exists('education_way_dynamic_css') ):
    function education_way_dynamic_css(){
    $education_way_primary_color         = esc_attr( education_way_get_option('education_way_primary_color') );

    /*====================Paragraph Typography=====================*/
    $education_way_paragraph_font_family_name   =  esc_attr( education_way_get_option('education_way_paragraph_font_family_name') );
    $education_way_paragraph_font_size          =  esc_attr( education_way_get_option('education_way_paragraph_font_size') );
    $education_way_paragraph_font_weight        =  esc_attr( education_way_get_option('education_way_paragraph_font_weight') );
    $education_way_paragraph_line_height   =  esc_attr( education_way_get_option('education_way_paragraph_line_height') );
    $education_way_paragraph_letter_spacing     =  esc_attr( education_way_get_option('education_way_paragraph_letter_spacing') );

               
    $custom_css    = '';
    
    /*====================Dynamic Css =====================*/
   /*==================== Paragraph Typography=====================*/
  $custom_css .= "body p, p, .meta-post li, .footer-bottom .copyright {
         font-family: "      . $education_way_paragraph_font_family_name . ";
         font-size: "        . $education_way_paragraph_font_size .'px'.";
         font-weight: "      . $education_way_paragraph_font_weight . ";
         line-height: "      . $education_way_paragraph_line_height.'em'.";
         letter-spacing: "   . $education_way_paragraph_letter_spacing.'px'.";
       }
    ";                         
$custom_css .= "a.btn .btn-default .btn-lg, .btn-default, .our-courses .button, .call-back .btn-default, input[type='text'] {
         font-family: " . $education_way_paragraph_font_family_name . ";}
    ";    
   
     $custom_css .= " .our-courses .is-checked, .our-courses .button:hover {
         color: " . $education_way_primary_color . ";}
    ";
    $custom_css .= ".social-icon-rounded li a:hover, .social-icon-rounded li a {
         background: " . $education_way_primary_color . ";
         border: 2px solid " . $education_way_primary_color . ";
         }
    ";
    $custom_css .= ".btn-default {
        border: 2px solid " . $education_way_primary_color . ";
    }
    ";
     $custom_css .= ".btn-default, .btn-default:hover, .btn-default:focus, .btn-default:active,
     .testimonial-option .swiper-pagination-bullet
     {
        border: 2px solid " . $education_way_primary_color . ";
    }
    ";
    $custom_css .= ".section-0-background,
     .btn-primary,
     hr,
     header .dropdown-menu > li > a:hover,
     .dropdown-menu > .active > a, 
     .dropdown-menu > .active > a:focus, 
     .dropdown-menu > .active > a:hover,
     button,  
     input[type='button'], 
     input[type='reset'], 
     input[type='submit'],
     .section-1-box-icon-background,
     #quote-carousel a.carousel-control,
     .section-10-background,
     .footer-top .submit-bgcolor,
     .section1 .border::before,
     .section1 .border::after,
     .portfolioFilter a.current,
     #section-12 .filter-box .lower-box a i,
     .section-2-box-left .border.left::before,
     .section-2-box-left .border::after,
     .comments-area .submit,
     .inner-title,.woocommerce span.onsale,
     .woocommerce nav.woocommerce-pagination ul li a:focus,
     .woocommerce nav.woocommerce-pagination ul li a:hover,
     .woocommerce nav.woocommerce-pagination ul li span.current,
     .woocommerce a.button, .woocommerce #respond input#submit.alt, 
     .search-toggle,
     .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .slider-content .btn-default, .welcome-content .btn-default
     ,.call-back .btn-default
      {
       background-color: " . $education_way_primary_color . ";}
    ";
    $custom_css .= "
    .section-4-box-icon-cont i,
    header .navbar-menu .navbar-nav > li > a:active,
    header .navbar-menu .navbar-nav>.open>a,
    header .navbar-menu .navbar-nav>.open>a:focus,
    header .navbar-menu .navbar-nav>.open>a:hover,
    .btn-seconday,
    a:visited,
    .menu-top-container ul li a:hover,
    .section-14-box h3 a:hover,
    .section-14-box .date span, 
    .section-14-box .author-post a,
    .btn-primary:hover,
    .widget ul li a:hover,
    .footer-top ul li a:hover,
    .section-0-btn-cont .btn:hover,
    .footer-top .widget_recent_entries ul li:hover:before,
    .footer-top .widget_nav_menu ul li:hover:before,
    .footer-top .widget_archive ul li:hover:before,
    .navbar-default .navbar-nav > .active > a, 
    .comments-area .comment-body .comment-metadata time,
    .navbar-default .navbar-nav > .active > a:focus, 
    .navbar-default .navbar-nav > .active > a:hover,
    .why-chose-box [class^='pe-7s-'], .why-chose-box [class*='pe-7s-'],
    .meta-post li .fa, .meta-post li a .fa,
    .comment-body .reply .comment-reply-link
    {
        color: " . $education_way_primary_color . ";}
    ";
    $custom_css .= ".section-14-box .underline,
   .item blockquote img,
   .btn-primary,
   .portfolioFilter a,
   .btn-primary:hover,
   button,  
   input[type='button'], 
   input[type='reset'], 
   input[type='submit'],
   .testimonials .content .avatar,
   #quote-carousel .carousel-control.left, 
   #quote-carousel .carousel-control.right,
   header .navbar-menu .navbar-right .dropdown-menu,
   .woocommerce nav.woocommerce-pagination ul li a:focus,
   .woocommerce nav.woocommerce-pagination ul li a:hover,
   .woocommerce nav.woocommerce-pagination ul li span.current
   .woocommerce a.button, .woocommerce #respond input#submit.alt, 
   .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt
   {
       border-color: " . $education_way_primary_color . ";}
    ";
    /*------------------------------------------------------------------------------------------------- */
    /*custom css*/
    wp_add_inline_style('education-way-style', $custom_css);
}
endif;
add_action('wp_enqueue_scripts', 'education_way_dynamic_css', 99);