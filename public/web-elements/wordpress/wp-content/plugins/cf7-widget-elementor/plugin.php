<?php
namespace voidelement;  //main namespace
use voidelement\Widgets\void_cf7;   //path define same as class name of the widget

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


// Add a custom category for panel widgets
add_action( 'elementor/init', function() {
   \Elementor\Plugin::$instance->elements_manager->add_category( 
   	'void-elements',                 // the name of the category
   	[
   		'title' => esc_html__( 'VOID ELEMENTS', 'void' ),
   		'icon' => 'fa fa-header', //default icon
   	],
   	1 // position
   );
} );


/**
 * Main Plugin Class
 *
 * Register new elementor widget.
 *
 * @since 1.0.0
 */
class Plugin {

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	
	public function __construct() {
		$this->add_actions();
	}

	/**
	 * Add Actions
	 *
	 * @since 1.0.0
	 *
	 * @access private
	 */
	private function add_actions() {
		add_action( 'elementor/widgets/widgets_registered', [ $this, 'on_widgets_registered' ] );

	}

	/**
	 * On Widgets Registered
	 *
	 * @since 1.0.0
	 *
	 * @access public
	 */
	public function on_widgets_registered() {
		$this->includes();
		$this->register_widget();
	}

	/**
	 * Includes
	 *
	 * @since 1.0.0
	 *
	 * @access private
	 */
	private function includes() {
		$void_cf7= array_map('basename', glob(dirname( __FILE__ ) . '/widgets/*.php'));
		require __DIR__ . '/helper/helper.php';
		foreach($void_cf7 as $key => $value){
   			require __DIR__ . '/widgets/'.$value;
		}
	}

	/**
	 * Register Widget
	 *
	 * @since 1.0.0
	 *
	 * @access private
	 */
	private function register_widget() {    
		\Elementor\Plugin::instance()->widgets_manager->register_widget_type( new void_cf7() );
	}
}

new Plugin();
