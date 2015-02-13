;(function( win, doc, $, undefined ) {
    'use strict';

    function controllerNewInvoice() {
        var $public = {};
        var $private = {};

        $public.init = function init() {
            $private.openInvoice();
        };

        $private.openInvoice = function openInvoice() {
            doc.querySelector( '#idNotaFiscal0' ).click();
            setTimeout(function() {
                doc.querySelector( '#createNewInvoiceButton' ).click();
            }, 300);
        };

        return $public;
    }

    win.Module = win.Module || {};
    win.Module.controllerNewInvoice = controllerNewInvoice();
})( window, document, $j );