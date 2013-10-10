


    var   Class         = require( "ee-class" )
        , stream        = require( "stream" )
        , type          = require( "ee-types" )
        , log           = require( "ee-log" );



    var StreamCollector = new Class( {
        inherits: stream.Readable

        , __chunkSize: 2<<11 //4k
        , __offset: 0


        , init: function( buf ){
            stream.Readable.call( this );
            this.__buffer = buf;
        }


        , _read: function( size ){
            var n = 0;

            do {
                this.__offset += this.__chunkSize;
                n += this.__chunkSize;
            } while( this.push( this.__buffer.slice( ( this.__offset - this.__chunkSize ), this.__chunkSize ) ) 
                && this.__offset < this.__buffer.length 
                && n <= size );
            
            if ( this.__offset >= this.__buffer.length ) this.push( null );
        }
    } );

    module.exports = StreamCollector;