<?php
/**
* The template for displaying all pages.
* This is the template that displays all pages by default.
* Please note that this is the WordPress construct of pages
* and that other 'pages' on your WordPress site may use a
* different template.
* @link https://codex.wordpress.org/Template_Hierarchy
*
* @package Canyon Themes
* @subpackage Canyon
*/

$education_way_slider_section_option      = education_way_get_option('education_way_homepage_slider_option');
if ( $education_way_slider_section_option != 'hide' ) {

$education_way_slides_data = json_decode( education_way_get_option('education_way_slider_option'));
$post_in = array();

$i=0;
$slides_other_data = array();
if( is_array( $education_way_slides_data ) ){
foreach ( $education_way_slides_data as $slides_data ){
  if( isset( $slides_data->selectpage ) && !empty( $slides_data->selectpage ) ){
      $post_in[] = $slides_data->selectpage;
      $slides_other_data[$slides_data->selectpage] = array(
             'button_text' =>$slides_data->button_text,
             'button_link' =>$slides_data->button_link,
             'optional_button_text' =>$slides_data->optional_button_text,
             'optional_button_link' =>$slides_data->optional_button_link,
             
      );

     $i++; 
  }

  
}
}
if( !empty( $post_in )) :
$education_way_slider_page_args   = array(
  'post__in'            => $post_in,
  'orderby'             => 'post__in',
  'posts_per_page'      => count( $post_in ),
  'post_type'           => 'page',
  'no_found_rows'       => true,
  'post_status'         => 'publish'
);
$slider_query = new WP_Query( $education_way_slider_page_args );
/*The Loop*/
if ( $slider_query->have_posts() ):
  ?> 
 <!-- Start Slider Section -->
  <section class="bg-slider-option">
      <div class="slider-option">
          <div id="slider" class="carousel slide wow fadeInDown" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
               <?php
               if ($i > 1) 
              {

                for ($j = 1; $j <= $i; $j++) 
                {
              ?>
                <li data-target="#slider" data-slide-to="<?php echo esc_attr($j); ?>" class="<?php if ($j == 0) { echo 'active';
                  } ?>"></li>
          <?php }
              }
             ?>

            </ol>

            <!-- Carousel Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
             <?php
              $k = 0;
               while( $slider_query->have_posts() ):$slider_query->the_post();
                  $slides_single_data = $slides_other_data[get_the_ID()];
              ?>
              <div class="item <?php if ($k == 0) { echo "active";} ?>">
                  <div class="slider-item">
                      <?php if ( has_post_thumbnail() ) {
                        $image_url = wp_get_attachment_image_src(get_post_thumbnail_id(), 'full');
                      ?>   
                          <img src="<?php echo $image_url[0]; ?>" alt="<?php the_title_attribute(); ?>">
                <?php } ?>        

                      <div class="slider-content-area">
                          <div class="container">
                              <div class="row">
                                  <div class="col-md-10">
                                      <div class="slider-content">
                                           <h2><?php the_title(); ?></h2>
                                     <p><?php 
                                     
                                          echo wp_trim_words(get_the_content(),10);    
                                     ?></p>
                                          <div class="slider-btn">
                                          <?php if( !empty( $slides_single_data['button_text'] ) ){
                                            ?>
                                              <a href="<?php echo esc_url($slides_single_data['button_link']); ?>" class="btn btn-default"><?php echo esc_html($slides_single_data['button_text'] ) ?></a>
                                          <?php
                                           }
                                          if( !empty( $slides_single_data['optional_button_text'] ) ){
                                          ?>      
                                              <a href="<?php echo esc_url($slides_single_data['optional_button_link']); ?>" class="btn btn-default"><?php echo esc_html($slides_single_data['optional_button_text'] ) ?></a>
                                    <?php } ?>
                                          </div>
                                      </div>
                                  </div>
                              </div><!-- .row -->
                          </div><!-- .container -->
                      </div>
                  </div>
              </div><!-- .items -->
          <?php $k++;
           endwhile;
           wp_reset_postdata();
           
          
          ?> 
            

          </div><!-- .carosoul-inner -->
            <a class="left carousel-control" href="#slider" role="button" data-slide="prev">
              <span class="fa fa-angle-left" aria-hidden="true"></span>
            </a>
            <a class="right carousel-control" href="#slider" role="button" data-slide="next">
              <span class="fa fa-angle-right" aria-hidden="true"></span>
            </a>
          </div>      
      </div>
  </section>
  <!-- End Slider Section -->
<?php  endif;  endif;
} ?>