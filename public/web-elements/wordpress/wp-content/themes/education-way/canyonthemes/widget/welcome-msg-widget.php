<?php
if (!class_exists( 'Education_Way_Welcome_Msg_Widget' ) ) {
    
    class Education_Way_Welcome_Msg_Widget extends WP_Widget
    
    {
        private function defaults()
        {
            $defaults             = array(
                'page_id'         => 0,
                'character_limit' => 25,
                'title'       => esc_html__('About Education Way', 'education-way'),
                'read_more'       => esc_html__('Read More', 'education-way'),
                'get_us'          => ''
            );

            return $defaults;
        }

        public function __construct()
        {
            parent::__construct(
                'education-way-welcome-msg-widget',
                esc_html__( 'CT: Welcome Message Widget', 'education-way' ),
                array( 'description' => esc_html__( 'CT: Welcome Message Widget', 'education-way' ) )
            );
        }

        public function widget( $args, $instance )
        {

            if ( !empty( $instance ) ) {
                $instance        = wp_parse_args( (array )$instance, $this->defaults() );
                $page_id         = absint($instance['page_id']);
                $limit_character = absint( $instance['character_limit'] );
                $title           = esc_html( $instance['title'] );
                $read_more       = esc_html( $instance['read_more'] );
                $get_us          = wp_kses_post( $instance['get_us'] );
                echo $args['before_widget'];
                if ( !empty( $page_id ) ) {
                    $education_way_page_args     = array(
                        'page_id'        => $page_id,
                        'posts_per_page' => 1,
                        'post_type'      => 'page',
                        'no_found_rows'  => true,
                        'post_status'    => 'publish'
                    );

                  $welcome_query = new WP_Query( $education_way_page_args );
                    if ($welcome_query->have_posts()): ?>
                       
                     <!-- Start About Section -->
                        <section class="bg-about">
                            <div class="container">
                                <div class="row">
                                    <div class="welcome">
                                        <div class="row">
                                        <?php while ($welcome_query->have_posts()):
                                               $welcome_query->the_post(); ?>
                           
                                                <div class="col-md-8">
                                                    <div class="welcome-content p-tb-20">
                                                        <h2><?php echo $title; ?></h2>
                                                        <p><?php echo 
                                                          force_balance_tags( html_entity_decode( wp_trim_words( htmlentities( wpautop(get_the_content()) ), $limit_character) ) );
                                                         ?></p>
                                                       <?php if(!empty($read_more)){ ?>
                                                            <a href="<?php echo get_permalink(); ?>" class="btn btn-default"><?php echo esc_html($read_more); ?></a>
                                                          <?php } ?>  

                                                    </div>
                                                </div><!-- .col-md-8 -->
                                                <div class="col-md-4">
                                                    <div class="call-back">
                                                       <?php echo do_shortcode($get_us);?>
                                                        
                                                    </div>
                                                </div><!-- .col-md-4 -->
                                           
                                            <?php endwhile;  wp_reset_postdata(); ?>
                                        </div>
                                    </div>
                                </div><!-- .row -->
                            </div><!-- .container -->
                        </section>
                        <!-- End About  Section -->

                   <?php endif;          
                    echo $args['after_widget'];
                }
            }
        }

        public function update( $new_instance, $old_instance )
        {
            $instance                    = $old_instance;
            $instance['page_id']         = absint($new_instance['page_id']);
            $instance['character_limit'] = absint( $new_instance['character_limit'] );
            $instance['title']           = sanitize_text_field( $new_instance['title'] );
            $instance['read_more']       = sanitize_text_field( $new_instance['read_more'] );
            $instance['get_us']          = wp_kses_post( $new_instance['get_us'] );

            return $instance;
        }

        public function form( $instance )
        
        {
            $instance        = wp_parse_args((array )$instance, $this->defaults() );
            $page_id         = absint($instance['page_id']);
            $limit_character = absint( $instance['character_limit'] );
            $title       = esc_attr( $instance['title'] );
            $read_more       = esc_attr( $instance['read_more'] );
            $get_us          = esc_attr( $instance['get_us'] );

            ?>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('title')); ?>"><strong><?php esc_html_e('Title', 'education-way'); ?></strong></label><br/>
                <input type="text" name="<?php echo esc_attr( $this->get_field_name('title')); ?>" class="education-way-cons" id="<?php echo esc_attr($this->get_field_id('sub_title')); ?>" value="<?php echo $title ?>">
            </p>

            <p>
                <label for="<?php echo esc_attr($this->get_field_id('page_id')); ?>"><strong><?php esc_html_e('Select Page', 'education-way'); ?></strong></label><br/>

                <?php
                /* see more here https://codex.wordpress.org/Function_Reference/wp_dropdown_pages*/
                $args = array(
                    'selected'         => $page_id,
                    'name'             => esc_attr( $this->get_field_name('page_id') ),
                    'id'               => esc_attr( $this->get_field_id('page_id') ),
                    'class'            => 'widefat',
                    'show_oction_none' => esc_html__( 'Select Page', 'education-way' ),
                );
                wp_dropdown_pages($args);
                ?>
            </p>
            <hr>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('character_limit')); ?>"><strong><?php esc_html_e('Character Limit', 'education-way'); ?></strong></label><br/>
                <input type="number" name="<?php echo esc_attr( $this->get_field_name('character_limit')); ?>" class="education-way-cons" id="<?php echo esc_attr($this->get_field_id('character_limit')); ?>" value="<?php echo $limit_character ?>">
            </p>
           <hr>
           <p>
                <label for="<?php echo esc_attr( $this->get_field_id('read_more')); ?>"><strong><?php esc_html_e('Read More', 'education-way'); ?></strong></label><br/>
                <input type="text" name="<?php echo esc_attr( $this->get_field_name('read_more')); ?>" class="education-way-cons" id="<?php echo esc_attr($this->get_field_id('read_more')); ?>" value="<?php echo $read_more ?>">
            </p>
           <hr>
            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('get_us')); ?>"><strong><?php esc_html_e('Get Us Shortcode', 'education-way'); ?></strong></label>
                 <br/>
                 <em><?php esc_html_e('Use Contact Form 7 Shortcode', 'education-way'); ?></em> 
                <br/>
                <input type="text" name="<?php echo esc_attr( $this->get_field_name('get_us')); ?>" class="education-way-cons" id="<?php echo esc_attr($this->get_field_id('get_us')); ?>" value="<?php echo $get_us ?>">
            </p>
            <?php
        }
    }

}

add_action( 'widgets_init', 'education_way_welcome_msg_widget' );

function education_way_welcome_msg_widget()
{
    register_widget( 'Education_Way_Welcome_Msg_Widget' );

}