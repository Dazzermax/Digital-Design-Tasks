const gulp = require('gulp');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');


function css_style(done) {

	gulp.src('app/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			errorLogToConsole: true,
			// outputStyle: 'compressed' сжать css файл  
		}))
		.pipe(autoprefixer({
            overrideBrowserslist:  ['last 2 versions'],
        }))
		.pipe(rename({suffix: '.min'}))
		.on('error', console.error.bind(console))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('app/build/css'))
		.pipe(browserSync.stream());

	done();
}

function sync(done) {

	browserSync.init({
		server: {
			baseDir: "app/"
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
	gulp.watch('app/scss/**/*.scss', css_style);
	gulp.watch('app/**/*.html', browserReload);
}

gulp.task('default', gulp.parallel(watchFile, sync));