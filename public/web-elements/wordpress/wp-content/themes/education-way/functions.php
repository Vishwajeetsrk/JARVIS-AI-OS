<?php
/**
 * Canyon functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Canyon Themes
 * @subpackage Education Way
 */

if ( !function_exists( 'education_way_setup' ) ) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function education_way_setup()
    {
        /*
         * Make theme available for translation.
        */

        load_theme_textdomain( 'education-way' );

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');

        //Add Excerpt field in page
        add_post_type_support( 'page', 'excerpt' );       
        // This theme uses wp_nav_menu() in one location.
        register_nav_menus( array(
            'primary'     => esc_html__('Primary', 'education-way'),
            'social-link' => esc_html__('Social Link', 'education-way'),
            'top'         => esc_html__('Top Menu', 'education-way'),
            ));

        /*
             * Switch default core markup for search form, comment form, and comments
             * to output valid HTML5.
             */
        add_theme_support('html5', array(
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));


        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('education_way_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');
    }
endif;
add_action('after_setup_theme', 'education_way_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function education_way_content_width()
{
    $GLOBALS['content_width'] = apply_filters('education_way_content_width', 640);
}

add_action('after_setup_theme', 'education_way_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function education_way_widgets_init()
{
    register_sidebar(array(
        'name'         => esc_html__('Sidebar', 'education-way'),
        'id'           => 'sidebar-1',
        'description'  => esc_html__('Add widgets here.', 'education-way'),
        'before_title' => '<h4  class="widget-title sidebar-widget-title">',
        'after_title'  => '</h2>',
    ));


    register_sidebar(array(
        'name'          => esc_html__('Home Page Widget Area', 'education-way'),
        'id'            => 'education-way-home-page',
        'description'   => esc_html__('Add widgets here to appear in Home Page. First Select Front Page and Blog Page From Appearance > Homepage Settings', 'education-way'),
        'before_widget' => '',
        'after_widget'  => '',

    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 1', 'education-way'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Add widgets here.', 'education-way'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 2', 'education-way'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Add widgets here.', 'education-way'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));

    register_sidebar(array(
        'name'          => esc_html__('Footer 3', 'education-way'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Add widgets here.', 'education-way'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));


    register_sidebar(array(
        'name'          => esc_html__('Footer 4', 'education-way'),
        'id'            => 'footer-4',
        'description'   => esc_html__('Add widgets here.', 'education-way'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}

add_action('widgets_init', 'education_way_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function education_way_scripts()
{

    $education_way_paragraph_font_family_url  = wp_kses_post( education_way_get_option('education_way_paragraph_font_family_url') );

   if(!empty( $education_way_paragraph_font_family_url ))
    {
        /*google font  */
        wp_enqueue_style( 'education-way-body-font', $education_way_paragraph_font_family_url, array(), null );
    }

    if( empty($education_way_paragraph_font_family_url ) )
  
      {
        /*google font  */
          wp_enqueue_style('education-way-googleapis', 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap', array(), null);
      }
    /*google font */
    wp_enqueue_style('education-way-googleapis', 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap', array());

    /*Bootstrap*/
    wp_enqueue_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css', array(), '4.5.1');

    wp_enqueue_style('font-awesome', get_template_directory_uri() . '/assets/css/font-awesome.min.css', array(), '4.5.0');

    /* Animation CSS Enqueue */
    $animation_options = education_way_get_option('education_way_animation_disable_option');
  
    if( $animation_options == 0 )

    {
        wp_enqueue_style('animate', get_template_directory_uri() . '/assets/css/animate.css', array(), '4.5.0');    
    }

    /* flexslider CSS */
    wp_enqueue_style('flexslider', get_template_directory_uri() . '/assets/css/flexslider.css', array(), '4.5.0');

    wp_enqueue_style('jquery.nstSlider', get_template_directory_uri() . '/assets/css/jquery.nstSlider.css', array(), '4.5.0');

    wp_enqueue_style('lightbox', get_template_directory_uri() . '/assets/css/lightbox.css', array(), '4.5.0');

     /* lightcase CSS */
    wp_enqueue_style('lightcase', get_template_directory_uri() . '/assets/css/lightcase.css', array(), '4.5.0');

    /* pe-icon-7-stroke CSS */
    wp_enqueue_style('pe-icon-7-stroke', get_template_directory_uri() . '/assets/css/pe-icon-7-stroke.css', array(), '4.5.0');

    /* swiper.min CSS */
    wp_enqueue_style('swiper', get_template_directory_uri() . '/assets/css/swiper.min.css', array(), '4.5.0');

    wp_enqueue_style('education-way-style', get_stylesheet_uri());

    /* responsive CSS */
    wp_enqueue_style('education-way-responsive', get_template_directory_uri() . '/assets/css/responsive.css', array(), '4.5.0');

    wp_enqueue_script('bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), '20151215', true);

    wp_enqueue_script('custom-map', get_template_directory_uri() . '/assets/js/custom.map.js', array('jquery'), '20151215', true);

    wp_enqueue_script('jquery-counterup', get_template_directory_uri() . '/assets/js/jquery.counterup.min.js', array('jquery'), '20151215', true);

    wp_enqueue_script('lightcase', get_template_directory_uri() . '/assets/js/lightcase.js', array('jquery'), '20151215', true);

    wp_enqueue_script('jquery-easing', get_template_directory_uri() . '/assets/js/jquery.easing.1.3.js', array('jquery'), '20151215', true);
 
    wp_enqueue_script('jquery-flexslider', get_template_directory_uri() . '/assets/js/jquery.flexslider.js', array('jquery'), '20151216', true);

    wp_enqueue_script('jquery-waypoints', get_template_directory_uri() . '/assets/js/jquery.waypoints.min.js', array('jquery'), '20151216', true);

    wp_enqueue_script('lightbox', get_template_directory_uri() . '/assets/js/lightbox.min.js', array('jquery'), '20151216', true);

    wp_enqueue_script('plugins-isotope', get_template_directory_uri() . '/assets/js/plugins.isotope.js', array('jquery'), '20151216', true);

    wp_enqueue_script('isotope-pkgd', get_template_directory_uri() . '/assets/js/isotope.pkgd.min.js', array('jquery'), '20151215', true);

    wp_enqueue_script('swiper-min', get_template_directory_uri() . '/assets/js/swiper.min.js', array('jquery'), '20151216', true);
    
    wp_enqueue_script('jquery-nstSlider', get_template_directory_uri() . '/assets/js/jquery.nstSlider.js', array('jquery'), '20151215', true);

    wp_enqueue_script('education-way-custom-isotope', get_template_directory_uri() . '/assets/js/custom.isotope.js', array('jquery'), time(), true);

    wp_enqueue_script('education-way-custom', get_template_directory_uri() . '/assets/js/custom.js', array('jquery'), time(), true);


    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'education_way_scripts');

/**
 * Implement the default Function.
 */
require get_template_directory() . '/canyonthemes/customizer/default.php';

/**
 * Implement the default file.
 */
require get_template_directory() . '/canyonthemes/core/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/canyonthemes/core/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/canyonthemes/core/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/canyonthemes/core/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/canyonthemes/core/jetpack.php';

/**
 * Load Bootstrap Navwalder class.
 */
require get_template_directory() . '/canyonthemes/core/wp_bootstrap_navwalker.php';

/**
 * Customizer Home layout.
 */
require get_template_directory() . '/canyonthemes/layouts/homepage-layout/education-way-home-layout.php';

/**
 * Dummy File Load 
*/
require get_template_directory() . '/canyonthemes/dummy-data/dummy-file.php';

/**
 * Customizer Home layout.
 */
require get_template_directory() . '/canyonthemes/core/theme-function.php';

/**
 * Load Dynamic css
 */

include get_template_directory() . '/canyonthemes/hooks/dynamic-css.php';

/**
 * Load Cusomizer Repeater
 */

include get_template_directory() . '/canyonthemes/customizer-repeater/customizer-control-repeater.php';

/**
 * Load tgm for this theme
 */
require get_template_directory() . '/canyonthemes/library/tgm/class-tgm-plugin-activation.php';

/**
 * Plugin recommendation using TGM
*/
require get_template_directory() . '/canyonthemes/hooks/tgm.php';

/**
 * Load about.
 */
if ( is_admin() ) {
   
include get_template_directory() . '/canyonthemes/about/about.php';
include get_template_directory() . '/canyonthemes/about/class-about.php';
}

/**
 * Load Upgrade to pro
 */
require get_template_directory() . '/canyonthemes/customizer-pro/class-customize.php';

/**
 * Run ajax request.
 */
if ( ! function_exists('education_way_wp_pages_plucker') ) :

    /**
    * Sending pages with ids
    */
    function education_way_wp_pages_plucker()
    {
        $pages = get_pages(
            array (
                'parent'  => 0, // replaces 'depth' => 1,
            )
        );

        $ids = wp_list_pluck( $pages, 'post_title', 'ID' );

        return wp_send_json($ids);
    }

endif;

add_action( 'wp_ajax_education_way_wp_pages_plucker', 'education_way_wp_pages_plucker' );

add_action( 'wp_ajax_nopriv_education_way_wp_pages_plucker', 'education_way_wp_pages_plucker' );