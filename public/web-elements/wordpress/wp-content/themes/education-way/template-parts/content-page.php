<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
$featured_image   = absint(education_way_get_option( 'education_way_show_feature_image_single_page'));
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('welcome-content p-tb-20'); ?>>
	 <div class="feature-image">
	 	<?php
	      if( has_post_thumbnail() && $featured_image != 1 ) {
	          ?>
	             <?php the_post_thumbnail( 'full' ); ?>
	    	  <?php } ?>
	 </div>

	  
	  <?php 
	  	the_content();
	 	wp_link_pages( array(
			'before' => '<div class="page-links">' . esc_html__( 'Pages:','education-way'),
			'after'  => '</div>',
		) );


	 if ( get_edit_post_link() ) : ?>
			<footer class="entry-footer">
				<?php
					edit_post_link(
						sprintf(
							/* translators: %s: Name of current post */
							esc_html__( 'Edit %s','education-way'),
							the_title( '<span class="screen-reader-text">"', '"</span>', false )
						),
						'<span class="edit-link">',
						'</span>'
					);
				?>
			</footer><!-- .entry-footer -->
		<?php endif; ?>
</article><!-- #post-## -->