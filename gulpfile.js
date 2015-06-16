var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var gulp = require('gulp');

var files = [
  './server/**/*.js',
  './clinet/**/*.js',
  './test/**/*.js'
];

gulp.task('jshint', function () {
  return gulp.src(files)
    .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail', { verbose: true }));
});

gulp.task('jscs', function () {
  return gulp.src(files)
    .pipe(jscs());
});

gulp.task('default', ['jshint', 'jscs']);
