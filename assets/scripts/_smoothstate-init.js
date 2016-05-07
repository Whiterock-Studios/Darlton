/**
 * Created by Sam on 04/05/2016.
 */
// makes sure js is called on DOM ready
function pageLoad ()
{
	header ( jQuery );
	slider ( jQuery );
	slideIn ( jQuery );

	(function ()
	{
		// Initialize
		var bLazy = new Blazy ();
	}) ();

}

jQuery ( document ).ready ( function ( $ )
{
	//call pageLoad when the DOM is ready
	pageLoad ();
	// makes sure the opacity is good n' proper

	$ ( '.fade' ).addClass ( 'fade--in' );

	// // // // // // // // // // // // // // //

	// start smoothstate
	$ ( '#smoothstate' ).smoothState ( {
		// prefetches content before the user releases their finger (touchscreen)
		prefetch : true,
		allowFormCaching : false,
		forms : '',

		// runs once the ajax request starts
		onStart : {
			render : function ()
			{
				$ ( '.fade' ).removeClass ( 'fade--in' );
				//$ ( '.loading' ).addClass ( 'spin' );
				$ ( 'body' ).animate ( { scrollTop : 0 }, '1000' );
			}
		},

		// stuff to run once the new content has been loaded and added to the DOM

		onAfter : function ()
		{
			pageLoad ();
			//$ ( window ).trigger ( 'load' );
			//$ ( '.loading' ).removeClass ( 'spin' );
			$ ( '.fade' ).addClass ( 'fade--in' );
		}

	} ).data ( 'smoothState' )

} ); // jquery DOM ready