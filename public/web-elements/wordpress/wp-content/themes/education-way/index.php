<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
get_header();

$blog_page_title  = education_way_get_option('education_way_blog_title_option');
$education_way_designlayout      = education_way_get_option('education_way_sidebar_layout_option');
?>
    <!-- Start Page Header Section -->
    <section class="bg-page-header">
        <div class="page-header-overlay">
            <div class="container">
                <div class="row">
                    <div class="page-header">
                        <div class="page-title">
                            <h2><?php echo esc_html( $blog_page_title ); ?></h2>
                        </div><!-- .page-title -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Page Header Section -->
   
    <section class="blog-section">
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
                        if (have_posts()) :
                            /* Start the Loop */
                            while (have_posts()) : the_post();
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
                            do_action('education_way_action_navigation');

                        else :

                            get_template_part('template-parts/content', 'none');

                        endif; ?>

                    </div><!--div -->
                    <?php if ($education_way_designlayout != 'no-sidebar') { ?>
                        <div class="col-md-4 col-sm-4">
                            <?php get_sidebar(); ?>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div><!-- div -->
    </section>

<?php get_footer();
