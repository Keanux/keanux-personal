var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jscs = require('gulp-jscs');
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var karma = require('karma').server;
var protractor = require("gulp-protractor").protractor;

var serverTestFiles = './test/server/**/*.js';
var clientTestFiles = './test/client/**/*.js';
var e2eTestFiles = './test/e2e/**/*.js';
var files = [
  './server/**/*.js',
  './clinet/**/*.js',
  serverTestFiles,
  clientTestFiles,
  e2eTestFiles
];

// Test
gulp.task('mocha', function () {
  return gulp.src(serverTestFiles, {read: false})
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

gulp.task('karma', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('e2e', function () {
  return gulp.src(e2eTestFiles)
    .pipe(protractor({
      configFile: "protractor.conf.js",
      args: ['--baseUrl', 'http://localhost:8080']
    }))
    .on('error', function (e) {
      throw e;
    })
});

// Style Check
gulp.task('jshint', function () {
  return gulp.src(files)
    .pipe(jshint({linter: require('jshint-jsx').JSXHINT}))
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail', {verbose: true}));
});

gulp.task('jscs', function () {
  return gulp.src(files)
    .pipe(jscs());
});

gulp.task('lint', ['jshint', 'jscs']);
