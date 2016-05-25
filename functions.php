<?php
	/*
	* This is where we call all our functions and stuff do things
	*/

	add_action ( 'wp_enqueue_scripts', 'styles_scripts' );
	add_action ( 'init', 'navigation_menus' );

	/*
	* Below is all the stuff we called above
	*/

	function styles_scripts ()
	{
		wp_enqueue_style ( "Main CSS", get_template_directory_uri () . "/assets/styles/main.css", null, "1.0.0", null );
		wp_enqueue_script ( "Main JS", get_template_directory_uri () . "/assets/scripts/build.js", array ( 'jquery' ), 1.0, true );
	}

	function navigation_menus ()
	{
		register_nav_menus (
			array (
				'main-menu'         => __ ( 'Main Menu' ),
				'footer-menu'       => __ ( 'Footer Menu' ),
				'social-menu'       => __ ( 'Social Menu' ),
				'company-page-menu' => __ ( 'Company Page Menu' )
			)
		);
	}