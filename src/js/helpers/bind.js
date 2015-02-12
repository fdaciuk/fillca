;(function( win ) {
    function bind() {
        var context = arguments[0];
        var callback = arguments[1];
        var params = Array.prototype.slice.call( arguments, 2 );

        return function bindReturn() {
            callback.apply( context, params );
        };
    }

    function bind() {
        var context = arguments[0];
        var callback = arguments[1];
        var args = Array.prototype.slice.call( arguments, 2 );
        return function() {
            return callback.apply( context, args );
        };
    }

    win.Module = win.Module || {};
    win.Module.helpers = win.Module.helpers || {};
    win.Module.helpers.bind = bind;
})( window );