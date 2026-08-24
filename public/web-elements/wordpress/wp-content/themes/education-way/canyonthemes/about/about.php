<?php
/**
 * About setup
 *
 * @package Canyon
 */

if ( ! function_exists( 'education_way_about_setup' ) ) :

	/**
	 * About setup.
	 *
	 * @since 1.0.0
	 */
	function education_way_about_setup() {

		include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
		if ( is_plugin_active( 'one-click-demo-import/one-click-demo-import.php' ) ):

		    $url =  admin_url( 'themes.php?page=pt-one-click-demo-import' );

		else:

		     $url = admin_url();

		endif;

		$config = array(

			// Welcome content.
			'welcome_content' => sprintf( esc_html__( '%1$s is now installed and ready to use. Thank you for choosing Canyon for your Website. Please follow theme documentation properly to know how to use Canyon.', 'education-way' ), 'Canyon' ),

			// Tabs.
			'tabs' => array(
				'getting-started' => esc_html__( 'Getting Started', 'education-way' ),
				),

			// Quick links.
			'quick_links' => array(
                'theme_url' => array(
                    'text' => esc_html__( 'Theme Details', 'education-way' ),
                    'url'  => 'https://canyonthemes.com/themes/education-way/',
                    'button' => 'primary',
                ),
				'translation_url' => array(
					'text'   => esc_html__( 'Translate on your own Language', 'education-way' ),
					'url'    => 'https://translate.wordpress.org/projects/wp-themes/education-way/',
					'button' => 'primary',
				),
            ),

			// Getting started.
			'getting_started' => array(
				'one' => array(
					'title'       => esc_html__( 'Theme Documentation', 'education-way' ),
					'icon'        => 'dashicons dashicons-format-aside',
					'description' => esc_html__( 'Please check our full documentation for detailed information on how to setup and customize the theme.', 'education-way' ),
					'button_text' => esc_html__( 'View Documentation', 'education-way' ),
					'button_url'  => 'http://doc.canyonthemes.com/education-way/',
					'button_type' => 'primary',
					'is_new_tab'  => true,
					),
				'two' => array(
					'title'       => esc_html__( 'Static Front Page', 'education-way' ),
					'icon'        => 'dashicons dashicons-admin-generic',
					'description' => esc_html__( 'To achieve custom home page other than blog listing, you need to create and set static front page.', 'education-way' ),
					'button_text' => esc_html__( 'Static Front Page', 'education-way' ),
					'button_url'  => admin_url( 'customize.php?autofocus[section]=static_front_page' ),
					'button_type' => 'primary',
					),
				'three' => array(
					'title'       => esc_html__( 'Theme Options', 'education-way' ),
					'icon'        => 'dashicons dashicons-admin-customizer',
					'description' => esc_html__( 'Theme uses Customizer API for theme options. Using the Customizer you can easily customize different aspects of the theme.', 'education-way' ),
					'button_text' => esc_html__( 'Customize', 'education-way' ),
					'button_url'  => wp_customize_url(),
					'button_type' => 'primary',
					),
				'four' => array(
					'title'       => esc_html__( 'Demo Content', 'education-way' ),
					'icon'        => 'dashicons dashicons-layout',
					'description' => sprintf( esc_html__( 'To import sample demo content, %1$s plugin should be installed and activated. After plugin is activated, visit Import Demo Data menu under Appearance.', 'education-way' ), esc_html__( 'One Click Demo Import', 'education-way' ) ),
					'button_text' => esc_html__( 'Demo Import', 'education-way' ),
					'button_url'  => $url,
					'button_type' => 'primary',
					),
				'five' => array(
					'title'       => esc_html__( 'Theme Preview', 'education-way' ),
					'icon'        => 'dashicons dashicons-welcome-view-site',
					'description' => esc_html__( 'You can check out the theme demos for reference to find out what you can achieve using the theme and how it can be customized.', 'education-way' ),
					'button_text' => esc_html__( 'View Demo', 'education-way' ),
					'button_url'  => 'http://demo.canyonthemes.com/education-way',
					'button_type' => 'primary',
					'is_new_tab'  => true,
					),
                'six' => array(
                    'title'       => esc_html__( 'Contact Support', 'education-way' ),
                    'icon'        => 'dashicons dashicons-sos',
                    'description' => esc_html__( 'Got theme support question or found bug or got some feedbacks? Best place to ask your query is the dedicated Support forum for the theme.', 'education-way' ),
                    'button_text' => esc_html__( 'Contact Support', 'education-way' ),
                    'button_url'  => 'https://canyonthemes.com/contact-us/',
					'button_type' => 'primary',
                    'is_new_tab'  => true,
                ),
				),

			// Useful plugins.
			'useful_plugins'  => array(
				'description' => esc_html__( 'Theme supports some helpful WordPress plugins to enhance your site.Please click Manage Plugins button below to enable those plugins which you need in your site,if those plugin are not Install.', 'education-way' ),
				),

			);

		Education_Way_About::init( $config );
	}

endif;

add_action( 'after_setup_theme', 'education_way_about_setup' );
