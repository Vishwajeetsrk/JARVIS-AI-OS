<?php
/**
 * Recommended plugins
 *
 * @package Canyon
 */
if ( ! function_exists( 'education_way_recommended_plugins' ) ) :
	/**
	 * Recommend plugins.
	 *
	 * @since 1.0.0
	 */
	function education_way_recommended_plugins() {
		$plugins = array(
			array(
				'name'     => esc_html__( 'One Click Demo Import', 'education-way' ),
				'slug'     => 'one-click-demo-import',
				'required' => false,
			),
			array(
				'name'     => esc_html__( 'Contact Us', 'education-way' ),
				'slug'     => 'contact-form-7',
				'required' => false,
			),
   
		);
		tgmpa( $plugins );
	}
endif;
add_action( 'tgmpa_register', 'education_way_recommended_plugins' );
