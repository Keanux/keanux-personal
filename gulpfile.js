var jshint = require('gulp-jshint');
var gulp = require('gulp');

gulp.task('lint', function () {
  return gulp.src(['./client/**/*.js', './server/**/*.js'])
    .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
    .pipe(jshint.reporter('fail', { verbose: true }));
});

gulp.task('default', ['lint']);
