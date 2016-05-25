<?php
	/*
	* Template Name:Company Page
	*/
	get_header ();
	if ( have_posts () ) :
		while ( have_posts () ) :
			the_post ();
			?>

			<?php
			$attachment_id = get_field ( 'section_1_background_image' );
			$size          = "full";
			$image         = wp_get_attachment_image_src ( $attachment_id, $size );
			?>

			<section class="company__section__1 b-lazy" data-src="<?php echo $image[ 0 ]; ?>">
				<div class="shade" style="opacity:<?php
					// if the opacity is not set, set it to 0
					if ( get_field ( 'section_1_background_darkness' ) )
					{
						the_field ( 'section_1_background_darkness' );
					}
					else
					{
						echo "0";
					}
				?>;"></div>
				<div class="company__section__1__slider slider">
					<?php
						$slide_counter = 0;
					?>
					<div class="slider__inner">
						<?php
							if ( have_rows ( 'section_1_slides' ) ) :
								while ( have_rows ( 'section_1_slides' ) ) :
									the_row ();
									?>
									<div class="company__section__1__slider__slide slide">
										<h2 class="company__section__1__slider__slide__heading anim-in"><?php the_sub_field ( 'heading' ); ?></h2>
										<p class="company__section__1__slider__slide__body anim-in"><?php the_sub_field ( 'body' ); ?></p>
										<?php
											$slide_counter++;
											if ( have_rows ( 'buttons' ) ) :
												while ( have_rows ( 'buttons' ) ) :
													the_row ();
													?>
													<a class="company__section__1__slider__slide__button button anim-in" href="<?php the_sub_field ( 'link' ); ?>"><?php the_sub_field ( 'text' ); ?></a>
													<?php
												endwhile;
											endif;
										?>
									</div>
									<?php
								endwhile;
							endif;
							if ( $slide_counter > 1 )
							{
								?>
								<span class="prev fa fa-chevron-left fa-3x anim-in"></span>
								<span class="next fa fa-chevron-right fa-3x anim-in"></span>
								<?php
							}
						?>
					</div>
				</div>

				<nav class="company__section__1__menu">
					<?php wp_nav_menu ( array ( 'theme_location' => 'company-page-menu' ) ); ?>
				</nav>
			</section>

			<section class="company__section__2 <?php
				if ( get_field ( 'section_2_background_image' ) )
				{
					$attachment_id = get_field ( 'section_2_background_image' );
					$size          = "full";
					$image         = wp_get_attachment_image_src ( $attachment_id, $size );
					echo ' b-lazy"';
					echo 'data-src="' . $image[ 0 ] . '"';
				}
				else
				{
					echo '"';
				}
				if (
					get_field ( 'section_2_background_colour' )
					OR get_field ( 'section_2_background_position' )
					OR get_field ( 'section_2_background_size' )
				)
				{
					echo "style='";
					if ( get_field ( 'section_2_background_colour' ) )
					{
						echo 'background-color: ';
						the_field ( 'section_2_background_colour' );
						echo ';';
					}
					if ( get_field ( 'section_2_background_position' ) )
					{
						echo 'background-position: ';
						the_field ( 'section_2_background_position' );
						echo ';';
					}
					if ( get_field ( 'section_2_background_size' ) )
					{
						echo 'background-size: ';
						the_field ( 'section_2_background_size' );
						echo ';';
					}
				}
				echo "'";
			?>">
				<div class=" container">
					<h1 class="company__section__2__title anim-in"><?php the_field ( 'section_2_title' ); ?></h1>
					<p class="company__section__2__body anim-in"><?php the_field ( 'section_2_body' ); ?></p>

					<?php
						if ( have_rows ( 'section_2_boxes' ) ) :
							echo "<div class='company__section__2__boxes'>";
							while ( have_rows ( 'section_2_boxes' ) ) :
								the_row ();
								?>
								<div class="company__section__2__box anim-in">
									<div class="company__section__2__box__inner">
										<span class="company__section__2__box__amount count-me" data-count="<?php the_sub_field ( 'number' ); ?>">0</span>
										<span class="company__section__2__box__text"><?php the_sub_field ( 'text' ); ?></span>
									</div>
								</div>
								<?php
							endwhile;
							echo "</div>";
						endif;
						if ( have_rows ( 'section_2_buttons' ) ) :
							while ( have_rows ( 'section_2_buttons' ) ) :
								the_row ();
								?>
								<a href="<?php the_sub_field ( 'link' ); ?>" class="button company__section__2__button anim-in"><?php the_sub_field ( 'text' ); ?></a>
								<?php
							endwhile;
						endif;
					?>
				</div>
			</section>

			<?php
			if ( have_rows ( 'section_3_onwards' ) )
			{
				?>
				<section class="company__section__3">
					<?php
						while ( have_rows ( 'section_3_onwards' ) )
						{
						the_row ();

						/*
						 * This is the page divider, background colour from scss class .bg
						 *
						 * It does not display if the sub field "divider_text" is empty
						 * */
						if ( get_sub_field ( 'divider_text' ) )
						{
							?>
							<div class="company__section__3__divider bg">
								<h3><?php the_sub_field ( 'divider_text' ); ?></h3>
							</div>
							<?php
						}

						/*
						 * This sets the background image if it has one, otherwise it will just be the SCSS
						 * defined background colour.
						 *
						 * The background is lazy-loaded in the data-src attribute.
						 * */
						if ( get_sub_field ( 'background_image' ) )
						{
						$attachment_id = get_sub_field ( 'background_image' );
						$size          = "full";
						$image         = wp_get_attachment_image_src ( $attachment_id, $size );

					?>
					<div class="company__section__3__section b-lazy" data-src="<?php echo $image[ 0 ]; ?>">
						<?php
							}
							else
							{
						?>
						<div class="company__section__3__section b-lazy">
							<?php
								}
							?>

							<div class="shade" style="opacity:<?php
								// if the opacity is not set, set it to 0
								if ( get_sub_field ( 'background_darkness' ) )
								{
									the_sub_field ( 'background_darkness' );
								}
								else
								{
									echo "0";
								}
							?>;"></div>
							<div class="container">
								<?php
									/*
									 * This determines the side that the text will float to, either left or right
									 * */
									if ( get_sub_field ( 'text_side' ) )
									{
								?>
								<div class="company__section__3__section__inner" style="float: <?php the_sub_field ( 'text_side' ); ?> ;">
									<?php
										}
										else
										{
									?>
									<div class="company__section__3__section__inner">
										<?php
											}

										?>
										<h2 class="company__section__3__section__heading anim-in" style="color: <?php the_sub_field ( "heading_colour" ); ?>"><?php the_sub_field ( "heading" ); ?></h2>
										<p class="company__section__3__section__body anim-in" <?php
											if ( get_sub_field ( 'body_colour' ) )
											{
												?>
												style="color: <?php the_sub_field ( 'body_colour' ) ?>;"
												<?php
											}
										?>><?php the_sub_field ( 'body' ); ?></p>

										<?php
											if ( have_rows ( 'buttons' ) )
											{
												while ( have_rows ( 'buttons' ) )
												{
													the_row ();
													?>

													<a href="<?php the_sub_field ( 'button_link' ); ?>" class="button company__section__3__section__button anim-in"><?php the_sub_field ( 'button_text' ); ?></a>

													<?php
												}
											}
										?>

									</div><!-- end of .container -->
								</div><!-- end of .company__section__3__section__inner -->
							</div><!-- end of .company__section__3__section	-->

							<?php
								}
							?>
				</section>
				<?php
			}
			?>
			<?php
			/*
			* below are the loop endings
			*/
		endwhile;
	endif;
	get_footer ();
?>

