var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
	concatCss = require('gulp-concat-css');


function css_style(done) {

	gulp.src('./css/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(concatCss("style.css"))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream())

	done();
}

function sync(done) {

	browserSync.init({
		server: {
			baseDir: "./"
		},
		port: 3000,
		notify: false
	})

	done();
}

function browserReload(done) {
	browserSync.reload();
	done();
}

function watchFile() {
	gulp.watch('./css/**/*.css', css_style);
	gulp.watch('./**/*.html', browserReload);
}

gulp.task('default', gulp.parallel(sync, watchFile))