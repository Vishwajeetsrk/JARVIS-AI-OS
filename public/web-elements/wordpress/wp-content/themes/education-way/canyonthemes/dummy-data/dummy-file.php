<?php
/**
 * Demo Data support.
 *
 * @package Education Way
 */

/*Disable PT branding.*/
add_filter( 'pt-ocdi/disable_pt_branding', '__return_true' );

/**
 * Demo Data files.
 *
 * @since 1.0.0
 *
 * @return array Files.
 */
function education_way_import_files() {
    return array(
        array(
            'import_file_name'             =>  esc_html__( 'Theme Demo Content', 'education-way' ),
            'local_import_file'            => trailingslashit( get_template_directory() ) . 'canyonthemes/dummy-data/dummy-data-files/education-way.xml',
            'local_import_widget_file'     => trailingslashit( get_template_directory() ) . 'canyonthemes/dummy-data/dummy-data-files/education-way.wie',
            'local_import_customizer_file' => trailingslashit( get_template_directory() ) . 'canyonthemes/dummy-data/dummy-data-files/education-way.dat',
        ),
    );
}
add_filter( 'pt-ocdi/import_files', 'education_way_import_files' );

/**
 * Demo Data after import.
 *
 * @since 1.0.0
 */

function education_way_after_import_setup() {
      

            // Assign menus to their locations.
        $main_menu   = get_term_by( 'name', 'Primary Menu', 'nav_menu' );
        $social_menu = get_term_by( 'name', 'Social Links', 'nav_menu' );

        set_theme_mod( 'nav_menu_locations', array(
            'primary'     => $main_menu->term_id,
            'social-link' => $social_menu->term_id,
           
        )
        );

          // Assign front page and posts page (blog page).
        $front_page_id = get_page_by_title( 'Home Page' );

        update_option( 'show_on_front', 'page' );
        update_option( 'page_on_front', $front_page_id->ID );

    }

add_action( 'pt-ocdi/after_import', 'education_way_after_import_setup' );