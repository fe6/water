'use strict';

var gulp = require( 'gulp' );
var postcss = require( 'gulp-postcss' );
var cssmin = require( 'gulp-cssmin' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sass = require( 'gulp-sass' );
var sourcemaps = require('gulp-sourcemaps');
var salad = require( 'postcss-salad' )( require( './salad.config.json' ) );
var header = require('gulp-header');
var pkg = require( '../package.json' );
// 公共的 banner
const banner = require( './banner' )(true);

gulp.task( 'compile', function() {
  gulp.src( '../water/**/*.scss' )
      .pipe( sass.sync().on( 'error', sass.logError ) )
      .pipe( autoprefixer( { browsers: salad.browsers, cascade: false } ) )
      .pipe( postcss( [ salad ] ) ).pipe( cssmin() )
      .pipe(header( banner ))
      .pipe(sourcemaps.write('../dist/'))
      .pipe( gulp.dest( '../dist/' ) );
} );

gulp.task( 'default', [ 'compile' ] );
