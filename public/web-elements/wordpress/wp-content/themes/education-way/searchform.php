<?php
/**
 * Custom Search Form
 *
 * @package Canyon Themes
 * @subpackage Canyon
 */
global  $education_way_placeholder_option;
?>
<div class="search-block">
    <form action="<?php echo esc_url( home_url() )?>" class="searchform search-form" id="searchform" method="get" role="search">
        <div>
            <label for="menu-search" class="screen-reader-text"></label>
            <?php
            $education_way_placeholder_text     = '';
            $education_way_placeholder_option   = education_way_get_option( 'education_way_post_search_placeholder_option');
            if ( !empty( $education_way_placeholder_option) ):
                $education_way_placeholder_text = 'placeholder="'.esc_attr ( $education_way_placeholder_option ). '"';
            endif; ?>
            <input type="text" <?php echo $education_way_placeholder_text ;?> class="blog-search-field" id="menu-search" name="s" value="<?php echo get_search_query();?>">
            <button class="searchsubmit fa fa-search" type="submit" id="searchsubmit"></button>
        </div>
    </form>
</div>