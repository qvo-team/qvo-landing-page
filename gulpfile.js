var gulp = require('gulp'),
  sass = require('gulp-sass');
  // concat = require('gulp-concat'),
  // rename = require('gulp-rename'),
  // uglify = require('gulp-uglify'),
  // bower = require('gulp-bower');

var styleSrc = ['./scss/**/*.scss'];
var bowerDir = './bower_components';

gulp.task('default', ['build', 'watch']);

gulp.task('build', ['sass']);

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest(bowerDir));
});

gulp.task('sass', function () {
  return gulp.src(styleSrc)
    .pipe(sass({
      includePaths: [bowerDir + '/bootstrap-sass/assets/stylesheets'],
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
  gulp.watch(styleSrc, ['sass']);
});
