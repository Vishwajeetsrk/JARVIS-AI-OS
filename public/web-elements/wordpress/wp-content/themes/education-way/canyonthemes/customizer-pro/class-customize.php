<?php
/**
 * Singleton class for handling the theme's customizer integration.
 *
 * @since  1.0.0
 * @access public
 */
final class Education_Way_Customize {

	/**
	 * Returns the instance.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return object
	 */
	public static function get_instance() {

		static $instance = null;

		if ( is_null( $instance ) ) {
			$instance = new self;
			$instance->setup_actions();
		}

		return $instance;
	}

	/**
	 * Constructor method.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function __construct() {}

	/**
	 * Sets up initial actions.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function setup_actions() {

		// Register panels, sections, settings, controls, and partials.
		add_action( 'customize_register', array( $this, 'sections' ) );

		// Register scripts and styles for the controls.
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_control_scripts' ), 0 );
	}

	/**
	 * Sets up the customizer sections.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object  $manager
	 * @return void
	 */
	public function sections( $manager ) {

		// Load custom sections.
		require_once get_template_directory() . '/canyonthemes/customizer-pro/section-pro.php';

		// Register custom section types.
		$manager->register_section_type( 'Education_Way_Customize_Section_Pro' );

		// Register sections.
		$manager->add_section(
			new Education_Way_Customize_Section_Pro(
				$manager,
				'education-way',
				array(
					'title'    => esc_html__( 'Premium Verison', 'education-way' ),
					'pro_text' => esc_html__( 'Upgrade To Pro',  'education-way' ),
					'pro_url'  => 'https://www.templatesell.com/item/education-way-plus/',
					'priority' => 0
				)
			)
		);
	}


	/**
	 * Loads theme customizer CSS.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue_control_scripts() {
		require_once get_template_directory() . '/canyonthemes/customizer-pro/section-pro.php';


		wp_enqueue_script( 'education-way-customize-controls', trailingslashit( get_template_directory_uri() ) . '/canyonthemes/customizer-pro/customize-controls.js', array( 'customize-controls' ) );

		wp_enqueue_style( 'education-way-customize-controls', trailingslashit( get_template_directory_uri() ) . '/canyonthemes/customizer-pro/customize-controls.css' );
	}
}

// Doing this customizer thang!
Education_Way_Customize::get_instance();

if ( ! class_exists( 'Education_Way_Customize_Static_Text_Control' ) ){
if ( ! class_exists( 'WP_Customize_Control' ) )
    return NULL;
class Education_Way_Customize_Static_Text_Control extends WP_Customize_Control {
	/**
	 * Control type.
	 *
	 * @access public
	 * @var string
	 */
	public $type = 'static-text';

	public function __construct( $manager, $id, $args = array() ) {
		parent::__construct( $manager, $id, $args );
	}

}
}