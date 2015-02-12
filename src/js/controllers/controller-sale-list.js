;(function( win, doc, $, undefined ) {
    'use strict';

    function controllerSaleList() {
        var $private = {};
        var $public = {};

        $public.init = function init() {
            $private.clickCreateNewSale();
        };

        $private.clickCreateNewSale = function clickCreateNewSale() {
            var $btNewSale = doc.querySelector( 'a[href="javascript:novaVenda()"]' );
            $btNewSale.click();
        };

        return $public;
    }

    window.Module = window.Module || {};
    window.Module.controllerSaleList = controllerSaleList();
})( window, document, $j );