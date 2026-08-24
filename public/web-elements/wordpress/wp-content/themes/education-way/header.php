<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the 
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
// Custom image.

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <!-- Start Pre-Loader-->
    <div class="preloader">
      <div class="loader">&nbsp;</div>
    </div>
    <!-- End Pre-Loader -->  
    
    <!-- Start Header Section -->
    <header class="header">
     <?php
        $section_option = education_way_get_option('education_way_top_header_section');
       if ($section_option =='show') {
            $mobile_icon  = education_way_get_option('education_way_top_header_section_phone_number_icon');
            $mobile_value = education_way_get_option('education_way_top_header_phone_no'); 
            $email_icon   = education_way_get_option('education_way_email_icon');
            $email_value  = education_way_get_option('education_way_top_header_email');    	
      ?>
        <!-- Start Header Top -->
        <div class="bg-header-top">
            <div class="container">
                <div class="row">
                    <div class="header-top">
                        <ul class="header-contact">
                            <li><i class="fa <?php echo esc_attr( $mobile_icon ); ?> "></i> <?php echo esc_html( $mobile_value ); ?></li>
                            <li><i class="fa <?php echo esc_attr( $email_icon ); ?> "></i> <?php echo esc_html( $email_value ); ?> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
        <!-- End Header Top -->

        <!-- Start Menu -->
        <div class="bg-main-menu menu-scroll">
            <div class="container">
                <div class="row">
                    <div class="main-menu">
                        <nav class="navbar">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span class="sr-only"><?php echo esc_html__('Toggle navigation','education-way') ?></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <?php
                                if (has_custom_logo()) { ?>
                                    <a class="navbar-brand" href="<?php echo esc_url(home_url('/')); ?>">
                                        <?php the_custom_logo(); ?>
                                    </a>
                                <?php } else 

                                  {
                                    if (is_front_page() && is_home()) : ?>
                                        <h1 class="site-title">
                                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
                                        </h1>
                                    <?php else : ?>
                                  
                                        <p class="site-title">
                                            <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
                                        </p>
                                  
                                        <?php
                                  
                                    endif;
                                  
                                    $description = get_bloginfo('description', 'display');
                                  
                                    if ($description || is_customize_preview()) : ?>
                                        <p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
                                        <?php
                                    endif;
                                } 
                                ?>
                            </div>
                            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <?php
                                $search = education_way_get_option('education_way_header_search_icon');   
                                
                                if(  $search == 1 )
                                {
                                ?>
                               
                                <div class="menu-right-option pull-right">
                                    <div class="search-box">
                                        <i class="fa fa-search first_click" aria-hidden="true" style="display: block;"></i>
                                        <i class="fa fa-times second_click" aria-hidden="true" style="display: none;"></i>
                                    </div>
                                    <div class="search-box-text">
                                        <form action="<?php echo esc_url( home_url() )?>" id="searchform">
                                            <input type="text" name="s"  id="all-search" placeholder="Search Here" value="<?php echo get_search_query();?>">
                                        </form>
                                    </div>
                                </div>
                            <?php }

                                if (has_nav_menu('primary')) {
                                    wp_nav_menu(array(
                                                'theme_location'  => 'primary',
                                                'depth'           => 4,
                                                'menu_class'      => 'nav navbar-nav pull-right',
                                                
                                            )
                                        );
                                    }
                                    
                                 ?>        
                            </div>
                        </nav>
                    </div><!-- .main-menu -->
                </div><!-- .row -->
            </div><!-- .container -->
        </div>
        <!-- End Menu -->
    </header>
    <!-- End Header Section -->

     <?php 
        // Custom image.
        global $header_image, $header_style;
        $header_image = get_header_image();
     
        if( $header_image ){
            $header_style = 'style="background-image: url('.esc_url( $header_image ).');background-size: cover;"';                 

        } else{

            $header_style = '';
        }

        ?>

   