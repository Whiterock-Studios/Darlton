<footer class="footer">
	<h3 class="footer__title anim-in"><?php
			if ( get_field ( 'footer_title' ) )
			{
				the_field ( 'footer_title' );
			}
			else
			{
				echo "Get in Touch!";
			}
		?></h3>

	<section class="footer__contact">
		<div class="footer__contact__form__container anim-in">
			<?php
				// has the class footer__contact__form
				echo do_shortcode ( '[contact-form-7 id="97" title="Contact form 1"]' );
			?>
		</div>

		<div class="footer__contact__details__container">
			<p class="footer__contact__details footer__contact__details--tele anim-in">
				<?php
					echo '<span class="footer__contact__details__title">Tele:</span><a href="tel:' . do_shortcode ( '[easy_options id="telephone"]' ) . '">' . do_shortcode ( '[easy_options id="telephone"]' ) . '</a>';
				?>
			</p>
			<p class="footer__contact__details footer__contact__details--mobile anim-in">
				<?php
					echo '<span class="footer__contact__details__title">Mobile:</span><a href="tel:' . do_shortcode ( '[easy_options id="mobile"]' ) . '">' . do_shortcode ( '[easy_options id="mobile"]' ) . '</a>';
				?>
			</p>
			<p class="footer__contact__details footer__contact__details--email anim-in">
				<?php
					echo '<span class="footer__contact__details__title">Email:</span><a href="mailto:' . do_shortcode ( '[easy_options id="email"]' ) . '">' . do_shortcode ( '[easy_options id="email"]' ) . '</a>';
				?>
			</p>

			<div class="footer__contact__newsletter anim-in">
				<p>Sign up to the Darlton Newsletter</p>
				<?php
					echo do_shortcode ( '[contact-form-7 id="98" title="Newsletter Sign Up"]' );
				?>
			</div>
		</div>
	</section>

	<section class="footer__lower">
		<div class="footer__lower__upper">
			<div class="container">
				<h4 class="footer__lower__title"><?php echo bloginfo ( name ); ?></h4>

				<div class="footer__menu">
					<?php wp_nav_menu ( array ( 'theme_location' => 'footer-menu' ) ); ?>
				</div>

				<div class="footer__social__menu">
					<?php wp_nav_menu ( array ( 'theme_location' => 'social-menu' ) ); ?>
				</div>
			</div>
		</div>

		<div class="footer__lower__lower">
			<div class="container">
				<p class="copyright">&copy; <?php echo bloginfo ( name ); ?></p>

				<p class="whiterock">
					<a href="http://whiterock.studio" target="_blank">
						Crafted with <span class="fa fa-heart"></span> by Whiterock
					</a>
				</p>
			</div>
		</div>
	</section>
</footer>

<?php wp_footer (); ?>
</div> <!-- ends brand picker div -->
</div> <!-- end of body class -->
</div> <!-- end of #smoothstate -->
</body>
</html>



