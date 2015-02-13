'use strict';

var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var notify = require( 'gulp-notify' );
var watch = require( 'gulp-chokidar' )( gulp );
var changed = require( 'gulp-changed' );

gulp.task( 'js', function() {
    gulp.src([
        'src/js/helpers/*.js',
        '!src/js/controllers/controller-new-invoice.js',
        'src/js/controllers/*.js',
        'src/js/new-sale.js'
    ])
    // .pipe( changed( 'public/js' ) )
    .pipe( concat( 'sale.min.js' ) )
    .pipe( uglify() )
    .pipe( gulp.dest( 'public/js' ) )
    .pipe( notify( 'Sale!' ) );


    gulp.src([
        'src/js/controllers/controller-new-invoice.js',
        'src/js/invoice.js'
    ])
    // .pipe( changed( 'public/js' ) )
    .pipe( concat( 'invoice.min.js') )
    .pipe( uglify() )
    .pipe( gulp.dest( 'public/js' ) )
    .pipe( notify( 'Invoice!' ) );
});

gulp.task( 'watch', function() {
    watch( 'src/js/**/*.js', { root: 'src/js' }, 'js' );
});

gulp.task( 'default', [ 'watch' ]);