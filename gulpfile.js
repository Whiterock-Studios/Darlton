var gulp         = require ( 'gulp' ),
	plumb        = require ( 'gulp-plumber' ),
	rename       = require ( 'gulp-rename' ),
	concat       = require ( 'gulp-concat' ),
	uglify       = require ( 'gulp-uglify' ),
	sass         = require ( 'gulp-sass' ),
	autoprefixer = require ( 'gulp-autoprefixer' ),
	livereload   = require ( 'gulp-livereload' );

// Concat and minify Javascript
gulp.task ( 'scripts', function ()
{
	return gulp.src ( [
		'node_modules/smoothstate/jquery.smoothState.min.js',
		'node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
		'node_modules/blazy/blazy.min.js',
		'node_modules/gsap/src/minified/TweenMax.min.js',
		'assets/scripts/_header.js',
		'assets/scripts/_init-scrollmagic.js',
		'assets/scripts/_number-counter.js',
		'assets/scripts/_slide-in.js',
		'assets/scripts/_slider.js',
		'assets/scripts/_page-load.js',
		'assets/scripts/_smoothstate-init.js'
	] )
			   .pipe ( plumb () )
			   .pipe ( concat ( 'build.js', { newLine : ';' } ) )
			   .pipe ( uglify () )
			   .pipe ( gulp.dest ( 'assets/scripts/' ) )
			   .pipe ( livereload () );
} );

// Compile and minify SASS
gulp.task ( 'sass', function ()
{
	gulp.src ( 'assets/styles/main.scss' )
		.pipe ( plumb () )
		.pipe ( sass ().on ( 'error', sass.logError ) )
		.pipe ( sass ( { outputStyle : 'compressed' } ) )
		.pipe ( gulp.dest ( 'assets/styles' ) )
		.pipe ( livereload () );
} );

// Prefix the compiled CSS files from above
gulp.task ( 'prefixer', function ()
{
	return gulp.src ( 'assets/styles/*.css' )
			   .pipe ( plumb () )
			   .pipe ( autoprefixer ( {
				   browsers : [ 'last 2 versions' ],
				   cascade : false
			   } ) )
			   .pipe ( gulp.dest ( 'assets/styles' ) );
} );

// Refresh on a PHP change
gulp.task ( 'phprefresh', function ()
{
	return gulp.src ( '' )
			   .pipe ( plumb () )
			   .pipe ( livereload () );
} );

//Default Function

gulp.task ( 'default', function ()
{
	livereload.listen ();
	gulp.watch ( 'assets/styles/*.scss', [ 'sass' ] );
	gulp.watch ( 'assets/styles/*.css', [ 'prefixer' ] );
	gulp.watch ( 'assets/scripts/_*.js', [ 'scripts' ] );
	gulp.watch ( '*.php', [ 'phprefresh' ] );
	gulp.watch ( 'page-templates/*.php', [ 'phprefresh' ] );
	gulp.watch ( 'woocommerce/**/*.php', [ 'phprefresh' ] );
	gulp.watch ( 'partials/*.php', [ 'phprefresh' ] );
} );
