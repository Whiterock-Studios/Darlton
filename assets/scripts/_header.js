function header ( $ )
{

	/*
	 * Just animates the main logo on page load
	 */
	$ ( '.header__logo' ).css ( 'top', '30px' );

	/*
	 * Hides the logo on scroll down more than 80px
	 */
	$ ( window ).scroll ( function ()
	{
		if ( $ ( this ).scrollTop () > 80 )
		{
			$ ( '.header__logo' ).css ( 'top', '-50px' );
		}
		else
		{
			$ ( '.header__logo' ).css ( 'top', '30px' );
		}
	} );

	var menuIsOpen = 0;

	/*
	 * This function checks if menu is open or closed and then opens/closes it
	 */
	function menuOpenClose ( event )
	{
		// stops the body click function from stopping the burger open the menu
		event.stopPropagation ();

		// toggle class on burger item
		$ ( '.header__menu__burger' ).toggleClass ( 'header__menu__burger--open' );

		// toggle class on menu itself
		$ ( '.header__menu__menu' ).toggleClass ( 'header__menu__menu--open' );

		var links = $ ( '.header__menu__menu a' );

		// if menu is open or close stagger the menu items..
		if ( menuIsOpen == 1 )
		{
			menuIsOpen = 0;
			TweenMax.staggerTo (
				links,
				0.2,
				{
					left : - 300
				},
				0.1
			);
		}
		else
		{
			menuIsOpen = 1;
			TweenMax.staggerTo (
				links,
				0.2,
				{
					left : 0
				},
				0.1
			);
		}
	}

	/*
	 * Close menu when clicking off
	 */
	$ ( 'body' ).click ( function ( event )
	{
		if ( menuIsOpen == 1 )
		{
			menuOpenClose ( event );
		}
	} );

	/*
	 * Function opens/closed menu on burger icon click
	 */
	$ ( '.header__menu__burger' ).click ( function ( event )
	{
		menuOpenClose ( event );
	} );

	// changes menu item opacity on hover
	$ ( '.header__menu__menu a' ).on ( 'hover', function ()
	{
		$ ( '.header__menu__menu a' ).css ( 'opacity', '0.4' );
		$ ( this ).css ( 'opacity', '1' );
	} );

}