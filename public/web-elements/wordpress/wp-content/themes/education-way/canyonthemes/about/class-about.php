<?php
/**
 * About class
 *
 * @package Canyon
 */

if ( ! class_exists( 'Education_Way_About' ) ) {

	/**
	 * Main class.
	 *
	 * @since 1.0.0
	 */
	class Education_Way_About {

		/**
		 * Version
		 *
		 * @var string $version Class version.
		 *
		 * @since 1.0.0
		 */
		private $version = '1.0.0';

		/**
		 * Config.
		 *
		 * @var array $config Configuration array.
		 *
		 * @since 1.0.0
		 */
		private $config;

		/**
		 * Tabs.
		 *
		 * @var array $tabs Tabs array.
		 *
		 * @since 1.0.0
		 */
		private $tabs;

		/**
		 * Theme name.
		 *
		 * @var string $theme_name Theme name.
		 *
		 * @since 1.0.0
		 */
		private $theme_name;

		/**
		 * Theme slug.
		 *
		 * @var string $theme_slug Theme slug.
		 *
		 * @since 1.0.0
		 */
		private $theme_slug;

		/**
		 * Current theme object.
		 *
		 * @var WP_Theme $theme Current theme.
		 */
		private $theme;

		/**
		 * Single instance.
		 *
		 * @var Canyon $instance Instance object.
		 */
		private static $instance;

		/**
		 * Constructor.
		 *
		 * @since 1.0.0
		 */
		function __construct() {
		}

		/**
		 * Init.
		 *
		 * @since 1.0.0
		 *
		 * @param array $config Configuration array.
		 */
		public static function init( $config ) {
			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof Education_Way_About ) ) {
				self::$instance = new Education_Way_About;
				if ( ! empty( $config ) && is_array( $config ) ) {
					self::$instance->config = $config;
					self::$instance->configure();
					self::$instance->hooks();
				}
			}
		}

		/**
		 * Configure data.
		 *
		 * @since 1.0.0
		 */
		public function configure() {

			$theme = wp_get_theme();

			if ( is_child_theme() ) {
				$this->theme_name = $theme->parent()->get( 'Name' );
				$this->theme      = $theme->parent();
			} else {
				$this->theme_name = $theme->get( 'Name' );
				$this->theme      = $theme->parent();
			}

			$this->theme_version = $theme->get( 'Version' );
			$this->theme_slug    = $theme->get_template();
			$this->menu_name     = isset( $this->config['menu_name'] ) ? $this->config['menu_name'] : sprintf( esc_html__( 'About %s', 'education-way' ), $this->theme_name );
			$this->page_name     = isset( $this->config['page_name'] ) ? $this->config['page_name'] : sprintf( esc_html__( 'About %s', 'education-way' ), $this->theme_name );
			$this->tabs          = isset( $this->config['tabs'] ) ? $this->config['tabs'] : array();
			$this->page_slug     = $this->theme_slug . '-about';
			$this->page_url      = admin_url( 'themes.php?page=' . $this->page_slug );
			$this->notice        = '<p style="font-size:17px;">' . sprintf( esc_html__( 'Welcome! Thank you for choosing %1$s Theme. To take the advantage of our theme,Please make sure to visit theme info page.', 'education-way' ), esc_html( $this->theme_name ) ) . '</p><p><a href="' . esc_url( $this->page_url ) . '" class="button button-primary">' . sprintf( esc_html__( 'Get started with %1$s', 'education-way' ), $this->theme_name ) . '</a><a href="#" class="btn-dismiss" data-hello="world" data-userid="' . esc_attr( get_current_user_id() ) . '" data-nonce="' . esc_attr( wp_create_nonce( 'education_way_dismiss_nonce' ) ) . '">' . esc_html__( 'Dismiss this notice', 'education-way' ) . '</a></p>';
		}

		/**
		 * Setup hooks.
		 *
		 * @since 1.0.0
		 */
		public function hooks() {

			// Register menu.
			add_action( 'admin_menu', array( $this, 'register_info_page' ) );

			// Admin notice.
			add_action( 'admin_notices', array( $this, 'admin_notice' ) );

			// Load assets.
			add_action( 'admin_enqueue_scripts', array( $this, 'assets' ) );

			// Dismiss AJAX.
			add_action( 'wp_ajax_education_way_dismiss', array( $this, 'dismiss_callback' ) );
			add_action( 'wp_ajax_nopriv_education_way_dismiss', array( $this, 'dismiss_callback' ) );
		}

		/**
		 * Register info page.
		 *
		 * @since 1.0.0
		 */
		public function register_info_page() {

			// Add info page.
			add_theme_page( $this->menu_name, $this->page_name, 'activate_plugins', $this->page_slug, array( $this, 'render_page' ) );
		}

		/**
		 * Render page.
		 *
		 * @since 1.0.0
		 */
		public function render_page() {
			?>
			<div class="wrap about-wrap education-way-about-wrap">
				<h1><?php echo esc_html( $this->theme_name ); ?>&nbsp;-&nbsp;<?php echo esc_html( $this->theme_version ); ?></h1>
				<?php if ( isset( $this->config['welcome_content'] ) && ! empty( $this->config['welcome_content'] ) ) : ?>
					<p class="about-text"><?php echo esc_html( $this->config['welcome_content'] ); ?></p>
				<?php endif; ?>
				<a href="<?php echo esc_url('https://canyonthemes.com','education-way') ?>" target="_blank"><div class="wp-badge"></div></a>

				<?php $this->render_quick_links(); ?>

				<?php $this->render_tabs(); ?>

				<?php $this->render_current_tab_content(); ?>

			</div><!-- .wrap .education-way-about-wrap -->
			<?php
		}

		/**
		 * Render tabs.
		 *
		 * @since 1.0.0
		 */
		public function render_tabs() {

			$tabs = ( isset( $this->config['tabs'] ) && ! empty( $this->config['tabs'] ) ) ? $this->config['tabs'] : array();

			if ( empty( $tabs ) ) {
				return;
			}

			$current_tab = isset( $_GET['tab'] ) ? wp_unslash( $_GET['tab'] ) : 'getting-started';

			echo '<h2 class="nav-tab-wrapper wp-clearfix">';

			foreach ( $tabs as $key => $tab ) {

				if ( 'useful-plugins' === $key ) {
					global $tgmpa;
					if ( ! isset( $tgmpa ) ) {
						continue;
					}
				}

				$current_class = ' tab-' . $key;
				$current_class .= ( $current_tab === $key ) ? ' nav-tab-active': '';
				echo '<a href="' . esc_url( admin_url( 'themes.php?page=' . $this->page_slug ) ) . '&tab=' . esc_attr( $key ) . '" class="nav-tab' . esc_attr( $current_class ) . '">' . esc_html( $tab ) . '</a>';
			}

			echo '</h2>';
		}

		/**
		 * Render current tab content.
		 *
		 * @since 1.0.0
		 */
		public function render_current_tab_content() {

			$current_tab = isset( $_GET['tab'] ) ? wp_unslash( $_GET['tab'] ) : 'getting-started';
			$method = str_replace( '-', '_', esc_attr( $current_tab ) );

			if ( method_exists( $this, $method ) ) {
				$this->{$method}();
			} else {
				printf( esc_html__( '%s() method does not exist.', 'education-way' ), $method );
			}
		}

		/**
		 * Render getting started.
		 *
		 * @since 1.0.0
		 */
		public function getting_started() {

			$content = ( isset( $this->config['getting_started'] ) ) ? $this->config['getting_started'] : array();
			if ( empty( $content ) ) {
				return;
			}
			?>
			<div class="feature-section education-way-section education-way-section-getting-started three-col">
				<?php foreach ( $content as $item ) : ?>
					<?php $this->render_grid_item( $item ); ?>
				<?php endforeach; ?>
			</div><!-- .feature-section .education-way-section -->
			<?php
		}

		/**
		 * Render grid item.
		 *
		 * @since 1.0.0
		 *
		 * @param array $item Item details.
		 */
		private function render_grid_item( $item ) {
			?>
			<div class="col">
				<?php if ( isset( $item['title'] ) && ! empty( $item['title'] ) ) : ?>
					<h3>
						<?php if ( isset( $item['icon'] ) && ! empty( $item['icon'] ) ) : ?>
							<span class="<?php echo esc_attr( $item['icon'] ); ?>"></span>
						<?php endif; ?>
						<?php echo esc_html( $item['title'] ); ?>
					</h3>
				<?php endif; ?>
				<?php if ( isset( $item['description'] ) && ! empty( $item['description'] ) ) : ?>
					<p><?php echo wp_kses_post( $item['description'] ); ?></p>
				<?php endif; ?>
				<?php if ( isset( $item['button_text'] ) && ! empty( $item['button_text'] ) && isset( $item['button_url'] ) && ! empty( $item['button_url'] ) ) : ?>
					<?php
					$button_target = ( isset( $item['is_new_tab'] ) && true === $item['is_new_tab'] ) ? '_blank' : '_self';
					$button_class = '';
					if ( isset( $item['button_type'] ) && ! empty( $item['button_type'] ) ) {
						if ( 'primary' === $item['button_type'] ) {
							$button_class = 'button button-primary';
						} elseif ( 'secondary' === $item['button_type'] ) {
							$button_class = 'button button-secondary';
						}
					}
					?>
					<a href="<?php echo esc_url( $item['button_url'] ); ?>" class="<?php echo esc_attr( $button_class ); ?>" target="<?php echo esc_attr( $button_target ); ?>"><?php echo esc_html( $item['button_text'] ); ?></a>
				<?php endif; ?>
			</div><!-- .col -->
			<?php
		}

		/**
		 * Render support.
		 *
		 * @since 1.0.0
		 */
		public function support() {
			$content = ( isset( $this->config['support'] ) ) ? $this->config['support'] : array();
			if ( empty( $content ) ) {
				return;
			}
			?>
			<div class="feature-section education-way-section education-way-section-support three-col">
				<?php foreach ( $content as $item ) : ?>
					<?php $this->render_grid_item( $item ); ?>
				<?php endforeach; ?>
			</div><!-- .feature-section .education-way-section -->
			<?php
		}

		/**
		 * Render useful plugins.
		 *
		 * @since 1.0.0
		 */
		public function useful_plugins() {

			global $tgmpa;

			if ( ! $tgmpa ) {
				return;
			}

			$content = ( isset( $this->config['useful_plugins'] ) ) ? $this->config['useful_plugins'] : array();
			$tgmpa_url      = $tgmpa->get_tgmpa_url();
			$tgmpa_complete = $tgmpa->is_tgmpa_complete();
			$plugins        = $tgmpa->plugins;
			?>
			<div class="education-way-section education-way-section-useful-plugins">

				<?php if ( isset( $content['description'] ) && ! empty( $content['description'] ) ) : ?>
					<div class="plugins-content">
						<?php echo wp_kses_post( wpautop( $content['description'] ) ); ?>
					</div><!-- .plugins-content -->
				<?php endif; ?>

				<?php if ( true !== $tgmpa_complete ) : ?>
					<a href="<?php echo esc_url( $tgmpa_url ); ?>" class="button button-primary"><?php esc_html_e( 'Manage Plugins', 'education-way' ); ?></a>
				<?php endif; ?>

				<?php if ( ! empty( $plugins ) ) : ?>
					<ul class="plugin-list">
						<?php foreach ( $plugins as $plugin ) : ?>
							<li><?php echo esc_html( $plugin['name'] ); ?></li>
						<?php endforeach; ?>
					</ul><!-- .plugin-list -->
				<?php endif; ?>

			</div><!-- .education-way-section -->
			<?php
		}

		/**
		 * Render demo content.
		 *
		 * @since 1.0.0
		 */
		public function demo_content() {

			$content = ( isset( $this->config['demo_content'] ) ) ? $this->config['demo_content'] : array();
			if ( empty( $content ) ) {
				return;
			}
			?>
			<div class="education-way-section education-way-section-demo-content">
				<div class="demo-description">
					<?php if ( isset( $content['description'] ) && ! empty( $content['description'] ) ) : ?>
						<?php echo wp_kses_post( wpautop( $content['description'] ) ); ?>
					<?php endif; ?>

					<?php
					global $tgmpa;

					if ( $tgmpa ) {
						$tgmpa_url      = $tgmpa->get_tgmpa_url();
						$tgmpa_complete = $tgmpa->is_tgmpa_complete();
						if ( true !== $tgmpa_complete ) {
							?>
							<a href="<?php echo esc_url( $tgmpa_url ); ?>" class="button button-primary"><?php esc_html_e( 'Manage Plugins', 'education-way' ); ?></a>
							<?php
						}
					}
					?>
				</div><!-- .demo-description -->
			</div><!-- .education-way-section -->
			<?php
		}


		/**
		 * Hook admin notice.
		 *
		 * @since 1.0.0
		 */
		public function admin_notice() {

			add_action( 'admin_notices', array( $this, 'display_admin_notice' ), 99 );
		}

		/**
		 * Load assets.
		 *
		 * @since 1.0.0
		 *
		 * @param string $hook Hook,
		 */
		public function assets( $hook ) {

			if ( in_array( $hook, array( 'themes.php', 'appearance_page_' . $this->page_slug ), true ) ) {
				wp_enqueue_style( 'education-way-about', get_template_directory_uri() . '/assets/css/about.css', array(), '1.0.0' );
				wp_enqueue_script( 'education-way-about', get_template_directory_uri() . '/assets/js/about.js', array(), '1.0.0' );
			}

		}

		/**
		 * Display admin notice.
		 *
		 * @since 1.0.0
		 */
		public function display_admin_notice() {

			$screen_id = null;
			$current_screen = get_current_screen();
			if ( $current_screen ) {
				$screen_id = $current_screen->id;
			}

			$user_id = get_current_user_id();
			$dismiss_status = get_user_meta( $user_id, 'education_way_dismiss_status', true );
			?>
			<?php if ( current_user_can( 'edit_theme_options' ) && 'themes' === $screen_id && 1 !== absint( $dismiss_status ) ) : ?>
				<div class="education-way-about-notice notice notice-about">
					<?php echo $this->notice; ?>
				</div><!-- .education-way-about-notice -->
			<?php endif; ?>
			<?php
		}

		/**
		 * Render quick links.
		 *
		 * @since 1.0.0
		 */
		public function render_quick_links() {

			$quick_links = ( isset( $this->config['quick_links'] ) ) ? $this->config['quick_links'] : array();

			if ( ! empty( $quick_links ) ) {
				echo '<p class="quick-links">';
				foreach ( $quick_links as $link ) {
					$button_type = '';
					if ( isset( $link['button'] ) ) {
						$button_type = 'button-' . esc_attr( $link['button'] );
					}
					echo '<a href="' . esc_url( $link['url'] ) . '" class="button ' . esc_attr( $button_type ) . '" target="_blank">' . esc_html( $link['text'] ) . '</a>';
				}
				echo '</p>';
			}
		}

		/**
		 * Callback for AJAX dismiss.
		 *
		 * @since 1.0.0
		 */
		public function dismiss_callback() {

			$output = array();
			$output['status'] = false;

			$userid  = ( isset( $_GET['userid'] ) ) ? esc_attr( wp_unslash( $_GET['userid'] ) ) : '';
			$wpnonce = ( isset( $_GET['_wpnonce'] ) ) ? esc_attr( wp_unslash( $_GET['_wpnonce'] ) ) : '';

			if ( false === wp_verify_nonce( $wpnonce, 'education_way_dismiss_nonce' ) ) {
				wp_send_json( $output );
			}

			update_user_meta( $userid, 'education_way_dismiss_status', 1 );

			$output['status'] = true;

			wp_send_json( $output );
		}
	}
}
