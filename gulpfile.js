const {src, dest, watch, series, start} = require('gulp');
const browserSync = require('browser-sync').create();
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
// const watch = require('gulp-watch');

function server() {
	
	browserSync.init({
		server: { baseDir: './app/'}
	});

	// watch('./app/**/*.html', browserSync.stream());
	// watch('./app/**/*.js', browserSync.reload());
	// watch('./app/img/*.*', browserSync.reload());


	watch(['./app/**/*.html', './app/**/*.js', './app/img/*.*', './app/less/**/*.less'], series(styles)).on('change', browserSync.reload);


	// watch('./app/less/**/*.less', function(){
	// 	start('styles');
	// });

}

function styles() {
	return src('./app/less/main.less')
	.pipe(plumber({
		errorHandler: notify.onError(function(err){
			return {
				title: 'Styles',
				sound: false,
				message: err.message
			}
		})
	}))
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer({
		browsers: ['last 6 versions'],
		cascade: false
	}))
	.pipe(sourcemaps.write())
	.pipe(dest('./app/css'))
	.pipe(browserSync.stream());
}

// gulp.task('default', ['server']);

exports.styles = styles
exports.default = series(styles, server)
