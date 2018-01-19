var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var input = './scss/master.scss';
var output = './css';

gulp.task('default', ['serve']);

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(gulp.dest(output))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  return gulp.watch(input, ['sass']);
});
