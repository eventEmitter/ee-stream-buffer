


	var   StreamBuffer 		= require( "./" )
		, StreamCollector 	= require( "ee-stream-collector" );


	var   buf 				= new Buffer( 20 )
		, streamBuffer 		= new StreamBuffer( buf )
		, collector 		= new StreamCollector();


	collector.on( "end", function( data ){
		console.log( data ); 	// Buffer .....
		console.log( buf ); 	// Buffer .....
	} );

	streamBuffer.pipe( collector );

