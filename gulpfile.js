var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

var input = './scss/**/*.scss';
var output = './css';

gulp.task('default', ['sass', 'watch', 'serve']);

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
