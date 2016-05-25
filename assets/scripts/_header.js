function header ( $ )
{
	console.log ( 'header' );
	var menu   = $ ( '.header__menu__menu' ),
		logo   = $ ( '.header__logo' ),
		burger = $ ( '.header__menu__burger' );

	/*
	 * Just animates the main logo on page load
	 */
	logo.css ( 'top', '30px' );

	/*
	 * Hides the logo on scroll down more than 80px
	 */
	$ ( window ).scroll ( function ()
	{
		if ( $ ( this ).scrollTop () > 80 )
		{
			logo.css ( 'top', '-50px' );
		}
		else
		{
			logo.css ( 'top', '30px' );
		}
	} );

	var menuIsOpen = 0;

	/*
	 * This function checks if menu is open or closed and then opens/closes it
	 */
	function menuOpenClose ( event )
	{

		// toggle class on burger item
		burger.toggleClass ( 'header__menu__burger--open' );

		// toggle class on menu itself
		menu.toggleClass ( 'header__menu__menu--open' );

		var links = menu.find ( 'a' );

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
	 * Function opens/closed menu on burger icon click
	 */
	burger.click ( function ( event )
	{
		menuOpenClose ();
	} );

	// changes menu item opacity on hover
	menu.find ( 'a' ).on ( 'hover', function ()
	{
		menu.find ( 'a' ).css ( 'opacity', '0.4' );
		$ ( this ).css ( 'opacity', '1' );
	} );

	menu.find ( 'a' ).click ( function ()
	{
		menuOpenClose ();
	} );

}
