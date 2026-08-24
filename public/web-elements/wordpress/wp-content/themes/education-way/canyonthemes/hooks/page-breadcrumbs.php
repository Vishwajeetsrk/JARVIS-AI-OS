<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canyon Themes
 * @subpackage Education Way
 */

if (!function_exists('education_way_breadcrumb')) :

    function education_way_breadcrumb($post_id)
    {
    
      $breadcrumb_type       = education_way_get_option( 'education_way_breadcrumb_setting_option');  
      
        
          global $header_imagem,$header_style;
            $header_image = get_header_image();

            if( $header_image ){
                $header_style = 'style="background: url('.esc_url( $header_image ).'); background-size: cover;background-position: 50% 50%;"';                 

            } else{

                $header_style = '';
            }

?>          <!-- Start Page Header Section -->
              <section class="bg-page-header" <?php echo $header_style; ?>>
                <div class="page-header-overlay">
                  <div class="container">
                    <div class="row">
                      <div class="page-header">
                        <?php
                          if(is_archive() )
                          {
                        ?>
                          <div class="page-title">
                            <h2><?php the_archive_title() ?></h2>
                          </div>
                    <?php }
                         else
                         { ?>
                          
                          <div class="page-title">
                            <h2><?php the_title(); ?></h2>
                          </div>

                       <?php  }
                       if(  $breadcrumb_type == 'simple' )
                           {
                        ?>
                        <div class="page-header-content ">
                          <div class="breadcrumb">
                             <?php  education_way_breadcrumb_trail(); ?>
                          </div>
                        </div>
                        <?php } ?>
                      </div>
                    </div>
                  </div>
                </div>
              </section>   
            <?php  
        
    }
endif;

add_action('education_way_breadcrumb_trail', 'education_way_breadcrumb', 10, 1);    