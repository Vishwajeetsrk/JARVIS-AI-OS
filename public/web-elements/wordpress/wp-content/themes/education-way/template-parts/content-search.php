<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
$featured_image     = absint(education_way_get_option('education_way_featured_image_blog_page'));
$meta_options       = absint(education_way_get_option('education_way_meta_options_blog_page'));
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="blog-items">
		 <?php
      if( has_post_thumbnail() && 0 == $featured_image ) { ?>
        <div class="blog-img">
          <?php  the_post_thumbnail('full', array('class' => 'img-responsive') ); ?>
        </div>
      <?php } ?>   
		<div class="blog-content-box">
	        <div class="blog-content">	
		        <?php if( $meta_options == 0 ) { ?> 
					<ul class="meta-post">
						<li><i class="fa fa-calendar" aria-hidden="true"></i> <?php echo esc_html( get_the_date('M d,Y') ); ?>
						</li>
						<li><a href="#"><i class="fa fa-commenting-o" aria-hidden="true"></i><?php printf( _nx( '1 Comment', '%1$s Comments', get_comments_number(), 'comments title', 'education-way' ), number_format_i18n( get_comments_number() ) ); ?></a></li>
					</ul>
				<?php } ?>
				<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>

				<?php the_excerpt(); ?>

				<footer class="entry-footer">
					<?php education_way_entry_footer(); ?>
				</footer><!-- .entry-footer -->
			</div>
		</div>
	</div>
</article><!-- #post-## -->
