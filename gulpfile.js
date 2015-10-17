'use strict';

var gulp		= require('gulp'),
	$			= require('gulp-load-plugins')(),
	del			= require('del'),
	webpack 	= require('webpack-stream'),
	named		= require('vinyl-named'),
	path		= require('path'),
	minifyHTML  = require('gulp-minify-html'),
	html2js		= require('gulp-ng-html2js'),
	browserSync = require('browser-sync');

// Se necessário carregar variavéis de ambiente	
//require('dotenv').load();
	
var paths = {
	scripts: ['public/src/js/**/*.js', 'public/src/js/*.js'],
	templates: 'public/src/js/views/*.html',
	styles: ['public/src/css/**/*.scss', 'public/src/css/*.scss'],
	images: 'public/src/images/**/*.{png,jpeg,jpg,svg,gif}',
	extras: ['public/src/*.*', 'public/src/fonts/**/*'],
	dest: {
		scripts : 'public/dist/js',
		styles: 'public/dist/css',
		images: 'public/dist/images',
		extras: 'public/dist/extras'
	}
};

gulp.task('lint', function () {
	return gulp.src(['server.js', 'app/**/*.js', 'public/src/js/**/*.js', 'public/src/js/*.js'])
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', ['lint'], function () {

	return gulp.src( paths.scripts )
		.pipe($.plumber())
		.pipe(named())
		.pipe(webpack({
			output: {
				filename: '[name].min.js'
			},
			externals: {
				'jquery': 'jQuery'
			},
			resolve: {
				root: path.resolve('./public/src/js')
			},
			plugins: [
				$.util.env.production ? new webpack.webpack.optimize.UglifyJsPlugin({minimize: true}) : $.util.noop
			],
			devtool: $.util.env.production ? '': '#source-map'
		}))
		.pipe(gulp.dest(paths.dest.scripts));
});

gulp.task('styles', function () {
	return gulp.src(paths.styles)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass({
			outputStyle: $.util.env.production ? 'compressed' : 'nested',
		}).on('error', $.sass.logError))
		.pipe($.sourcemaps.write())
		.pipe($.autoprefixer())
		.pipe(gulp.dest(paths.dest.styles));
});

gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe($.plumber())
		.pipe($.newer(paths.dest.images))
		.pipe($.imagemin({
			optimizationLevel: $.util.env.production ? 5 : 1,
			progressive: true,
			interlaced: true
		}))
		.pipe(gulp.dest(paths.dest.images));
});

gulp.task('html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
  console.log('HTML TASK RUNNED');
  return gulp.src(paths.templates)
    .pipe(minifyHTML(opts))
    .pipe(html2js({
    	moduleName: 'templateCache'
    }))
    .pipe($.concat('templates.min.js'))
    .pipe($.uglifyjs())
    .pipe(gulp.dest(paths.dest.scripts));
});

gulp.task('extras', function () {
	return gulp.src(paths.extras)
		.pipe($.newer(paths.dest.extras))
		.pipe(gulp.dest(paths.dest.extras));
});

gulp.task('clean', function () {
	return del.sync(paths.dest.extras);
});

gulp.task('serve', ['watch'], function () {
	browserSync({
		files: [ 'app/**/*.html', 'public/dist/**', '!public/dist/**/*.map'],
		proxy: 'localhost:8080',
		port: 3000,
		open: !$.util.env.no
	});
});

gulp.task('express', function () {
	return $.nodemon({ 
				script: 'server.js', 
				ext: 'js', 
				ignore: ['public/src/**', 'public/dist/**', 'node_modules/**', 'config/**']
			})
			.on('change', ['lint'])
			.on('restart', function () {
				console.log('restarted!');
			});
});

gulp.task('watch', ['scripts', 'styles', 'html', 'images', 'extras'], function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.templates, ['html']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(paths.extras, ['extras']);
});

gulp.task('default', ['clean', 'express'], function () {
	gulp.start('serve');
});