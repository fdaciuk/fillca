;(function( doc, $, Module, undefined ) {
    'use strict';

    function newSale() {
        var $private = {};
        var $public = {};

        $public.init = function init() {
            Module.controllerSaleList.init();
            Module.controllerNewSale.init();
        };

        return $public;
    }

    newSale().init();
})( document, $j, window.Module );


