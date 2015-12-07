var gulp = require('gulp');
var	sass = require('gulp-sass');
var	autoprefixer = require('gulp-autoprefixer');
var	plumber = require('gulp-plumber');
var	browserSync = require('browser-sync');
var jade = require('gulp-jade');
var sourcemaps = require('gulp-sourcemaps');
var clean = require('gulp-clean');


gulp.task('browserSync', function() {
    browserSync.init({ server: { baseDir: "./app" } });
});

gulp.task('clean', function(){
    return gulp.src('./dist', {read: false}).pipe(clean());
});

gulp.task('sass', function () {
    gulp.src('app/assets/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.stream());
 });

gulp.task('jade', function() {
    gulp.src('app/views/*.jade')
        .pipe(plumber())
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest('./app'));
});

gulp.task('default', ['watch']);

gulp.task('watch', ['sass', 'jade'], function(){
	browserSync.init({ server: { baseDir: "./app" } });

    gulp.watch('app/assets/sass/**/*.scss', ['sass']);
	gulp.watch('app/views/**/*.jade', ['jade']);
	gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

gulp.task('build', ['clean'], function(){
    gulp.src([
            'app/*.html',
            'app/assets/sass/**/*',
            'app/assets/css/**/*',
            'app/assets/js/**/*',
        ], { base: "./app"})
        .pipe(gulp.dest("./dist"));

    gulp.src([
            'bower.json',
            'package.json',
        ], { base: "./"})
        .pipe(gulp.dest("./dist"));
});



