;(function( doc, $, Module, undefined ) {
    'use strict';

    function App() {
        var $private = {};
        var $public = {};

        $public.init = function init() {
            Module.controllerSaleList.init();
            Module.controllerNewSale.init();
        };

        return $public;
    }

    App().init();
})( document, $j, window.Module );


