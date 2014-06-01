!function(){


    var   Class         = require('ee-class')
        , stream        = require('stream')
        , type          = require('ee-types')
        , log           = require('ee-log');



    module.exports = new Class({
        inherits: stream.Readable

        , _chunkSize: 2<<11 //4k
        , _offset: 0


        , init: function init(buf) {
            init.super.call(this);
            //stream.Readable.call( this );
            this._buffer = buf;
        }


        , _read: function(size) {
            var n = 0;

            do {
                this._offset += this._chunkSize;
                n += this._chunkSize;
            } while(this.push(this._buffer.slice((this._offset - this._chunkSize), this._chunkSize)) 
                && this._offset < this._buffer.length 
                && n <= size);
            
            if (this._offset >= this._buffer.length ) this.push(null);
        }
    });
}();
