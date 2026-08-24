<?php
/**
 * Template part for displaying page content in page.php.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
$hide_show_feature_image = absint(education_way_get_option( 'education_way_show_feature_image_single_option' ));
$hide_show_meta_fields = absint(education_way_get_option( 'education_way_meta_fields_single_option' ));
$share_url = urlencode( get_permalink( get_the_ID() ) );
$title=strip_tags(get_the_title(get_the_ID()));
?>

<div class="blog-items">
   <?php
      if( has_post_thumbnail() && $hide_show_feature_image == 0 ) {
      ?>

      <div class="blog-img">
         <?php the_post_thumbnail( 'full', array( 'class' => 'img-responsive' ) ); ?>
       
      </div>
<?php } ?>      

  <div class="blog-content-box"> 
  <?php if( $hide_show_meta_fields == 0 ) { 
        /**
         * education_way_meta_fields_section hook
         * @since Canyon 1.0.0
         *
         * @hooked education_way_meta_fields_section_action -  10
         */
        do_action('education_way_meta_fields_section_action');
    } ?>      
  

    <div class="blog-content">
      
      <?php the_content(); ?>
    </div><!-- .blog-content -->

    <div class="single-blog-bottom">
      <ul class="tags">
        <?php
        if(get_the_tag_list()) {
            echo get_the_tag_list('<ul class="tags"><li><i class="fa fa-tags" aria-hidden="true"></i> Tags :</li><li>','</li><li>','</li></ul>');
        }
        ?>  
      </ul>
      <div class="event-share-option">
        <ul class="social-icon share-icon">
          <li><i class="fa fa-share-alt" aria-hidden="true"></i><span><?php echo esc_html__('share :','education-way'); ?></span></li>
          
          <li><a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $share_url;?>" target="_blank"><i class="fa fa-facebook"  aria-hidden="true"></i></a></li>
                   
          <li><a href="https://twitter.com/intent/tweet?text=<?php echo esc_attr($title);?>&amp;url=<?php echo $share_url;?>&amp;" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
         
          <li><a href="http://www.linkedin.com/shareArticle?mini=true&amp;title=<?php echo esc_attr($title);?>&amp;url=<?php echo $share_url;?>&amp;summary=<?php echo esc_attr($title);?>" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        
          <li> <?php
            $pinterestimage = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'full' );
            echo '<a href="http://pinterest.com/pin/create/button/?url=' . $share_url. '&media=' . $pinterestimage[0] . '&description=' . esc_attr($title).'" target="_blank" title="Share on Pinterest">'.'<i class="fa fa-pinterest"></i>'.'</a>'
            ?></i></a></li>
        </ul>
      </div>
    </div><!-- .single-blog-bottom -->
  </div>
</div><!-- .blog-items -->



