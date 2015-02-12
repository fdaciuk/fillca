;(function( win, doc, $, undefined ) {
    'use strict';

    function controllerNewSale() {
        var $private = {};
        var $public = {};

        $public.init = function init() {
            $private.handleNewSale();
        };

        $private.handleNewSale = function handleNewSale() {
            console.log( 'handleNewSale' );
            if( $private.hasSaveButtonOnScreen() )
                return $private.fillFieldsNewSale();
            setTimeout( handleNewSale, 300 );
        }

        $private.hasSaveButtonOnScreen = function hasSaveButtonOnScreen() {
            return !!doc.querySelector( 'a[href="javascript:saveSaleForm()"]' );
        };

        $private.fillFieldsNewSale = function fillFieldsNewSale() {
            $private.inputClient = doc.querySelector( '#cliente' );
            $private.inputClient.click();
            $private.openAutocomplete( $private.fillSaleFields );
        };

        $private.openAutocomplete = function openAutocomplete( callback ) {
            var cb = Module.helpers.bind( $private, openAutocomplete, callback );
            console.log( 'openAutocomplete', cb );
            if( ! $private.isAutocompleteReady() ) {
                return setTimeout( cb, 300 );
            }

            $private.fillAutocomplete();
            setTimeout( callback, 1000 );
            return console.log( 'Era para ter executado o callback', callback );
        };

        $private.isAutocompleteReady = function isAutocompleteReady() {
            return !!doc.querySelector( '#autocompleteSugestions' ) && !!$( doc.querySelector( '#autocompleteSugestions' ) ).find( 'ul' )[0];
        };

        $private.fillAutocomplete = function fillAutocomplete() {
            $( doc.querySelector( '#autocompleteSugestions' ) ).find( 'ul' ).eq( $private.random( 5 ) )[0].click();
        };

        $private.random = function random( number ) {
            return Math.ceil( Math.random() * number );
        };

        $private.fillSaleFields = function fillSaleFields() {
            console.log( 'fillSaleFields' );
            $private.fillNSerie();
            $private.fillProduct();
        };

        $private.fillNSerie = function fillNSerie() {
            var $nSerie = $( doc.querySelector( '#nrSerie' ) );
            $nSerie.val( 18 );
            $nSerie.trigger( 'change' );
        };

        $private.fillProduct = function fillProduct() {
            doc.querySelector( '#Produto_0_' ).click();
            $private.openAutocomplete( $private.fillOtherFields );
        };

        $private.fillOtherFields = function fillOtherFields() {
            $private.fillQuantity();
            $private.fillValue();
            $private.sendForm();
        };

        $private.fillQuantity = function fillQuantity() {
            var $quantity = $( doc.querySelector( '#item_0_itemQty' ) );
            $quantity.val( $private.random( 5 ) );
            $quantity.trigger( 'blur' );
        };

        $private.fillValue = function fillValue() {
            var $value = doc.querySelector( '#item_0_vlUnitario' );
            $value.val( $private.random( 300 ) );
            $value.trigger( 'blur' );
        };

        $private.sendForm = function sendForm() {
            doc.querySelector( '[href="javascript:saveSaleForm()"]' ).click();
        };

        return $public;
    }

    window.Module = window.Module || {};
    window.Module.controllerNewSale = controllerNewSale();
})( window, document, $j );