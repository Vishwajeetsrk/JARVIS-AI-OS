<?php
/**
 * Class for adding Social Section Widget
 *
 * @package Canyon Themes
 * @subpackage Canyon 
 * @since 1.0.0
 */
if ( ! class_exists( 'Education_Way_Download_Widget' ) ) {

    class Education_Way_Download_Widget extends WP_Widget {
        /*defaults values for fields*/

        private function defaults(){
            /*defaults values for fields*/
            $defaults = array(
                'title'         => __('DOWNLOAD BROCHURES','education-way'),
                'file_name'     => __('DOWNLOAD.PDF', 'education-way'),
                'download_link' => '',
            );
            return $defaults;
        }

        function __construct() {
            parent::__construct(
            /*Base ID of your widget*/
                'education_way_download',
                /*Widget name will appear in UI*/
                __('CT: Download Widget', 'education-way'),
                /*Widget description*/
                array( 'description' => __( 'CT: Download Widget', 'education-way' ), )
            );
        }

        /*Widget Backend*/
        public function form( $instance ) {
            $instance = wp_parse_args( (array) $instance, $this->defaults() );
            /*default values*/
            $title         = esc_attr( $instance[ 'title' ] );
            $file_name     = esc_attr( $instance[ 'file_name' ] );
            $download_link = esc_attr( $instance[ 'download_link' ] );
            ?>
            <p>
                <label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title', 'education-way' ); ?>:</label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo $title; ?>" />
            </p>

            <p>
                <label for="<?php echo $this->get_field_id( 'file_name' ); ?>"><?php _e( 'File Name', 'education-way' ); ?>:</label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'file_name' ); ?>" name="<?php echo $this->get_field_name( 'file_name' ); ?>" type="text" value="<?php echo $file_name; ?>" />
            </p>

             <p>
                <label for="<?php echo $this->get_field_id( 'download_link' ); ?>"><?php _e( 'Download Link', 'education-way' ); ?>:</label>
                <input class="widefat" id="<?php echo $this->get_field_id( 'file_name' ); ?>" name="<?php echo $this->get_field_name( 'download_link' ); ?>" type="text" value="<?php echo $download_link; ?>" />
            </p>
           
            <?php
        }
        /**
         * Function to Updating widget replacing old instances with new
         *
         * @access public
         * @since 1.0.0
         *
         * @param array $new_instance new arrays value
         * @param array $old_instance old arrays value
         * @return array
         *
         */
        public function update( $new_instance, $old_instance ) {
            $instance = $old_instance;
            $instance[ 'title' ]         = sanitize_text_field( $new_instance[ 'title' ] );
            $instance[ 'file_name' ]     = sanitize_text_field( $new_instance[ 'file_name' ] );
            $instance[ 'download_link' ] = esc_url_raw( $new_instance[ 'download_link' ] );

	        return $instance;
        }
        /**
         * Function to Creating widget front-end. This is where the action happens
         *
         * @access public
         * @since 1.0.0
         *
         * @param array $args widget setting
         * @param array $instance saved values
         * @return void
         *
         */
        public function widget($args, $instance) {
            $init_animate_title = '';
            $instance = wp_parse_args( (array) $instance, $this->defaults());

            /*default values*/
            $title         = apply_filters( 'widget_title', !empty( $instance['title'] ) ? $instance['title'] : '', $instance, $this->id_base );
            
            $file_name     = $instance['file_name'];
            
            $download_link = $instance['download_link'];

            echo $args['before_widget'];

             if( !empty( $file_name ) ) {
            
             ?>
             
                <div class="download-service">
                    <?php 
                    if( !empty( $title ) ) 
                    {
                       
                       echo $args['before_title'] .esc_html( $title ).$args['after_title']; 
                    
                      }
                       ?>
                   
                    <a href="<?php echo esc_url( $download_link ); ?>" target="_blank" class="download-btn"><i class="fa fa-file-pdf-o" aria-hidden="true"></i> <?php echo esc_html($file_name); ?> <span><i class="fa fa-download" aria-hidden="true"></i></span></a>
                   
                </div>
        <?php } ?>
         
            <?php
            echo $args['after_widget'];
        }
    }
}
add_action( 'widgets_init', 'education_way_download_widget' );
function education_way_download_widget()
{
    register_widget( 'Education_Way_Download_Widget' );
}