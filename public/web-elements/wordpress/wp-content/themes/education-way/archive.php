<?php
/**
 * The template for displaying archive pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
get_header(); 
$education_way_designlayout = education_way_get_option( 'education_way_sidebar_layout_option' );
/**
* Hook - education_way.
*
* @hooked education_way
*/
do_action( 'education_way_breadcrumb_trail' );
?>
<!-- Start Single Events Section -->
    <section class="blog-section">
        <div class="container">
            <div class="row">
                <div class="content-wrapper">
                    <div class="row">
                       <div class="col-sm-<?php if ($education_way_designlayout == 'no-sidebar') {
                            echo "12";
                        } else {
                            echo "8";
                        } ?> left-block">
                    <?php
                  
                    if ( have_posts() ) :
                        /* Start the Loop */
                     
                        while ( have_posts() ) : the_post();

                            /*
                             * Include the Post-Format-specific template for the content.
                             * If you want to override this in a child theme, then include a file
                             * called content-___.php (where ___ is the Post Format name) and that will be used instead.
                             */
                            get_template_part('template-parts/content', get_post_format());

                        endwhile;

                        /*
                        * Pagination Hooks for Default and Numeric Pagination
                        */
                       ?>
                        <div class="pagination-option">
                            <nav aria-label="Page navigation">
                                
                                    <?php do_action('education_way_action_navigation'); ?>
                               
                            </nav>    
                        </div>    
                 <?php   else :

                        get_template_part('template-parts/content', 'none');

                    endif; ?>

                </div><!--div -->
               
                <?php if ( $education_way_designlayout != 'no-sidebar' ) { ?>
                  
                    <div class="col-md-4 col-sm-4">

                        <?php get_sidebar(); ?>

                    </div>

                <?php } ?>
           
            </div>
        
          </div><!-- div -->

       </div>
        
    </div><!-- div -->  
</section>
<?php get_footer();