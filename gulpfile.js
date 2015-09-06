var gulp = require('gulp');
var	sass = require('gulp-sass');
var	rename = require('gulp-rename');
var	autoprefixer = require('gulp-autoprefixer');
var	plumber = require('gulp-plumber');
var	browserSync = require('browser-sync');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');


// Static server
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('sass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
 });


gulp.task('jade', function() {
    gulp.src('./views/*.jade')
        .pipe(plumber())
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['watch']);

gulp.task('watch', ['sass', 'jade'], function(){

	browserSync.init({
	    server: {
	        baseDir: "./"
	    }
	});

    gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('views/**/*.jade', ['jade']);
	gulp.watch("**/*.html").on('change', browserSync.reload);
});