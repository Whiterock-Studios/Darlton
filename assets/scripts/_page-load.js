var loader, body;

function pageLoad ( $ )
{
	console.log ( 'pageload' );

	loader = $ ( '.loader' );
	body   = $ ( 'body' );

	header ( $ );
	initScrollMagic ( $ );
	counters ( $ );
	slideIn ( $ );
	slider ( $ );

	body.scrollTop ( 0 );
	loader.removeClass ( 'loading' );

	// Initialize
	var bLazy = new Blazy ();

}
