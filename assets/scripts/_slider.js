function slider ( $ )
{
	console.log ( 'sldier' );
	var slideCounter    = 0,
		slide           = $ ( '.slide' ),
		firstSlide      = $ ( '.slide:first' ),
		lastSlide       = $ ( '.slide:last' ),
		activeSlide     = $ ( '.slide--active' ),
		toBeActiveSlide = $ ( '.to-be-active' );

	// show first slide
	firstSlide.addClass ( 'slide--active' );

	// add data-slide number to each slide
	slide.each ( function ()
	{
		slideCounter ++;
		$ ( this ).attr ( 'data-slide', slideCounter );
	} );

	function nextSlide ()
	{
		// stop slider from progressing automatically
		clearInterval ( startSlideShow );
		// if NOT last slide
		if ( activeSlide.attr ( 'data-slide' ) < slideCounter )
		{
			activeSlide.next ( '.slide' ).addClass ( 'to-be-active' );
			activeSlide.removeClass ( 'slide--active' );
			toBeActiveSlide.addClass ( 'slide--active' ).removeClass ( 'to-be-active' );
			// if last slide
		}
		else
		{
			activeSlide.removeClass ( 'slide--active' );
			firstSlide.addClass ( 'slide--active' );
		}
	}

	function prevSlide ()
	{
		// stop slider from progressing automatically
		clearInterval ( startSlideShow );
		// if NOT first slide
		if ( activeSlide.attr ( 'data-slide' ) > 1 )
		{
			activeSlide.prev ( '.slide' ).addClass ( 'to-be-active' );
			activeSlide.removeClass ( 'slide--active' );
			toBeActiveSlide.addClass ( 'slide--active' ).removeClass ( 'to-be-active' );
			// if first slide
		}
		else
		{
			activeSlide.removeClass ( 'slide--active' );
			lastSlide.addClass ( 'slide--active' );
		}
	}

	var startSlideShow = setInterval ( nextSlide, 6000 );

	$ ( '.next' ).on ( 'click', nextSlide );
	$ ( '.prev' ).on ( 'click', prevSlide );

}

