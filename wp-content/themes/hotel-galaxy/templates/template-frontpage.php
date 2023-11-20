<?php
/*
Template Name: FrontPage
*/

get_header();

do_action( 'hotelgalaxy_frontpage_sections', false );	

get_template_part('template-parts/sections/section','blog');

get_footer();