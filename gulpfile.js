var jshint = require('gulp-jshint');
var gulp = require('gulp');
var stylish = require('jshint-stylish');

gulp.task('jshint', function () {
  return gulp.src(['./server/**/*.js', './clinet/**/*.js'])
    .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail', { verbose: true }));
});

gulp.task('default', ['jshint']);
