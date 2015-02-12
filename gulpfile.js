'use strict';

var gulp = require( 'gulp' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var notify = require( 'gulp-notify' );
var watch = require( 'gulp-chokidar' )( gulp );

gulp.task( 'js', function() {
    gulp.src([
        'src/js/helpers/*.js',
        'src/js/controllers/*.js',
        'src/js/app.js'
    ])
    .pipe( concat( 'main.min.js' ) )
    .pipe( uglify() )
    .pipe( gulp.dest( 'public/js' ) )
    .pipe( notify( 'JS OK!' ) );
});

gulp.task( 'watch', function() {
    watch( 'src/js/**/*.js', { root: 'src/js' }, 'js' );
});

gulp.task( 'default', [ 'watch' ]);