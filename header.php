<!DOCTYPE html>
<html <?php language_attributes (); ?>>
<head>
	<meta charset="<?php bloginfo ( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<title><?php
			the_title ();
			echo " | ";
			bloginfo ( 'name' );
		?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo ( 'pingback_url' ); ?>">
	<script>document.write ( '<script src="http://192.168.1.73:35729/livereload.js?snipver=1"></' + 'script>' )</script>
	<link href='https://fonts.googleapis.com/css?family=Muli:400,300italic,300,400italic' rel='stylesheet' type='text/css'>
	<?php wp_head (); ?>
</head>

<body id="body">
<div class="loader loading">
	<div class="spinner">
		<div class="double-bounce1"></div>
		<div class="double-bounce2"></div>
	</div>
</div>
<div id="smoothstate" class="m-scene">
	<div <?php body_class (); ?>>

		<div class="<?php the_field ( 'stylesheet' ); ?>">

			<header>
				<div class="header__menu">
					<div class="header__menu__burger">
						<span class="header__menu__burger__line header__menu__burger__line--1"></span>
						<span class="header__menu__burger__line header__menu__burger__line--2"></span>
						<span class="header__menu__burger__line header__menu__burger__line--3"></span>
					</div>

					<nav class="header__menu__menu">
						<?php wp_nav_menu ( array ( 'theme_location' => 'main-menu' ) ); ?>
					</nav>

					<?php
						function get_page_logo ()
						{
							$field = get_field ( 'page_logo' );
							if ( $field )
							{
								$attachment_id = get_field ( 'page_logo' );
								$size          = "medium";
								$image         = wp_get_attachment_image_src ( $attachment_id, $size );
								echo $image[ 0 ];
							}
							else
							{
								echo get_template_directory_uri () . "/assets/images/darlton-logo-black.png";
							}
						}

					?>
				</div>
				<a class="header__logo" href="<?php echo site_url (); ?>" title="Home">
					<img class="b-lazy" data-src="<?php get_page_logo (); ?>" alt="<?php the_title (); ?> Logo"/>
				</a>
			</header>
