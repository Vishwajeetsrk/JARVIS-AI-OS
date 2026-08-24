<?php
/**
* Class for adding Our Testimonials Section Widget
*
* @package Canyon Themes
* @subpackage Canyon
* @since 1.0.0
*/
if ( !class_exists( 'Education_Way_Testimonial_Widget' ) ) 
{
    class Education_Way_Testimonial_Widget extends WP_Widget

    {

        private function defaults()
        /* Default Value */
        {
            $defaults = array(
                'title'               => esc_html__('Testimonials','education-way'),
                'sub_title'           => esc_html__('Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','education-way'),    
                'bg_image' => '',
                'features'   =>'',
            );
            return $defaults;
        }

        public function __construct()

        {
            parent::__construct(
                /*Widget ID */
                'education_way_testimonial_widget',
                /*Widget Name */
                esc_html__( 'CT: Testimonial Widget', 'education-way' ),
                /*Widget description */
                array('description' => esc_html__( 'CT: Testimonial Widget', 'education-way' ) )
            );
        }
        /**
         * Function to Creating widget front-end. This is where the action happens
         *
         * @access public
         * @since 1.0
         *
         * @param array $args widget setting
         * @param array $instance saved values
         *
         * @return void
         *
         */
        
        public function widget($args, $instance)
        {
            if (!empty($instance)) 
            {
                $instance  = wp_parse_args((array )$instance, $this->defaults());

                $title     = apply_filters('widget_title', !empty($instance['title']) ? esc_html( $instance['title']): '', $instance, $this->id_base);
                $subtitle  =  esc_html( $instance['sub_title'] );

                $bg_image  = esc_url($instance['bg_image']);

                $features  = ( ! empty( $instance['features'] ) ) ? $instance['features'] : array();

                echo $args['before_widget'];

                if (isset($features) && !empty($features['main'])) : ?>    
                    <!-- Start Testimonial Section -->
                <section class="bg-testimonial-section" style="background: url(<?php echo $bg_image; ?>) no-repeat fixed; background-size: cover;background-position: 48% 100%;">
                    <div class="testimonial-overlay">
                        <div class="container">
                            <div class="row">
                                <div class="testimonial-option">
                                    <div class="section-header text-center">
                                        <h2><?php echo $title; ?></h2>
                                        <span class="double-border"></span>
                                        <p><?php echo $subtitle; ?></p>
                                    </div><!-- .section-header -->
                                    <div class="testimonial-container">
                                        <div class="swiper-wrapper">
                                            
                                            <?php
                                            $post_in = array();

                                            if  (count($features) > 0 && is_array($features) )
                                            {


                                                $post_in[0] = $features['main'];

                                                foreach ( $features as $our_testimonial )
                                                {

                                                    if( isset( $our_testimonial['page_ids'] ) && !empty( $our_testimonial['page_ids'] ) )
                                                    {

                                                      $post_in[] = $our_testimonial['page_ids'];

                                                  }
                                              }


                                          }

                                          if( !empty( $post_in )) :
                                            $testimonials_page_args = array(
                                                'post__in'            => $post_in,
                                                'orderby'             => 'post__in',
                                                'posts_per_page'      => count( $post_in ),
                                                'post_type'           => 'page',
                                                'no_found_rows'       => true,
                                                'post_status'         => 'publish'
                                            );
                                            $testimonials_query = new WP_Query( $testimonials_page_args );
                                            /*The Loop*/
                                            if ( $testimonials_query->have_posts() ):

                                                while ( $testimonials_query->have_posts() ):$testimonials_query->the_post(); 

                                                   $designation = get_post_meta(get_the_ID(), 'education_way_designation', true);
                                                   ?>

                                                   <div class="swiper-slide">
                                                    <div class="testimonial-content">
                                                        <?php the_content(); ?>
                                                    </div>
                                                    <div class="author-details">
                                                       <?php

                                                       if (has_post_thumbnail()) {

                                                        $image_id = get_post_thumbnail_id();

                                                        $image_url = wp_get_attachment_image_src($image_id, 'full', true);

                                                        ?>
                                                        <div class="author-img">
                                                            <img src="<?php echo $image_url[0]; ?>" alt="testimonial-author" />
                                                        </div>
                                                    <?php } ?>
                                                    <div class="author-name">
                                                        <h4><?php the_title(); ?></h4>
                                                        <?php
                                                        if( !empty($designation))
                                                        {
                                                            ?>
                                                            
                                                            <h6><?php echo esc_html($designation); ?></h6>

                                                        <?php } ?>
                                                    </div>
                                                </div>
                                            </div><!-- .swiper-slide -->
                                        <?php endwhile;endif; wp_reset_postdata();
                                    endif;
                                    ?>
                                    
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                    </div><!-- .row -->
                </div><!-- .container -->
            </div><!-- .testimonial-overlay -->
        </section>
        <!-- End Testimonial Section -->
        <?php
    endif;   
    echo $args['after_widget'];
}
}
        /**
         * Function to Updating widget replacing old instances with new
         *
         * @access public
         * @since 1.0
         *
         * @param array $new_instance new arrays value
         * @param array $old_instance old arrays value
         *
         * @return array
         *
         */

        public function update( $new_instance, $old_instance )
        {
            $instance             = $old_instance;

            $instance['main']      = absint($new_instance['main']);
            
            $instance['title']     = ( isset( $new_instance['title'])) ? sanitize_text_field($new_instance['title']) : '';
            
            $instance['sub_title'] = ( isset( $new_instance['sub_title'])) ? sanitize_text_field($new_instance['sub_title']) : '';
            
            $instance['bg_image'] = esc_url_raw($new_instance['bg_image']);

            if (isset($new_instance['features']))

            {
                foreach($new_instance['features'] as $feature)
                {

                   $feature['page_ids'] = absint($feature['page_ids']);
                   
               }

               $instance['features'] = $new_instance['features'];
           }

           return $instance;

       }

       public function form( $instance )
       {
        $instance  = wp_parse_args( (array )$instance, $this->defaults() );
        $title     = esc_attr( $instance['title'] );
        $subtitle  = esc_attr( $instance['sub_title'] );
        $bgimage   = esc_url( $instance['bg_image'] );
        $features  = ( ! empty( $instance['features'] ) ) ? $instance['features'] : array(); 

        ?>
        <span class="ct-education-way-additional">

           <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
                <?php esc_html_e('Title', 'education-way'); ?>
            </label><br/>
            <input type="text" name="<?php echo esc_attr( $this->get_field_name('title') ); ?>" class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title') ); ?>" value="<?php echo $title; ?>">
        </p>
        <hr>
        <p>
            <label for="<?php echo esc_attr( $this->get_field_id('sub_title') ); ?>">
                <?php esc_html_e( 'Sub Title', 'education-way'); ?>
            </label><br/>
            <input type="text" name="<?php echo esc_attr($this->get_field_name('sub_title')); ?>" class="widefat" id="<?php echo esc_attr($this->get_field_id('sub_title')); ?>" value="<?php echo $subtitle; ?>">
        </p>
        <hr>

        <label><strong><?php _e( 'Select Pages', 'education-way' ); ?>:</strong></label>
        <br/>
        <em><?php _e( 'Select Page and Remove. Please do not forget to add Featured Image and Excerct on selected pages.', 'education-way' ); ?></em> <br/>
        <?php

        if  ( count( $features ) >=  1 && is_array( $features ) )
        {

          $selected = $features['main'];

      }

      else
      {
       $selected = "";
   }

   $repeater_id   = $this->get_field_id( 'features' ).'-main';
   $repeater_name = $this->get_field_name( 'features'). '[main]';

   $args = array(
    'selected'          => $selected,
    'name'              => $repeater_name,
    'id'                => $repeater_id,
    'class'             => 'widefat ct-select',
    'show_oction_none'  => __( 'Select Page', 'education-way'),
            'oction_none_value' => 0 // string
        );
   wp_dropdown_pages( $args );
   
   $counter = 0;
   if ( count( $features ) > 0 ) 
   {
    foreach( $features as $feature ) 
    {

        if ( isset( $feature['page_ids'] ) ) 
            { ?>
                <div class="ct-education-way-sec">
                    <?php
                    $repeater_id     = $this->get_field_id( 'features' ) .'-'. $counter.'-page_ids';
                    $repeater_name   = $this->get_field_name( 'features' ) . '['.$counter.'][page_ids]';
                    $args = array(
                        'selected'          => $feature['page_ids'],
                        'name'              => $repeater_name,
                        'id'                => $repeater_id,
                        'class'             => 'widefat ct-select',
                        'show_oction_none'  => __( 'Select Page', 'education-way'),
                                'oction_none_value' => 0 // string
                            );
                    wp_dropdown_pages( $args );
                    ?>
                    <a class="ct-education-way-remove delete"><?php esc_html_e('Remove Section','education-way') ?></a>
                </div>
                <?php
                $counter++;
            }
        }
    }

    ?>

</span>
<a class="ct-education-way-add button" data-id="education_way_testimonial_widget" id="<?php echo $repeater_id; ?>"><?php _e('Add New Section', 'education-way'); ?></a> 
<hr>
<p>
    <label for="<?php echo $this->get_field_id('bg_image'); ?>">
        <?php _e( 'Select Background Image', 'education-way' ); ?>:
    </label>
    <span class="img-preview-wrap" <?php  if ( empty( $bgimage ) ){ ?> style="display:none;" <?php  } ?>>
        <img class="widefat" src="<?php echo esc_url( $bgimage ); ?>" alt="<?php esc_attr_e( 'Image preview', 'education-way' ); ?>"  />
    </span><!-- .img-preview-wrap -->
    <input type="text" class="widefat" name="<?php echo $this->get_field_name('bg_image'); ?>" id="<?php echo $this->get_field_id('bg_image'); ?>" value="<?php echo esc_url( $bgimage ); ?>" />
    <input type="button" id="custom_media_button" value="<?php esc_attr_e( 'Upload Image', 'education-way' ); ?>" class="button media-image-upload" data-title="<?php esc_attr_e( 'Select Background Image','education-way'); ?>" data-button="<?php esc_attr_e( 'Select Background Image','education-way'); ?>"/>
    <input type="button" id="remove_media_button" value="<?php esc_attr_e( 'Remove Image', 'education-way' ); ?>" class="button media-image-remove" />
</p>

<?php
}
}

}

add_action( 'widgets_init', 'education_way_testimonial_widget' );

function education_way_testimonial_widget()
{
  register_widget( 'Education_Way_Testimonial_Widget' );
}