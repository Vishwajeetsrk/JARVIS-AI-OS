<?php
/**
 * Class for adding Recent Post Widget
 *
 * @package Canyon Themes
 * @subpackage Canyon
 * @since 1.0.0
 */
if (!class_exists('Education_Way_Latest_Post_Widget')) {
 
    class Education_Way_Latest_Post_Widget extends WP_Widget
 
    {
        /*defaults values for fields*/
        private function defaults() 
        {
            $defaults       = array(
                 'title'      => esc_html__('Latest Posts', 'education-way'),
                 'no_of_post' => 4,
                 'show_date'  => 1
            );

            return $defaults;
        }

     public function __construct()
        {
            parent::__construct(
                /* Widget Unique ID */
                'education-way-latest-post-widget',
                 /* Widget Name */
                esc_html__( 'CT: Latest Widget For Footer', 'education-way' ),
                 /* Widget description */
                array( 'description' => esc_html__( 'CT: Latest Widget For Footer', 'education-way' ) )
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
        public function widget( $args, $instance )
        {

            if ( !empty( $instance ) ) {
                
                $instance     = wp_parse_args( (array ) $instance, $this->defaults() );
                
                echo $args['before_widget'];
                $title        = apply_filters('widget_title', !empty($instance['title']) ? esc_html($instance['title']) : '', $instance, $this->id_base);
                $show_date    = absint( $instance['show_date'] ? 1 : 0);
                $no_of_post   = absint( $instance['no_of_post']);
                $query_args   = array('post_type'=>'post','posts_per_page'=>$no_of_post-1,'order'=>'desc');
                $recent_posts = new WP_Query($query_args);
               if ( $recent_posts->have_posts() ):
                ?>
                <!-- Start Blog Section -->
              
                  <div class="footer-widgets">
                    <div class="widgets-title">
                      <h4> <?php echo $title; ?> </h4>
                    </div><!-- .widgets-title -->
                        <ul class="latest-news">
                            <?php
                             while ( $recent_posts->have_posts() ):
                                  $recent_posts->the_post();
                            ?>
                              <li>
                                <span class="thumbnail-img">
                                 <?php the_post_thumbnail( 'thumbnail', array( 'class' => 'img-responsive' ) ); ?>
                                </span>
                                <div class="thumbnail-content">
                                  <h5><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
                                  <span class="post-date"><?php echo esc_html( get_the_date (' d M Y' ) ) ?></span>
                                </div><!-- .thumbnail-content -->
                              </li>
                          <?php endwhile; wp_reset_postdata();?>
                        </ul>
                  </div><!-- .footer-widgets -->
              
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
        public function update($new_instance, $old_instance)
        {
            $instance               = $old_instance;
            $instance['title']      = sanitize_text_field( $new_instance['title'] );
            $instance['show_date']  = isset($new_instance['show_date']) ? 1:0;
            $instance['no_of_post'] = absint( $new_instance['no_of_post'] );

            return $instance;

        }
        /*Widget Backend*/
        public function form( $instance )
        {
            $instance  = wp_parse_args((array)$instance, $this->defaults());
            $show_date = absint( $instance['show_date'] );

            ?>

            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('title') ); ?>"><strong><?php _e( 'Title', 'education-way' ); ?></strong></label><br />
                <input type="text" name="<?php echo esc_attr( $this->get_field_name('title') ); ?>" id="<?php echo esc_attr( $this->get_field_id('title')); ?>" value="<?php
                 if (isset($instance['title']) && $instance['title'] != '' ) :
                   echo esc_attr($instance['title']);
                  endif;

                  ?>" class="widefat" />
            </p>

            <p>
                 <label for="<?php echo $this->get_field_id('no_of_post'); ?>"><strong><?php _e( 'Number of posts to show:', 'education-way' ); ?></strong></label><br />
                 <input type="number" name="<?php echo $this->get_field_name('no_of_post'); ?>" id="<?php echo $this->get_field_id('no_of_post'); ?>" value="<?php 
                   if (isset($instance['no_of_post']) && $instance['no_of_post'] != '' ) :
                    echo esc_html( $instance['no_of_post'] ); 
                    else :
                      echo "2";
                 endif;
                 ?>" class="widefat" />
                 <span class="small"></span>
            </p>
             
            <p>
                <input class="widefat" id="<?php echo  esc_attr( $this->get_field_id( 'show_date' ) ); ?>" name="<?php echo  esc_attr( $this->get_field_name( 'show_date' ) ); ?>" type="checkbox" value="<?php echo esc_attr( $show_date ); ?>" <?php checked( 1, esc_attr( $show_date ), 1 ); ?>/>
                <label for="<?php echo  esc_attr( $this->get_field_id( 'active_slider' ) ); ?>"><strong><?php echo esc_html__( 'Show Post Date' ,'education-way'); ?></strong></label>

            </p>

            <?php
        }
    }
}

add_action('widgets_init', 'education_way_latest_post_widget');

function education_way_latest_post_widget()

{
    register_widget('Education_Way_Latest_Post_Widget');

}