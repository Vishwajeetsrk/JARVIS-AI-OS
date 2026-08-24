<?php
if (!class_exists( 'Education_way_Plus_Widget' ) ) {
    class Education_way_Plus_Widget extends WP_Widget
    {
        private function defaults()
        {
            $defaults             = array(
                'counter_title'    => '',
                'counter_icon'     => '',
                'counter_value'    => '',
                'background-image' => '',
            );

            return $defaults;
        }

        public function __construct()
        {
            parent::__construct(
                'education-way-counter',
                esc_html__( 'CT: Counter Widget', 'education-way' ),
                array( 'description' => esc_html__( 'CT: Counter Widget', 'education-way' ) )
            );
        }

        public function widget( $args, $instance )
        {

            if ( !empty( $instance ) )
            {
                $instance = wp_parse_args( (array )$instance, $this->defaults() );
                $bgimage  = esc_attr($instance[ 'background-image']);

                $features = ( ! empty( $instance['features'] ) ) ? $instance['features'] : array();
                echo $args['before_widget']; ?>
           
            <!-- Start Count Section -->
      			<section class="counter-section" style="<?php if(!empty($bgimage)) { ?>background: url(<?php echo $bgimage; ?>)no-repeat center/cover;position: relative;overflow: hidden;<?php } else { ?><?php } ?>">
      				<div class="counter-overlay">
      					<div class="container">
      						<div class="row">
      							<div class="counter-option">
      								<div class="row">

      							        <div class="counter-area counter-option">
      							            <div class="row">
      							            <?php     $count = 0;
      							            foreach ($features as $feature)
      							                {
      							                   if (!empty($feature['counter_title']) && !empty($feature['counter_icon']) && !empty($feature['counter_value']))
      							                    {
      							                        $count = $count + 1;
      							                    }
      							                }

      							                    foreach ($features as $feature)
      							                    {

      							                        $title = $feature['counter_title'];
      							                        $icon  = $feature['counter_icon'];
      							                        $value = $feature['counter_value'];
      							                        $colsm = "";
      							                        if (!empty($icon) && !empty($value) && !empty($title))
      							                        {
      							                            if ($count == 4)
      							                            {
      							                                $colsm = 3;
      							                            } elseif ($count == 3)
      							                            {
      							                                $colsm = 4;
      							                            } elseif ($count == 2)
      							                            {
      							                                $colsm = 6;
      							                            } elseif ($count == 1)
      							                            {
      							                                $colsm = 12;
      							                            }

      							                            ?>
      							                                <div class="col-md-<?php echo esc_attr( $colsm ); ?> col-sm-6">
      							                                    <div class="counter-box counter-items">
      							                                        <div class="counter-icon">
      							                                            <i class="pe-7s-<?php echo esc_attr( $icon ); ?>"></i>
      							                                        </div>
      							                                        <div class="counter-text">
      							                                            <h1><span class="counter"><?php echo esc_html( $value ); ?></span><span>&nbsp;+</span></h1>
      							                                            <h4><?php echo esc_html( $title ); ?></h4>
      							                                        </div>
      							                                    </div>
      							                                </div>
      							                      <?php
      							                          }
      							                        }  
      							                        ?>
      							                    </div><!-- /.row -->
      							                </div><!-- /.service-op -->
                     
      							              <?php
      							                  
      							                } 
      							                ?>
      							            </div><!-- /.row -->
      							        </div><!-- /.service-op -->

      					    </div>
      					</div><!-- /.container -->
      			    </div>
      			</section>
				     
          <?php echo $args['after_widget'];
            }
        
  
        public function update( $new_instance, $old_instance )
        {
            $instance                    = $old_instance;
            $instance['background-image'] = esc_url_raw($new_instance['background-image']);
           foreach($new_instance['features'] as $feature)
           {
                $feature['counter_title'] = sanitize_text_field( $feature['counter_title'] );
                $feature['counter_icon'] = sanitize_text_field( $feature['counter_icon'] );
                $feature['counter_value'] = absint( $feature['counter_value'] );



            }
              $instance['features'] = $new_instance['features'];

              var_dump($instance['features']);
              return $instance;
        }

        public function form( $instance )
        {
            $instance = wp_parse_args((array )$instance, $this->defaults());
            $features = ( ! empty( $instance['features'] ) ) ? $instance['features'] : array();
            $bgimage = esc_attr($instance['background-image']);
            ?>
            

            <p>
                <label for="<?php echo esc_attr( $this->get_field_id('background-image') ); ?>">
                    <strong><?php echo esc_html__('Background Image', 'education-way'); ?></strong>
                </label>
                <br/>
                <?php
                    echo '<img class="custom_media_image" src="' . esc_url($instance['background-image']) . '" style="margin:0;padding:0;max-width:100px;float:left;display:inline-block" /><br />';
                 ?>

                <input type="text" class="widefat custom_media_url " name="<?php echo esc_attr($this->get_field_name('background-image')); ?>" id="<?php echo esc_attr($this->get_field_id('background-image')); ?>" value="<?php echo $bgimage; ?>"/>
                <input type="button" class="button button-primary media-image-upload custom_media_button widefat" id="custom_media_button" name="<?php echo esc_attr($this->get_field_name('background-image')); ?>" value="<?php esc_attr_e('Upload Image', 'education-way') ?>"/>


            </p>
         <span class="education-way-counter-additional">
             <?php
                $c = 0;
                if ( count( $features ) > 0 ) {
                    foreach( $features as $feature )
                    {
                     if ( isset( $feature['counter_title'] ) || isset( $feature['counter_icon'] ) || isset( $feature['counter_value'] ) )
                        {
                            ?>
                               <div class="education-way-counter-section">
                                <p>
                                    <label for="<?php echo $this->get_field_name( 'features' ) . '['.$c.'][counter_title]'; ?>"><?php esc_html_e('Counter Title', 'education-way'); ?></label><br/>
                                    <input type="text" name="<?php echo $this->get_field_name( 'features' ) . '['.$c.'][counter_title]'; ?>" class="education-way-cons" id="<?php echo $this->get_field_id( 'features' ) .'-'. $c.'-counter_title'; ?>" value="<?php echo $feature['counter_title']; ?>">
                                </p>
                                <p>
                                    <label for="<?php echo $this->get_field_name( 'features' ) . '['.$c.'][counter_icon]'; ?>"><?php esc_html_e('Counter Icons ', 'education-way'); ?></label><br/>
                                    <small>
                                          <em>
                                            <?php
                                            esc_html_e( 'Font Awesome Icon Used in Widgets', 'education-way');
                                            printf( __( '%1$sRefer here%2$s for icon class. For example: %3$sfa-desktop%4$s', 'education-way'), '<br /><a href="'.esc_url( 'http://fontawesome.io/cheatsheet/' ).'" target="_blank">','</a>',"<code>","</code>" );
                                            ?>
                                          </em>
                                    </small>
                                    <br/>
                                    <input type="text" name="<?php echo $this->get_field_name( 'features' ) . '['.$c.'][counter_icon]'; ?>" class="education-way-cons" id="<?php echo $this->get_field_id( 'features' ) .'-'. $c.'-counter_icon'; ?>" value="<?php echo $feature['counter_icon']; ?>">
                                </p>
                                <p>
                                    <label for="<?php echo $this->get_field_name( 'features' ) . '['.$c.'][counter_value]'; ?>"><?php esc_html_e(' Counter Value', 'education-way'); ?></label><br/>
                                    <input type="number" name="<?php echo $this->get_field_name( 'features' ) . '['.$c.'][counter_value]'; ?>" class="education-way-cons" id="<?php echo $this->get_field_id( 'features' ) .'-'. $c.'-counter_value'; ?>" value="<?php echo $feature['counter_value']; ?>">
                                </p>
                             <a class="education-way-counter-remove delete"><?php _e('Remove Counter Section','education-way'); ?></a>
                           </div>
            <?php
                        }
                     $c++;
                   }
     } ?>
     </span>
     <a class="education-way-counter-add button"><strong><?php _e('Add New Counter Section','education-way'); ?></strong></a>
<?php
  }

 }
}
add_action( 'widgets_init', 'business_way_counter_widget' );

function business_way_counter_widget()
{
    register_widget( 'Education_way_Plus_Widget' );

}