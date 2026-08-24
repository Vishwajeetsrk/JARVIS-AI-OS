<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */

get_header();
 $education_way_designlayout      = get_post_meta(get_the_ID(), 'education_way_sidebar_layout', true  );

 /**
* Hook - education_way_breadcrumb_type.
*
* @hooked education_way_breadcrumb_type
*/
do_action( 'education_way_breadcrumb_trail' );
 ?>
    
    <!-- Start About Section -->
    <section class="bg-about">
        <div class="container">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-sm-<?php if ($education_way_designlayout == 'no-sidebar') {
                            echo "12";
                        } else {
                            echo "8";
                        } ?> col-md-<?php if ($education_way_designlayout == 'no-sidebar') {
                            echo "12";
                        } else {
                            echo "8";
                        } ?> left-block">
                    <?php
                    while (have_posts()) : the_post();

                        get_template_part('template-parts/content', 'page');

                        // If comments are open or we have at least one comment, load up the comment template.
                        if (comments_open() || get_comments_number()) :
                            comments_template();
                        endif;

                    endwhile; // End of the loop.
                    ?>
                </div><!-- div -->
                <?php

                 $nosidebar = 0;
              
                 $sidebardesignlayout   = esc_attr(education_way_get_option('education_way_sidebar_layout_option' ));

                if (($education_way_designlayout == 'default-sidebar'))
                {
                    $nosidebar = 1;
                }
              
                elseif( $sidebardesignlayout != 'no-sidebar'){
                    $nosidebar = 1;
                }

                if (($nosidebar == 1))
                {
                    ?>

                        <div class="col-md-4 col-sm-4">
                            <?php get_sidebar(); ?>
                        </div>
                    <?php } ?>
                </div><!-- div -->
            
        </div><!-- div -->
    </div>    
</section>

<?php get_footer();
