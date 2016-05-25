function slideIn ( $ )
{
	console.log ( 'slidein' );
	$ ( '.anim-in' ).each ( function ( index, el )
	{

		var slideIn = new ScrollMagic.Scene ( {
			triggerElement : el,
			triggerHook : "onEnter"
		} ).on ( 'start', function ()
		{
			$ ( el ).addClass ( 'came-in' );
		} ).addTo ( smc );
	} );
}

