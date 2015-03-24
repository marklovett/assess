<?php
/*
Plugin Name: Assessment
Description: Collects user assessment scores for Standard categories in page-individual-assessment.php and page-program-assessment.php files, then displays score results averages to two decimals in each Standard category at bottom of Individual Assessment and Program Assessment pages. Page-individual-assessment.php and page-program-assessment.php files must be loaded in theme root directory, and Individual Assessment and Program Assessment pages must be created in WordPress backend to work properly. Questions and text edits need to be done in  page-individual-assessment.php and page-program-assessment.php files. 

Version: 1.0
Author: Mark Lovett
Author URI: http://webexperts.us and http://marklovettdesign.com
*/




function my_scripts_method() {
	wp_enqueue_script(
		'app.js',
		plugins_url( '/js/app.js' , __FILE__ ),
		array( 'jquery' )
	);
		wp_enqueue_style(
		'style.css',
		plugins_url( '/css/style.css' , __FILE__ )
	);
}

add_action( 'wp_enqueue_scripts', 'my_scripts_method' );




?>