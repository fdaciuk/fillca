;(function( win ) {
    function bind() {
        var context = arguments[0];
        var callback = arguments[1];
        var params = Array.prototype.slice.call( arguments, 2 );

        return function bindReturn() {
            callback.apply( context, params );
        };
    }

    win.Module = win.Module || {};
    win.Module.helpers = win.Module.helpers || {};
    win.Module.helpers.bind = bind;
})( window );