<?php
/**
 * enqueue Script for admin dashboard.
 */

if (!function_exists('education_way_widgets_backend_enqueue')) :
    function education_way_widgets_backend_enqueue($hook)
    {
    if ('widgets.php' != $hook) {
            return;
        }

        wp_enqueue_style('education-way-pt-admin', get_template_directory_uri() . '/assets/css/ct-admin-css.css', array(), '2.0.0');  

         wp_register_script('education-way-custom-widgets', get_template_directory_uri() . '/assets/js/widgets.js', array('jquery'), true);
        wp_enqueue_media();
        wp_enqueue_script('education-way-custom-widgets');
    }

    add_action('admin_enqueue_scripts', 'education_way_widgets_backend_enqueue');
endif;


/**
 * Sanitize Multiple Category
 * =====================================
 */

if ( !function_exists('education_way_sanitize_multiple_category') ) :

function education_way_sanitize_multiple_category( $values ) {

    $multi_values = !is_array( $values ) ? explode( ',', $values ) : $values;

    return !empty( $multi_values ) ? array_map( 'sanitize_text_field', $multi_values ) : array();
}

endif;


/**
 * enqueue Admins style for admin dashboard.
 */

if ( !function_exists( 'education_way_admin_css_enqueue' ) ) :
    
    function education_way_admin_css_enqueue($hook)
    
    {
        if ( 'post.php' != $hook ) {
            return;
        }
        wp_enqueue_style('education-way-admin', get_template_directory_uri() . '/assets/css/admin.css', array(), '2.0.0');

        wp_register_script('education-way-page-builder-widgets', get_template_directory_uri() . '/assets/js/page-builder-widgets.js', array('jquery'), true);
        wp_enqueue_media();
        wp_enqueue_script('education-way-page-builder-widgets');

        
         }
    add_action('admin_enqueue_scripts', 'education_way_admin_css_enqueue');
endif;


if ( !function_exists( 'education_way_admin_css_enqueue_new_post')) :
    
    function education_way_admin_css_enqueue_new_post( $hook )
    
    {
        if ( 'post-new.php' != $hook ) {
            return;
        }
        wp_enqueue_style('education-way-admin', get_template_directory_uri() . '/assets/css/admin.css', array(), '2.0.0');


      wp_register_script('education-way-page-builder-widget', get_template_directory_uri() . '/assets/js/page-builder-widgets.js', array('jquery'), true);

        wp_enqueue_media();

        wp_enqueue_script('education-way-page-builder-widget');
    }
    add_action( 'admin_enqueue_scripts', 'education_way_admin_css_enqueue_new_post' );
endif;

/**
 * Functions for get_theme_mod()
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */

if ( !function_exists( 'education_way_get_option' ) ) :

    /**
     * Get theme option.
     *
     * @since 1.0.0
     *
     * @param string $key Option key.
     * @return mixed Option value.
     */
    function education_way_get_option( $key = '' )
    {
        if (empty( $key ) ) {
            return;
        }
        $education_way_default_options = education_way_get_default_theme_options();

        $default      = (isset($education_way_default_options[$key])) ? $education_way_default_options[$key] : '';

        $theme_option = get_theme_mod($key, $default);

        return $theme_option;

    }

endif;

/**
 * WooCommerce Cart Icons
 * =====================================
 */
if ( !function_exists('education_way_woocommerce_cart_icon') ) :
    function education_way_woocommerce_cart_icon() {
        $woocommerce_cart = education_way_get_option('education_way_header_cart_icon');
        if( 1 == $woocommerce_cart && class_exists( 'WooCommerce' ) ) {
            global $woocommerce;
            $cart_url = wc_get_cart_url(); ?>
            <div class="cart-wrap desktop-only">
                <div class="pt-cart-views">
                    <a href="<?php echo esc_url( $cart_url ); ?>" class="cart-contents">
                        <i class="fa fa-shopping-cart"></i>
                        <span class="cart-value"><?php echo wp_kses_post ( WC()->cart->cart_contents_count ); ?></span>
                    </a>
                </div>
                <?php the_widget( 'WC_Widget_Cart', 'education-way' ); ?>
            </div>
            <?php
         }
    }
add_action( 'header_woocommerce_cart_icon', 'education_way_woocommerce_cart_icon' );
endif;

/**
 * Search Icons
 * =====================================
 */
if ( !function_exists('education_way_search_icon') ) :
    function education_way_search_icon() {
        $search_icon = education_way_get_option('education_way_header_search_icon');
        if( 1 == $search_icon ) {  ?>
            <span class="search-toggle visible-lg-block"><i class="fa fa-search"></i></span>
            <div id="header-search-box" class="search-box-wrapper">
                <div class="search-box">
                    <?php get_search_form(); ?>
                </div>
            </div>
        <?php
        
         }
    }
add_action( 'header_search_icon', 'education_way_search_icon' );
endif;

/**
 * footer menu
 * =====================================
 */
if ( ! function_exists('education_way_footer_menu') ) :
function education_way_footer_menu() {
$education_way_footer_menu = education_way_get_option('education_way_footer_menu');
if (has_nav_menu('footer') && $education_way_footer_menu ==1 ) {                    
        wp_nav_menu(array(
                'theme_location'  => 'footer',
                'depth'           => 1,
                'container'       => 'div',
                'container_class' => 'foot-menu',
                'container_id'    => 'foot-menu',
                'menu_class'      => 'nav navbar-nav pull-right',
                'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
                'walker'          => new WP_Bootstrap_Navwalker()
            )
        );
    }
}
add_action( 'education_way_show_footer_menu', 'education_way_footer_menu', 20 );
endif;
/**
 * footer social
 * =====================================
 */
if ( !function_exists('education_way_footer_social') ) :
function education_way_footer_social() {
$education_way_footer_social = education_way_get_option('education_way_footer_social');
    if (has_nav_menu('social-link') && $education_way_footer_social ==1 ) {                    
        wp_nav_menu(array(
                'theme_location'  => 'social-link',
                'depth'           => 1,
                'container'       => 'div',
                'container_class' => 'social-links',
                'container_id'    => 'social-foot-menu',
                'menu_class'      => 'nav navbar-nav pull-right',
                'fallback_cb'     => 'wp_bootstrap_navwalker::fallback',
                'walker'          => new WP_Bootstrap_Navwalker()
            )
        );
    }
}
add_action( 'education_way_show_footer_social', 'education_way_footer_social', 20 );
endif;

/**
 * Goto Top functions
 *
 * @since Canyon 1.0.0
 *
 */

if (!function_exists('education_way_go_to_top' )) :

				function education_way_go_to_top()
				{
						 $education_way_to_top = education_way_get_option('education_way_footer_go_to_top');                 
						 if( $education_way_to_top == 1 )
						 {
						?>
								<a id="toTop" class="go-to-top" href="#" title="<?php esc_attr_e('Go to Top', 'education-way'); ?>">
										<i class="fa fa-angle-double-up"></i>
								</a>
					<?php
						}
				}

add_action('education_way_go_to_top_hook', 'education_way_go_to_top', 20 );
endif;


/**
 * define size of logo.
 */

if (!function_exists('education_way_custom_logo_setup')) :
    function education_way_custom_logo_setup()
    {
        add_theme_support('custom-logo', array(
            'height'      => 46,
            'width'       => 230,
            'flex-width'  => true,
            'flex-height' => true,
        ));
    }

    add_action('after_setup_theme', 'education_way_custom_logo_setup');
endif;

/**
 * Display related posts from same category
 *
 * @since Canyon 1.0.0
 *
 * @param int $post_id
 * @return void
 *
*/
if ( !function_exists('education_way_related_post') ) :

    function education_way_related_post( $post_id ) {

        $related_post_hide = absint(education_way_get_option( 'education_way_related_post_show_hide'));
        if( 0 == $related_post_hide ){
            return;
        }
        $categories = get_the_category( $post_id );
        if ($categories) {
            $category_ids = array();
            foreach ($categories as $category) {
                $category_ids[] = $category->term_id;
            }
            $education_way_cat_post_args = array(
                        'category__in'       => $category_ids,
                        'post__not_in'       => array($post_id),
                        'post_type'          => 'post',
                        'posts_per_page'     => 2,
                        'post_status'        => 'publish',
                        'ignore_sticky_posts'=> true
                    );
              $education_way_featured_query = new WP_Query( $education_way_cat_post_args );
                if ($education_way_featured_query->have_posts() ) :
            ?>
            <div class="related-pots-block">
                <h4 class="widget-title">
                    <?php echo esc_html_e('Related Posts', 'education-way'); ?>
                </h4>
                <ul class="related-post clear row">
                    <?php
                    

                    while ( $education_way_featured_query->have_posts() ) : $education_way_featured_query->the_post();
                        ?>
                        <li class=" related-box col-sm-6 col-md-6">
                            <?php
                            if ( has_post_thumbnail() ):
                                ?>
                                <figure class="widget-image">
                                    <a href="<?php the_permalink()?>">
                                        <?php the_post_thumbnail('education-way-small-thumb'); ?>
                                    </a>
                                </figure>
                            <?php
                            endif;
                                    /**
                                     * education_way_meta_fields_section hook
                                     * @since Canyon 1.0.0
                                     *
                                     * @hooked education_way_meta_fields_section_action -  10
                                     */
                                    do_action('education_way_meta_fields_section_action');
                                ?> 
                            <div class="featured-desc">
                                <a href="<?php the_permalink()?>">
                                    <h2 class="title">
                                       <?php the_title(); ?>
                                    </h2>
                                    <p>
                                        <?php echo esc_html( wp_trim_words( get_the_content(), 10) ); ?>
                                        </p>
                                </a>
                            </div>
                        </li>
                    <?php
                    endwhile;
                    wp_reset_postdata();
                    ?>
                </ul>
            </div> <!-- .related-post-block -->
        <?php
        endif;
        }
    }
endif;
add_action( 'education_way_related_post_action', 'education_way_related_post', 10, 1 );

/**
 * Meta Fields in Post and Related
 *
 * @since Canyon 1.0.0
 *
 * @param int $post_id
 * @return void
 *
*/
if ( !function_exists('education_way_meta_fields_section') ) :

    function education_way_meta_fields_section( $post_id ) {
        /**
         * education_way_author information section 
         * @since Canyon 1.0.0
         *
        */
        ?>

         <div class="meta-box">
            <div class="event-author-option">
               <div class="event-author-img">
                 <?php echo get_avatar( get_the_author_meta( 'ID' ), 100 ); ?>
                </div>
                <div class="event-author-name">
                  <p><?php echo esc_html__('By :','education-way'); ?><a href="<?php echo esc_url( get_author_posts_url(get_the_author_meta('ID')) ); ?> "> <?php the_author(); ?></a></p>
              </div>
              </div>
              <ul class="meta-post">
                <li><i class="fa fa-calendar" aria-hidden="true"></i><?php echo esc_html( get_the_date('d M, Y') ); ?></li>
                <li><a href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i><?php printf( _nx( '1 Comment', '%1$s Comments', get_comments_number(), 'comments title', 'education-way' ), number_format_i18n( get_comments_number() ) ); ?></a></li>
              </ul>
        </div><!-- .meta-box -->       
<?php  }
endif;
add_action( 'education_way_meta_fields_section_action', 'education_way_meta_fields_section', 10, 1 );

/**
 * Post Navigation Function
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return void
 *
 */
if (!function_exists('education_way_posts_navigation')) :
    function education_way_posts_navigation()
    {
        $pagination_types = education_way_get_option( 'education_way_blog_pagination_types' );

        if ('default' == $pagination_types) {
            the_posts_navigation();
        }
        else{
            global $wp_query;
            $big = 999999999; // need an unlikely integer
           $pages = paginate_links( array(
        'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
        'format' => '?paged=%#%',
        'current' => max( 1, get_query_var('paged') ),
        'total' => $wp_query->max_num_pages,
        'type'  => 'array',
        'prev_next'   => TRUE,
        'prev_text'    => __('«', 'education-way'),
        'next_text'    => __('»', 'education-way'),
    ) );
    if( is_array( $pages ) ) {
        $paged = ( get_query_var('paged') == 0 ) ? 1 : get_query_var('paged');
        echo '<div class="pagination-option"><ul class="pagination">';
        foreach ( $pages as $page ) {
                echo "<li>$page</li>";
        }
       echo '</ul></div>';
        }
        }
    }
endif;
add_action('education_way_action_navigation', 'education_way_posts_navigation', 10);

/**
 * Exclude category in blog page
 *
 * @since Canyon 1.0.0
 *
 * @param null
 * @return int
 */
if (!function_exists('education_way_exclude_category_in_blog_page')) :
    function education_way_exclude_category_in_blog_page($query)
    {

        if ($query->is_home && $query->is_main_query() || $query->is_archive && $query->is_main_query() ) {
            $catid = education_way_get_option('education_way_exclude_cat_blog_archive_option');
            $exclude_categories = $catid;
            if (!empty($exclude_categories)) {
                $cats = explode(',', $exclude_categories);
                $cats = array_filter($cats, 'is_numeric');
                $string_exclude = '';
                echo $string_exclude;
                if (!empty($cats)) {
                    $string_exclude = '-' . implode(',-', $cats);
                    $query->set('cat', $string_exclude);
                }
            }
        }
        return $query;
    }
endif;
add_filter('pre_get_posts', 'education_way_exclude_category_in_blog_page');


/**
 * remove [..] from excerpt
 * =====================================
 */
function education_way_excerpt_more( $more ) {
    if( !is_admin() ){
     return '';
    }
}
add_filter('excerpt_more', 'education_way_excerpt_more');


/**
 * Load Breadcrumbs
*/
require get_template_directory() . '/canyonthemes/library/breadcrumbs/breadcrumbs.php';

/**
 * Load Bradcrumb
*/
require get_template_directory() . '/canyonthemes/hooks/page-breadcrumbs.php';

/**
 * Load Metabox file
 * =====================================
 *
 * /**
 * Metabox for Page Layout Option
 */

require get_template_directory() . '/canyonthemes/metabox/metabox-defaults.php';

/**
 * Metabox for Fontawesome Class
 */

require get_template_directory() . '/canyonthemes/metabox/metabox-icon.php';

/*
* Including Custom Widget Files
=====================================


/**
 * Custom Welcome Message Widget
 */
require get_template_directory() . '/canyonthemes/widget/welcome-msg-widget.php';


/**
 * Custom Services Widget
 */
require get_template_directory() . '/canyonthemes/widget/services-widget.php';


/**
 * Custom Why Choose Widget
 */
require get_template_directory() . '/canyonthemes/widget/why-choose-us.php';

/**
 * Custom Mission Widget
 */
require get_template_directory() . '/canyonthemes/widget/mission-widget.php';

/**
 * Custom latestPost Widget
 */

 require get_template_directory() . '/canyonthemes/widget/latest-posts-widget.php';

/**
 * Custom Testimonial  Widget
 */
require get_template_directory() . '/canyonthemes/widget/testimonial-widget.php';


/**
 * Custom Our Work Widget
 */
require get_template_directory() . '/canyonthemes/widget/our-courses-widget.php';

/**
 * Custom Recent Widget
 */

require get_template_directory() . '/canyonthemes/widget/recent-post-widget.php';

/**
 * Custom Recent Widget
 */

require get_template_directory() . '/canyonthemes/widget/popular-post-widget.php';
/**
 * Custom Our Social Widget
 */
require get_template_directory() . '/canyonthemes/widget/social-widget.php';

/**
 * Custom Counter Widget
*/
require get_template_directory() . '/canyonthemes/widget/counter-widget.php';

/**
 * Custom Download  Widget
 */
require get_template_directory() . '/canyonthemes/widget/download-widget.php';
