jQuery ( document ).ready ( function ( $ )
{
	console.log ( 'smoothstate before pageLoad' );
	pageLoad ( $ );

	// start smoothstate
	$ ( '#smoothstate' ).smoothState ( {

		// pre-fetches content before the user releases their finger (touchscreen)

		prefetch : true,
		allowFormCaching : false,
		forms : '',

		// runs once the ajax request starts
		onStart : {
			render : function ()
			{
				loader.addClass ( 'loading' );
			}
		},

		// stuff to run once the new content has been loaded and added to the DOM
		onAfter : function ()
		{
			pageLoad ();

		}

	} ).data ( 'smoothState' );

} );