var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var gulp = require('gulp');
var mocha = require('gulp-mocha');

var testfiles = './test/**/*.js';
var files = [
  './server/**/*.js',
  './clinet/**/*.js',
  testfiles
];

// Test
gulp.task('test', function () {
  return gulp.src(testfiles, { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }))
    .once('error', function () {
      process.exit(1);
    })
    .once('end', function () {
      process.exit();
    });
});

// Style Check
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
