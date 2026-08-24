<?php

if( ! function_exists( 'education_way_home_page_section_hook' ) ):
     
      function education_way_home_page_section_hook() { 
     
           get_template_part( 'canyonthemes/home-section-parts/section', 'slider'); 
     }
   endif;
   
    add_action( 'education_way_home_page_section', 'education_way_home_page_section_hook', 10 );
?>