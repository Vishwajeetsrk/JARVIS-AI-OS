<?php
/**
* Class for adding Recent Post Widget
*
* @package Canyon Themes
* @subpackage Canyon
* @since 1.0.0
*/
if (!class_exists('Education_Way_Recent_Post_Widget')) {

class Education_Way_Recent_Post_Widget extends WP_Widget

{
/*defaults values for fields*/
private function defaults() 
{
$defaults       = array(
'cat_id'    => -1,
'title'     => esc_html__('FROM OUR BLOG','education-way'),
'sub_title' => esc_html__('Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.','education-way'),
);

return $defaults;
}

public function __construct()
{
parent::__construct(
/* Widget Unique ID */
'education-way-recent-post-widget',
/* Widget Name */
esc_html__( 'CT: Blog Widget', 'education-way' ),
/* Widget description */
array( 'description' => esc_html__( 'CT: Our Blog Widget', 'education-way' ) )
);
}

/**
* Function to Creating widget front-end. This is where the action happens
*
* @access public
* @since 1.0
*
* @param array $args widget setting
* @param array $instance saved values
*
* @return void
*
*/
public function widget( $args, $instance )
{

if ( !empty( $instance ) ) {

$instance = wp_parse_args( (array ) $instance, $this->defaults() );

echo $args['before_widget'];
$catid        = absint( $instance['cat_id'] );
$title        = apply_filters('widget_title', !empty($instance['title']) ? esc_html( $instance['title']): '', $instance, $this->id_base);
$subtitle     =  esc_html( $instance['sub_title'] );                
?>
<!-- Start Blog Section -->
<section class="bg-blog-section">
<div class="container">
    <div class="row">
        <div class="blog-section">
            <?php if(!empty( $title  ) || !empty($subtitle) ) { ?> 
                <div class="section-header text-center">
                    <h2><?php echo  $title;  ?></h2>
                    <span class="double-border"></span>
                    <p><?php echo $subtitle; ?></p>
                </div><!-- .section-header -->
            <?php } ?>     
            <div class="row">
               <?php
               
                $sticky = get_option( 'sticky_posts' );
                if ($catid != -1) {
                    $home_recent_post_section = array(
                        'ignore_sticky_posts' => true,
                        'post__not_in'        => $sticky,
                        'cat'                 => $catid,
                        'posts_per_page'      => 3,
                        'order'               => 'DESC'
                    );
                } else {
                    $home_recent_post_section = array(
                        'ignore_sticky_posts' => true,
                        'post__not_in'        => $sticky,
                        'post_type'           => 'post',
                        'posts_per_page'      => 3,
                        'order'               => 'DESC'
                    );
                }

                $home_recent_post_section_query = new WP_Query($home_recent_post_section);

                if ( $home_recent_post_section_query->have_posts() ) {
                    
                    while ($home_recent_post_section_query->have_posts()) {
                        
                        $home_recent_post_section_query->the_post();
                        
                 ?> 
                
                    <div class="col-md-4 col-sm-6 col-xs-6">
                        <div class="blog-items">
                             <?php
                        
                            if (has_post_thumbnail()) {
                            
                                $image_id = get_post_thumbnail_id();
                            
                                $image_url = wp_get_attachment_image_src($image_id, 'full', true);
                            ?>
                                <div class="blog-img">
                                    <a href="<?php the_permalink(); ?>"><img src="<?php echo esc_url($image_url[0]); ?>" alt="blog-img-1" class="img-responsive" /></a>
                                </div>
                            <?php } ?>        

                            <div class="blog-content-box">
                                <div class="blog-content">
                                        <div class="meta-box">
                                            <ul class="meta-post">
                                                <li><i class="fa fa-calendar" aria-hidden="true"></i> <?php echo esc_html( get_the_date('d M,Y') ); ?></li>
                                                <li><a href="<?php comments_link(); ?>"><i class="fa fa-commenting-o" aria-hidden="true"></i> <?php comments_number( '0 comments', '1 comments', '% comments' ); ?></a></li>
                                            </ul>
                                        </div>
                                    <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                    <?php the_excerpt(); ?>
                                </div>
                            </div>
                        </div>
                    </div><!-- .col-md-4 -->
                 <?php
                
                }
            }
            wp_reset_postdata();
            ?>   

            </div>
        </div>
    </div>
</div>
</section>
<!-- End Blog Section -->
<?php
echo $args['after_widget'];
}
}
/**
* Function to Updating widget replacing old instances with new
*
* @access public
* @since 1.0
*
* @param array $new_instance new arrays value
* @param array $old_instance old arrays value
*
* @return array
*
*/
public function update($new_instance, $old_instance)
{
$instance                 = $old_instance;
$instance['cat_id']       = (isset( $new_instance['cat_id'] ) ) ? absint($new_instance['cat_id']) : '';
$instance['title']        = sanitize_text_field( $new_instance['title'] );
$instance['sub_title']    = sanitize_text_field( $new_instance['sub_title'] );
$instance['post_number']  = (isset( $new_instance['post_number'] ) ) ? absint($new_instance['post_number']) : '';
$instance['meta_options'] = isset($new_instance['meta_options'])? 1 : 0;

return $instance;

}
/*Widget Backend*/
public function form( $instance )
{
$instance     = wp_parse_args( (array ) $instance, $this->defaults() );
$catid        = esc_attr( $instance['cat_id'] );
$title        = esc_attr( $instance['title'] );
$subtitle     = esc_attr( $instance['sub_title'] );
?>

<p>
<label for="<?php echo esc_attr($this->get_field_id('title')); ?>">
<?php esc_html_e('Title', 'education-way'); ?>
</label><br/>
<input type="text" name="<?php echo esc_attr( $this->get_field_name('title') ); ?>" class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title') ); ?>" value="<?php echo $title; ?>">
</p>

<p>
<label for="<?php echo esc_attr( $this->get_field_id('sub_title') ); ?>">
<?php esc_html_e( 'Sub Title', 'education-way'); ?>
</label><br/>
<input type="text" name="<?php echo esc_attr( $this->get_field_name('sub_title') ); ?>" class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'sub_title') ); ?>" value="<?php echo $subtitle; ?>">

</p>

<p>
<label for="<?php echo esc_attr( $this->get_field_id('cat_id') ); ?>">
<?php esc_html_e('Select Category', 'education-way'); ?>
</label><br/>
<?php
$education_way_con_dropown_cat = array(
'show_option_none' => esc_html__('From Blog Posts', 'education-way'),
'orderby'          => 'name',
'order'            => 'asc',
'show_count'       => 1,
'hide_empty'       => 1,
'echo'             => 1,
'selected'         => $catid,
'hierarchical'     => 1,
'name'             => esc_attr( $this->get_field_name('cat_id') ),
'id'               => esc_attr( $this->get_field_name('cat_id') ),
'class'            => 'widefat',
'taxonomy'         => 'category',
'hide_if_empty'    => false,
);

wp_dropdown_categories( $education_way_con_dropown_cat );

?>

<?php
}
}
}

add_action('widgets_init', 'education_way_recent_post_widget');

function education_way_recent_post_widget()

{
register_widget('Education_Way_Recent_Post_Widget');

}