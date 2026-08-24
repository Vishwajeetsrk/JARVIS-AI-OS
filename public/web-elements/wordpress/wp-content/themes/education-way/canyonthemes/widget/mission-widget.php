<?php
if (!class_exists( 'Education_Way_Our_mission_Widget' )) {
    class Education_Way_Our_mission_Widget extends WP_Widget
    {
        private function defaults()
        {
            $defaults = array(
                'page_id'           => '',
                'button-text'       => esc_html__('Learn More','education-way'),
                'button-text-link'  => '#',
                'no_of_words'       => 30,
            );
            return $defaults;
        }

        public function __construct()
        {
            parent::__construct(
                'education-way-our-mission-widget',
                 esc_html__('CT: Our Misson Widget', 'education-way'),
                 array('description' => esc_html__(' CT: Our Mission Widget', 'education-way'))
            );
        }

        public function widget($args, $instance)
        {

            if ( !empty($instance ) ) {
                
                $instance    = wp_parse_args((array)$instance, $this->defaults());
                
                $page_id     = absint($instance['page_id']);
                
                $button_text = esc_html($instance['button-text']);
                
                $button_url  = esc_url($instance['button-text-link']);
                
                $no_of_words = absint($instance['no_of_words']);
                
                echo $args['before_widget'];
                
                $education_way_page_args = array(
                    'page_id'        => $page_id,
                    'posts_per_page' => 1,
                    'post_type'      => 'page',
                    'no_found_rows'  => true,
                    'post_status'    => 'publish'
                );
                $mission_query = new WP_Query($education_way_page_args);
                if ($mission_query->have_posts()):
                    while ($mission_query->have_posts()):$mission_query->the_post();
                        if (has_post_thumbnail()) {
                            $image_id   = get_post_thumbnail_id();
                            $image_url  = wp_get_attachment_image_src($image_id, 'full', true);
                            $image_path = $image_url[0];
                        }

                        if (empty($image_path)) {
                            $value = 12;
                        }
                        else
                        {
                            $value = 6;
                        }
                        ?>

                        <!-- Start Mission Section -->
                        <section class="mission">
                            <div class="container">
                                <div class="row">
                                    <div class="mission-box">
                                        <div class="row">
                                            <div class="col-md-<?php echo $value; ?>">
                                                <div class="mission-content p-tb-20 m-b-40">
                                                    <h2><?php the_title(); ?></h2>
                                                    <p><?php echo esc_html( wp_trim_words(get_the_content(),$no_of_words) ); ?></p>
                                                    <a href="<?php echo $button_url; ?>" class="btn btn-default"> <?php echo $button_text; ?> </a>
                                                </div>
                                            </div><!-- col-md-6 -->
                                         <?php if (!empty($image_path)) { ?>
                                                <div class="col-md-6">
                                                    <img src="<?php echo $image_path;?>" class="img-responsive">
                                                </div><!-- col-md-6 -->
                                        <?php } ?>
                                        </div>
                                    </div>
                                </div><!-- .row -->
                            </div><!-- .container -->
                        </section>
                        <!-- End Mission Section -->
                        <?php
                    endwhile;
                endif;
                wp_reset_postdata();
                echo $args['after_widget'];
            }
        }

        public function update($new_instance, $old_instance)
        {
            $instance                     = $old_instance;
            $instance['page_id']          = absint($new_instance['page_id']);
            $instance['button-text']      = sanitize_text_field($new_instance['button-text']);
            $instance['button-text-link'] = esc_url_raw($new_instance['button-text-link']);
            $instance['no_of_words']      = absint($new_instance['no_of_words']);
            return $instance;
        }

        public function form($instance)
        {
            $instance    = wp_parse_args((array)$instance, $this->defaults());
            $page_id     = absint($instance['page_id']);
            $button_text = esc_html($instance['button-text']);
            $button_url  = esc_url($instance['button-text-link']);
            $no_of_words =  absint($instance['no_of_words']);
            
            ?>

            <p>
                <label for="<?php echo esc_attr($this->get_field_id('page_id')); ?>">
                    <?php esc_html_e( 'Select Page', 'education-way' ); ?>
                </label><br/>
                <?php
                /* see more here https://codex.wordpress.org/Function_Reference/wp_dropdown_pages*/
                $args = array(
                    'selected'         => $page_id,
                    'name'             => $this->get_field_name( 'page_id' ),
                    'id'               => $this->get_field_id( 'page_id' ),
                    'class'            => 'widefat',
                    'show_oction_none' => esc_attr__( 'Select Page', 'education-way' )
                );

                wp_dropdown_pages($args);
                
                ?>
            </p>
            <hr>
            
            <p>
                <label for="<?php echo esc_attr($this->get_field_id('button-text')); ?>">
                    <?php esc_html_e('Button Text', 'education-way'); ?>
                </label><br/>
                
                <input id="<?php echo esc_attr( $this->get_field_id( 'button-text' )); ?>" type="text" name="<?php echo esc_attr( $this->get_field_name( 'button-text' ) ); ?>" class="widefat" value="<?php echo $button_text; ?>">
            </p>
            <hr>
         
            <p>
                <label for="<?php echo esc_attr($this->get_field_id('button-text-link')); ?>"><?php esc_html_e('Button Link', 'education-way'); ?></label><br/>
                <input type="text" name="<?php echo esc_attr( $this->get_field_name('button-text-link') ); ?>" class="widefat"  id="<?php echo esc_attr( $this->get_field_id('button-text-link')); ?>"  value="<?php echo $button_url; ?>">
            </p>
            <hr>
            <p>
                <label for="<?php echo esc_attr($this->get_field_id('no_of_words')); ?>"><?php esc_html_e('Number of Words', 'education-way'); ?></label><br/>
                <input type="number" name="<?php echo esc_attr( $this->get_field_name('no_of_words') ); ?>" class="widefat"  id="<?php echo esc_attr( $this->get_field_id('no_of_words')); ?>"  value="<?php echo $no_of_words; ?>">
            </p>
            
            <?php
        }
    }
}

add_action( 'widgets_init', 'education_way_our_mission_widget' );

function education_way_our_mission_widget()
{
    register_widget( 'Education_Way_Our_mission_Widget' );

}















