<?php
/**
 * Class for adding font awesome icons
 *
 * @package Canyon Themes
 * @subpackage Canyon
 * @since 1.0.0
 */
if( !class_exists( 'Education_Way_Pixeden_Icon_Class_Metabox') ){
    class Education_Way_Pixeden_Icon_Class_Metabox {

        public function __construct()
        {

            add_action( 'add_meta_boxes', array( $this, 'education_way_icon_metabox') );

            add_action( 'save_post', array( $this, 'education_way_save_icon_value') );
        }


        public function education_way_icon_metabox()
        {

            add_meta_box(
                    'education_way_icon',
                    esc_html__('Pixeden Icon Class>', 'education-way'),
                    array(
                            $this, 'education_way_generate_icon'),
                    'page',
                    'side',
                    'low'
            );
        }

        public function education_way_generate_icon($post)
        {
            $values = get_post_meta( $post->ID, 'education_way_icon', true );
            wp_nonce_field( basename(__FILE__), 'education_way_pixeden_icon_fields_nonce');
            ?>
            <input type="text" name="icon" value="<?php echo esc_html($values) ?>" />
             <br/>
             <small>
                <?php
                esc_html_e( 'Pixeden Icon Class Used in Post', 'education-way' );
                printf( __( '%1$sRefer here%2$s for icon class. For example used: %3$scar%4$s', 'education-way' ), '<br /><a href="'.esc_url( 'https://themes-pixeden.com/font-demos/7-stroke/' ).'" target="_blank">','</a>',"<code>","</code>" );
                ?>
            </small>
            <?php
        }

        public function education_way_save_icon_value($post_id)
        {

            /*
                * A Guide to Writing Secure Themes – Part 4: Securing Post Meta
                *https://make.wordpress.org/themes/2015/06/09/a-guide-to-writing-secure-themes-part-4-securing-post-meta/
                * */
            if (
                !isset($_POST['education_way_pixeden_icon_fields_nonce']) ||
                !wp_verify_nonce($_POST['education_way_pixeden_icon_fields_nonce'], basename(__FILE__)) || /*Protecting against unwanted requests*/
                (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) || /*Dealing with autosaves*/
                !current_user_can('edit_post', $post_id)/*Verifying access rights*/
            ) {
                return;
            }

            //Execute this saving function
            if (isset($_POST['icon']) && !empty($_POST['icon'])) {
                $pixeden_iconclass = sanitize_text_field( $_POST['icon'] );
                update_post_meta($post_id, 'education_way_icon', $pixeden_iconclass);
            }
        }
    }
}
$productsMetabox = new Education_Way_Pixeden_Icon_Class_Metabox;