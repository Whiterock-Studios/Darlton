function counters ( $ )
{
	if ( $ ( '.count-me' ).length > 0 )
	{

		console.log ( 'numbercounter' );

		var hasCounted = false;

		var countUp = new ScrollMagic.Scene ( {
			triggerElement : ".count-me",
			triggerHook : "onEnter"
		} ).on ( 'start', function ()
		{
			if ( hasCounted == false )
			{

				var currentCounter = 1;

				$ ( '.count-me' ).each ( function ()
				{
					var currentNumber  = 0,
						totalNumber    = $ ( this ).attr ( 'data-count' ),
						currentElement = $ ( this );

					var timeout = setInterval ( function ()
					{
						if ( currentNumber <= totalNumber )
						{
							currentElement.html ( currentNumber );
							currentNumber ++;
						}
						else
						{
							clearInterval ( timeout );
						}
					}, 75 );
					currentCounter ++;
				} );
			}
			hasCounted = true;
		} ).addTo ( smc );

	}
}
