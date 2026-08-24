<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
get_header();
$education_way_designlayout = get_post_meta(get_the_ID(), 'education_way_sidebar_layout', true  ); 

/**
* Hook - education_way_type.
*
* @hooked education_way_breadcrumb_type
*/
do_action( 'education_way_breadcrumb_trail' );

?> 
<!-- Start Single blog Section -->
<section class="single-blog-section"> 
    <div class="container">
        <div class="single-blog">
            <div class="row">
               <div class="col-sm-<?php if ( $education_way_designlayout == 'no-sidebar') {
                echo "12";
                } else {
                    echo "8";
                    } ?> col-md-<?php if ( $education_way_designlayout == 'no-sidebar' ) {
                        echo "12";
                        } else {
                            echo "8";
                        } ?> left-block">

                        <?php
                        while (have_posts()) : the_post();

                            get_template_part('template-parts/content', 'single');
                            
                            echo '<div class="entry-box">';
                        
                                /**
                                 * education_way_post_navigation_action hook
                                 * @since Canyon 1.0.0
                                 *
                                 * @hooked education_way_post_navigation_action -  10
                                 */
                                do_action( 'education_way_post_navigation' ,get_the_ID() );

                                echo '<div class="comment-form-container">';

                                /**
                                 * education_way_related_posts hook
                                 * @since Canyon 1.0.0
                                 *
                                 * @hooked education_way_related_posts -  10
                                 */
                                do_action( 'education_way_related_post_action' ,get_the_ID() );
                                
                                // If comments are open or we have at least one comment, load up the comment template.
                                if (comments_open() || get_comments_number()) :
                                    comments_template();
                            endif;

                            echo '</div>';
                            echo '</div>';
                        endwhile; // End of the loop.
                        ?>
                    </div>
                    <?php
                    $sidebardesignlayout = esc_attr(education_way_get_option( 'education_way_sidebar_layout_option' ) );

                    if ( $sidebardesignlayout != 'no-sidebar') { ?>

                        <div class="col-md-4 col-sm-4">

                            <?php get_sidebar(); ?>

                        </div>

                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
    <?php
    get_footer(); ?>
