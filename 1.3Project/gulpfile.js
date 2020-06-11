var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	concatCss = require('gulp-concat-css');


function css_style(done) {
	gulp.src('css/**/*.css')
		.pipe(concatCss("style.css"))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream())
	done();
}

function sync(done) {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		port: 3000
	})
}

function browserReload(done) {
	browserSync.reload()
}

function watchFile() {
	gulp.watch('css/**/*.css', css_style);
	gulp.watch('./**/*.html', browserReload);
}

gulp.task('default', gulp.parallel(sync, watchFile))