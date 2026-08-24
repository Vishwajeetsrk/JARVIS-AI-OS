<?php

/**
 * The template for displaying the footer
 * Contains the closing of the #content div and all content after.
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package Canyon Themes
 * @subpackage Canyon
 */
?>
<footer>
	<?php
	$copyright    = esc_html(education_way_get_option('education_way_copyright'));
	$to_top = absint(education_way_get_option('education_way_footer_go_to_top'));
	if ( is_active_sidebar('footer-1') || is_active_sidebar('footer-2') || is_active_sidebar('footer-3') || is_active_sidebar('footer-4') ) {
		$count = 0;
		for ( $i = 1; $i <= 4; $i++ )
		{
			if ( is_active_sidebar( 'footer-' . $i ) )
			{
				$count++;
			}
		}
		$column = 3;
		if( $count == 4 ) 
		{
			$column = 3;  
		}
		elseif( $count == 3)
		{
			$column = 4;
		}
		elseif( $count == 2) 
		{
			$column = 6;
		}
		elseif( $count == 1) 
		{
			$column = 12;
		}
		?>
		<!-- Start Footer Section -->
		<div class="bg-footer-top">
			<div class="container">
				<div class="row">
					<div class="footer-top">
						<div class="row">
							<?php
							for ( $i = 1; $i <= 4 ; $i++ )
							{
								if ( is_active_sidebar( 'footer-' . $i ) )
								{
									?>
									<div class="col-md-<?php echo esc_attr($column) ?> col-sm-6">
										<div class="footer-widgets">
											<?php dynamic_sidebar( 'footer-' . $i ); ?>
										</div><!-- .footer-widgets -->
									</div><!-- .col-md-3 -->
								<?php  }
							}       
							?>					
						</div><!-- .row -->
					</div><!-- .footer-top -->
				</div><!-- .row -->
			</div><!-- .container -->
		</div><!-- .bg-footer-top -->
	<?php } ?>
	<div class="bg-footer-bottom">
		<div class="container">
			<div class="row">
				<div class="footer-bottom">
					<div class="copyright-txt">
						<p> <?php echo wp_kses_post( $copyright  ); ?> </p>
					</div><!-- .copyright-txt -->
					<div class="copyright-txt">
                	<p><a href="<?php echo esc_url( __( 'https://wordpress.org/', 'education-way' ) ); ?>"><?php printf( esc_html__( 'Proudly powered by %s', 'education-way' ), 'WordPress' ); ?></a>
                <span class="sep"> | </span>
                <?php printf( esc_html__( 'Theme: %1$s by %2$s.', 'education-way' ), 'Education Way', '<a href="https://www.canyonthemes.com" target="_blank">Canyon Themes</a>' ); ?>	
            </p>
					</div>
				</div><!-- .footer-bottom -->
			</div><!-- .row -->
		</div><!-- .container -->
	</div><!-- .bg-footer-bottom -->
</footer>
<!-- End Footer Section -->
<!-- Start Scrolling -->
<?php if($to_top == 1) { ?>
<div class="scroll-img"><i class="fa fa-angle-up" aria-hidden="true"></i></div>
<?php } ?>
<!-- End Scrolling -->
<?php wp_footer(); ?>

</body>

</html>

