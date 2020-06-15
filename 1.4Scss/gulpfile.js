var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');


function css_style(done) {

	gulp.src('./css/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			outputStyle: 'compressed' // 
		}))
		.pipe(rename({suffix: '.min'}))
		.on('error', console.error.bind(console))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.stream());

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

gulp.task('default', gulp.parallel(watchFile, sync));