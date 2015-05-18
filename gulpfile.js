var gulp    = require('gulp'),
    babel   = require('gulp-babel'),
    jasmine = require('gulp-jasmine');

gulp.task('compile', function() {
  gulp.src(['./src/app.js', './values/values.js'])
    .pipe(babel())
    .pipe(gulp.dest('./dist'));
});

gulp.task('test', function() {
  gulp.src('./spec/app.spec.js')
    .pipe(jasmine());
});

gulp.task('watch', function() {
  gulp.watch('./src/app.js', ['compile']);
  gulp.watch('./dist/app.js', ['test']);
});

