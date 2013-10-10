# ee-stream-buffer

creates a readable stream from a buffer

## installation

	npm install ee-stream-buffer

## usage


	var   StreamBuffer 		= require( "./" )
		, StreamCollector 	= require( "ee-stream-collector" );


	var   buf 				= new Buffer( 20 )
		, streamBuffer 		= new StreamBuffer( buf )
		, collector 		= new StreamCollector();


	collector.on( "end", function( data ){
		console.log( data ); 	// new buffer with same contents as the original buffer
		console.log( buf ); 	// original buffer
	} );

	streamBuffer.pipe( collector );

