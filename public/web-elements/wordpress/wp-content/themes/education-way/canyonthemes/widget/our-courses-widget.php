<?php
if (!class_exists( 'Education_Way_Our_Work_Widget' ) ) {

    class Education_Way_Our_Work_Widget extends WP_Widget
    {

        private function defaults()
        {

            $defaults = array(
                'title'                              => esc_html__( 'Our Courses', 'education-way' ),
                'sub_title'                          => esc_html__( 'Check the latest Courses we offer.', 'education-way' ),
                'education_way_portfolio_filter_all' => esc_html__( 'All Courses', 'education-way' ),
                'cat_id'                             => array(),
                'featured_image_size'                => 'full',
                'post_column'                        => 3,
                'post_number'                        => 6,
                'view_all_text'                      => esc_html__( 'View All Courses', 'education-way' ),
                'view_all_button_link'               => "",
            );
            return $defaults;
        }


        public function __construct()
        {
            parent::__construct(
                'education-way-our-work-widget',

                esc_html__( 'CT: Our Courses Widget', 'education-way' ),

                array('description' => esc_html__( 'CT: Our Courses Widget', 'education-way' ) )
            );
        }

        public function widget( $args, $instance )
        {

            $instance = wp_parse_args( (array) $instance, $this->defaults() );
            if ( !empty( $instance ) ) {

                $a1 = array(8,11,12,9);

                if($a1 == $instance['cat_id'] )
                {

                    $instance['cat_id'] = array(3,4,5,6);

                }     
                $post_number                = absint($instance['post_number']);
                $column_number              = absint($instance['post_column']);
                $featured_image             = esc_html($instance['featured_image_size']);
                $title                      = apply_filters('widget_title', !empty($instance['title']) ?esc_html($instance['title']) : '', $instance, $this->id_base);
                $sub_title                  = esc_html($instance['sub_title']);
                $education_way_ad_title     = esc_html($instance['education_way_portfolio_filter_all']);
                $education_way_selected_cat = '';
                if (!empty($instance['cat_id'])) {
                    $education_way_selected_cat = education_way_sanitize_multiple_category($instance['cat_id']);
                    if (is_array($education_way_selected_cat[0])) {
                        $education_way_selected_cat = $education_way_selected_cat[0];
                    }
                }

                $view_all_text              = esc_html($instance['view_all_text']);

                $view_all_button_url        = esc_url($instance['view_all_button_link']);

                echo $args['before_widget'];

                $sticky                   = get_option( 'sticky_posts' );
                $education_way_cat_post_args      = array(
                    'posts_per_page'      => $post_number,
                    'no_found_rows'       => true,
                    'post_status'         => 'publish',
                    'ignore_sticky_posts' => true,
                    'post__not_in'        => $sticky,
                );
                if (-1 != $education_way_cat_post_args)
                {

                    $education_way_cat_post_args['category__in'] = $education_way_selected_cat;

                }

                $courses_filter_query = new WP_Query($education_way_cat_post_args);

                ?>

                <!-- Start Course Section -->
                <section class="course-content">
                    <div class="container">
                        <div class="row">
                            <div class="our-courses">
                                <?php
                                if ( !empty ( $title ) || !empty( $sub_title ) ) 
                                {
                                    ?>
                                    <div class="section-header text-center">
                                        <h2><?php echo $title; ?></h2>
                                        <span class="double-border"></span>
                                        <p><?php echo $sub_title; ?></p>
                                    </div><!-- .section-header -->
                                <?php } ?> 
                                <div id="filters" class="button-group ">  
                                  <?php
                                  
                                  if (!empty( $education_way_ad_title ) ) 
                                  {
                                    ?>  
                                    <button class="button is-checked" data-filter="*"><?php echo $education_way_ad_title  ?></button>
                                <?php } 

                                if (!empty( $education_way_selected_cat ) && is_array( $education_way_selected_cat ) ) 
                                {
                                    foreach ( $education_way_selected_cat as $education_way_selected_single_cat ) 
                                    {
                                        ?>         
                                        <button class="button" data-filter=".<?php echo esc_attr( $education_way_selected_single_cat ); ?>"><?php echo esc_html( get_cat_name($education_way_selected_single_cat ) ); ?></button>
                                        <?php
                                    }
                                }    

                                ?>
                                
                            </div>
                            
                            <div class="course-items">
                              
                                <?php

                                if ( $courses_filter_query->have_posts()):

                                    while ($courses_filter_query->have_posts()):$courses_filter_query->the_post();

                                        if ( 2 == $column_number ) 
                                            
                                        {
                                            $education_way_column = "col-md-6";
                                        }
                                        
                                        elseif ( 3 == $column_number )
                                            
                                        {
                                            $education_way_column = "col-md-4";
                                        } 

                                        elseif( 4 == $column_number )
                                           
                                        {
                                           
                                            $education_way_column = 'col-md-3';
                                        }
                                        
                                        else

                                        {
                                            
                                          $education_way_column = 'col-md-12';
                                          
                                      }

                                      $categories = get_the_category( get_the_ID() );
                                      
                                      if ( !empty ( $categories) ) {
                                        
                                        foreach ( $categories as $category ) 
                                        {
                                            
                                            $education_way_column .= ' ' . $category->term_id;
                                            
                                        }
                                    }
                                    
                                    ?>

                                    <div class="item <?php echo $education_way_column; ?>" data-category="transition">
                                        <div class="item-inner">
                                            <?php    
                                            if ( has_post_thumbnail() ) 
                                            {
                                                
                                                $image_id   = get_post_thumbnail_id();
                                                
                                                $image_url  = wp_get_attachment_image_src($image_id, $featured_image, true);
                                                
                                                $image_path = $image_url[0];
                                                ?>

                                                <div class="course-img">
                                                    <div class="course-overlay"></div><!-- .overlay-project -->
                                                    <img src="<?php echo $image_path; ?>" alt="recent-project-img-1">
                                                    <ul class="course-link">
                                                        <li class="c-link"><a href="<?php the_permalink(); ?>"><i class="fa fa-link" aria-hidden="true"></i></a></li>
                                                        <li class="course-plus"><a href="<?php echo $image_path; ?>" data-rel="lightcase:myCollection"><i class="fa fa-search-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div><!-- /.portfolio-img -->

                                            <?php } ?>    



                                            <div class="our-course-content">
                                                <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                            </div><!-- .latest-port-content -->

                                        </div><!-- .item-inner -->
                                    </div><!-- .items -->
                                    
                                    <?php
                                    
                                endwhile;
                            endif;
                            wp_reset_postdata();
                            ?>

                            


                        </div><!-- .isotope-items -->
                        <?php

                        if(!empty($view_all_text))
                        {

                            ?>
                            <div class="col-sm-12 col-md-12 m-t-30 text-center">
                                <a href="<?php echo $view_all_button_url; ?>" class="btn btn-default btn-lg"><?php echo $view_all_text; ?></a>
                            </div>
                        <?php } ?>

                    </div><!-- .recent-project -->
                </div><!-- .row -->
            </div><!-- .container -->
        </section>
        <!-- End Recent Project Section -->
        <?php
        echo $args['after_widget'];
    }
}

public function update( $new_instance, $old_instance )
{
    $instance                               = $old_instance;
    $instance['cat_id']                     = (isset($new_instance['cat_id'])) ? education_way_sanitize_multiple_category( $new_instance['cat_id'] ) : array();
    $instance['education_way_portfolio_filter_all'] = sanitize_text_field($new_instance['education_way_portfolio_filter_all']);
    $instance['title']                      = sanitize_text_field( $new_instance['title'] );
    $instance['sub_title']                      = sanitize_text_field( $new_instance['sub_title'] );
    $instance['post_number']                = absint( $new_instance['post_number'] );
    $instance['post_column']                = absint( $new_instance['post_column']);
    $instance['featured_image_size']        = sanitize_text_field($new_instance['featured_image_size']);
    $instance['view_all_text']              = sanitize_text_field($new_instance['view_all_text']);
    $instance['view_all_button_link']       = esc_url_raw($new_instance['view_all_button_link']);

    return $instance;
}

public function form( $instance )

{

    $instance                   = wp_parse_args( (array )$instance, $this->defaults() );
    $post_number                = absint($instance['post_number']);
    $column_number              = absint($instance['post_column']);
    $featured_image_size        = esc_attr($instance['featured_image_size']);
    $title                      = esc_attr($instance['title']);
    $sub_title                  = esc_attr($instance['sub_title']);
    $view_all_text              = esc_attr($instance['view_all_text']);
    $view_all_button_link       = esc_attr($instance['view_all_button_link']);
    $education_way_ad_title     = esc_attr($instance['education_way_portfolio_filter_all']);
    $education_way_selected_cat = '';

    $a1 = array(8,11,12,9);

    if($a1 == $instance['cat_id'] )
    {

        $instance['cat_id'] = array(3,4,5,6);

    } 

    if (!empty($instance['cat_id'])) 
    {
        $education_way_selected_cat     = $instance['cat_id'];

        if (is_array($education_way_selected_cat[0])) 

        {
            $education_way_selected_cat = $education_way_selected_cat[0];
        }
    }
    ?>

    <p>

        <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><strong><?php esc_html_e('Title:', 'education-way'); ?></strong></label>
        <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo $title; ?>"/>
    </p>

    <p>
        <label for="<?php echo esc_attr( $this->get_field_id('sub_title')); ?>">
            <?php esc_html_e('Sub Title', 'education-way'); ?>
        </label><br/>
        <input class="widefat" id="<?php echo esc_attr($this->get_field_id('sub_title')); ?>" name="<?php echo esc_attr($this->get_field_name('sub_title')); ?>" type="text" value="<?php echo $sub_title; ?>"/>
    </p>

    <p>
        <label for="<?php echo esc_attr($this->get_field_id('education_way_portfolio_filter_all')); ?>"><?php esc_html_e('Our Work Filter All Text', 'education-way'); ?></label>
        <input class="widefat" id="<?php echo esc_attr($this->get_field_id('education_way_portfolio_filter_all')); ?>" name="<?php echo esc_attr($this->get_field_name('education_way_portfolio_filter_all')); ?>" type="text" value="<?php echo $education_way_ad_title; ?>"/>
    </p>

    <p>
        <label for="<?php echo esc_attr($this->get_field_id('cat_id')); ?>"><strong><?php esc_html_e('Select Category', 'education-way'); ?></strong></label>
        <select class="widefat" name="<?php echo $this->get_field_name('cat_id'); ?>[]" id="<?php echo esc_attr($this->get_field_id('post_number')); ?>" multiple="multiple">
            <?php
            $option        = '';

            $categories    = get_categories();

            if ( $categories ) {

                foreach ($categories as $category) {

                    $result = in_array($category->term_id, $education_way_selected_cat) ? 'selected=selected' : '';

                    $option .= '<option value="' . esc_attr($category->term_id) . '"' . esc_attr($result) . '>';

                    $option .= esc_html($category->cat_name);

                    $option .= esc_html(' (' . $category->category_count . ')');

                    $option .= '</option>';
                }
            }
            echo $option;
            ?>
        </select>
    </p>
    <hr>

    <p>
        <label for="<?php echo esc_attr($this->get_field_id('post_number')); ?>"><strong><?php esc_html_e('Number of Posts:', 'education-way'); ?></strong></label>
        <input class="widefat" id="<?php echo esc_attr($this->get_field_id('post_number')); ?>" name="<?php echo esc_attr($this->get_field_name('post_number')); ?>" type="number" value="<?php echo $post_number; ?>" min="1"/>
    </p>

    <p>
        <label for="<?php echo esc_attr($this->get_field_id('post_column')); ?>"><strong><?php esc_html_e('Number of Columns:', 'education-way'); ?></strong></label>
        <?php
        $this->dropdown_post_columns(
            array(
                'id'       => esc_attr($this->get_field_id('post_column')),
                'name'     => esc_attr($this->get_field_name('post_column')),
                'selected' => $column_number
            )
        );
        ?>
    </p>
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('featured_image_size')); ?>"><strong><?php esc_html_e('Select Image Size:', 'education-way'); ?></strong></label>
        <?php
        $this->dropdown_image_sizes(array(
            'id'       => esc_attr($this->get_field_id('featured_image_size')),
            'name'     => esc_attr($this->get_field_name('featured_image_size')),
            'selected' => $featured_image_size,
        )
    );
    ?>
</p>
<hr>
<p>
    <label for="<?php echo esc_attr($this->get_field_id('view_all_text')); ?>"><?php esc_html_e('View All Courses Text', 'education-way'); ?></label>
    <input class="widefat" id="<?php echo esc_attr($this->get_field_id('view_all_text')); ?>" name="<?php echo esc_attr($this->get_field_name('view_all_text')); ?>" type="text" value="<?php echo $view_all_text; ?>"/>
</p>
<hr>
<p>
    <label for="<?php echo esc_attr($this->get_field_id('view_all_button_link')); ?>"><?php esc_html_e('View All Courses Button Link', 'education-way'); ?></label>
    <input class="widefat" id="<?php echo esc_attr($this->get_field_id('view_all_button_link')); ?>" name="<?php echo esc_attr($this->get_field_name('view_all_button_link')); ?>" type="text" value="<?php echo $view_all_button_link; ?>"/>
</p>

<?php

}


function dropdown_post_columns( $args )
{
    $defaults      = array(
        'id'       => '',
        'name'     => '',
        'selected' => 0,
    );

    $r = wp_parse_args($args, $defaults);
    $output = '';

    $choices = array(
        2 => esc_html__( '2', 'education-way' ),
        3 => esc_html__( '3', 'education-way' ),
        4 => esc_html__( '4', 'education-way' ),
    );

    if ( !empty( $choices ) ) {

        $output = "<select name='" . esc_attr($r['name']) . "' id='" . esc_attr($r['id']) . "'>\n";

        foreach ($choices as $key => $choice) {
            $output .= '<option value="' . esc_attr($key) . '" ';
            $output .= selected($r['selected'], $key, false);
            $output .= '>' . esc_html($choice) . '</option>\n';
        }

        $output .= "</select>\n";

    }

    echo $output;
}

function dropdown_image_sizes($args)
{
    $defaults = array(
        'id'       => '',
        'class'    => 'widefat',
        'name'     => '',
        'selected' => 0,
    );

    $r = wp_parse_args($args, $defaults);
    $output = '';

    $choices = array(
        'thumbnail' => esc_html__('Thumbnail', 'education-way'),
        'medium'    => esc_html__('Medium', 'education-way'),
        'large'     => esc_html__('Large', 'education-way'),
        'full'      => esc_html__('Full', 'education-way'),
    );

    if (!empty($choices)) {

        $output = "<select name='" . esc_attr($r['name']) . "' id='" . esc_attr($r['id']) . "' class='" . esc_attr($r['class']) . "'>\n";

        foreach ($choices as $key => $choice) 
        {
            $output .= '<option value="' . esc_attr($key) . '" ';
            $output .= selected($r['selected'], $key, false);
            $output .= '>' . esc_html($choice) . '</option>\n';
        }

        $output .= "</select>\n";
    }

    echo $output;
}

}
}

add_action( 'widgets_init', 'education_way_our_work_widget' );
function education_way_our_work_widget()
{
    register_widget( 'Education_Way_Our_Work_Widget' );

}