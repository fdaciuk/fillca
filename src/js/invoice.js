;(function( doc, $, Module, undefined ) {
    'use strict';

    function invoice() {
        var $private = {};
        var $public = {};

        $public.init = function init() {
            Module.controllerNewInvoice.init();
            Module.controllerCreateInvoice.init();
        };

        return $public;
    }

    invoice().init();
})( document, $j, window.Module );


