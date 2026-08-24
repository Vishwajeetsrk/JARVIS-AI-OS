<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
get_header();
$education_way_designlayout      = education_way_get_option( 'education_way_sidebar_layout_option' );
 ?>
    <!-- Start Page Header Section -->
    <section class="bg-page-header">
        <div class="page-header-overlay">
            <div class="container">
                <div class="row">
                    <div class="page-header">
                        <div class="page-title">
                            <h2><?php printf(esc_html__('Search Results for: %s', 'education-way'), '<span>' . get_search_query() . '</span>'); ?></h2>
                        </div><!-- .page-title -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Page Header Section -->

    <section class="content-wrapper">
        <div class="container">
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
                    if (have_posts()) : ?>

                        <?php
                        /* Start the Loop */
                        while (have_posts()) : the_post();

                            /**
                             * Run the loop for the search to output the results.
                             * If you want to overload this in a child theme then include a file
                             * called content-search.php and that will be used instead.
                             */
                            get_template_part('template-parts/content', 'search');

                        endwhile;

                        the_posts_navigation();

                    else :

                        get_template_part('template-parts/content', 'none');

                    endif; ?>

                </div><!-- div -->
                <?php if ($education_way_designlayout != 'no-sidebar') { ?>
               
                    <div class="col-md-4">
                        <?php get_sidebar(); ?>
               
                    </div>
               
                <?php } ?>
            </div><!-- div -->
        </div>
    </section>

<?php get_footer();
