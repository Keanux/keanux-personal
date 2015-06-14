var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('lint', function () {
  return gulp.src('./client/**/*.js')
    .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['lint']);
