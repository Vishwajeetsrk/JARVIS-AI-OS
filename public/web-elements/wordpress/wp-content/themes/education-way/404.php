<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
get_header();
 ?>
    <!-- Start Page Header Section -->
    <section class="bg-page-header">
        <div class="page-header-overlay">
            <div class="container">
                <div class="row">
                    <div class="page-header">
                        <div class="page-title">
                            <h2><?php esc_html_e('404 PAGE NOT FOUND', 'education-way'); ?></h2>
                        </div><!-- .page-title -->
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Page Header Section -->
    <section  class="page-404">
        <div class="container">
            <div class="page-error-option">
                <h2 class="page-title"><span><?php esc_html_e( 'Oops,', 'education-way' ); ?></span><?php esc_html_e( ' This Page Not Be Found!', 'education-way' ); ?></h2>
                <p>
                    <?php esc_html_e('We are really sorry but the page you requested is missing..', 'education-way'); ?>
                </p>
                <a class="btn btn-default" href="<?php echo esc_url( home_url( '/' ) ); ?>"> <?php esc_html_e( 'Back to Home', 'education-way' ); ?></a>
            </div><!-- .page-content -->  
        </div>
    </section>
<?php get_footer();