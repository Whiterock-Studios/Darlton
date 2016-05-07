function slider ( $ )
{
	var $slideCounter = 0;

	// show firstslide
	$ ( '.slide:first' ).addClass ( 'slide--active' );

	// add data-slide number to each slide
	$ ( '.slide' ).each ( function ()
	{
		$slideCounter ++;
		$ ( this ).attr ( 'data-slide', $slideCounter );
	} );

	function nextSlide ()
	{
		// stop slider from progressing automatically
		clearInterval ( startSlideShow );
		// if NOT last slide
		if ( $ ( '.slide--active' ).attr ( 'data-slide' ) < $slideCounter )
		{
			$ ( '.slide--active' ).next ( '.slide' ).addClass ( 'to-be-active' );
			$ ( '.slide--active' ).removeClass ( 'slide--active' );
			$ ( '.to-be-active' ).addClass ( 'slide--active' ).removeClass ( 'to-be-active' );
			// if last slide
		}
		else
		{
			$ ( '.slide--active' ).removeClass ( 'slide--active' );
			$ ( '.slide:first' ).addClass ( 'slide--active' );
		}
	}

	function prevSlide ()
	{
		// stop slider from progressing automatically
		clearInterval ( startSlideShow );
		// if NOT first slide
		if ( $ ( '.slide--active' ).attr ( 'data-slide' ) > 1 )
		{
			$ ( '.slide--active' ).prev ( '.slide' ).addClass ( 'to-be-active' );
			$ ( '.slide--active' ).removeClass ( 'slide--active' );
			$ ( '.to-be-active' ).addClass ( 'slide--active' ).removeClass ( 'to-be-active' );
			// if first slide
		}
		else
		{
			$ ( '.slide--active' ).removeClass ( 'slide--active' );
			$ ( '.slide:last' ).addClass ( 'slide--active' );
		}
	}

	var startSlideShow = setInterval ( nextSlide, 6000 );

	$ ( '.next' ).on ( 'click', nextSlide );
	$ ( '.prev' ).on ( 'click', prevSlide );

}