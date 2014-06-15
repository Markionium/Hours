"use strict";

var gulp = require('gulp'),
    karma = require('gulp-karma');

var test_base = 'src/specs/',
    src_base = 'src/main/';

var testFiles = [
        test_base + '**/*_spec.js',
        src_base + '**/*.js'
];

var karmaConfig = test_base + 'config/karma.conf.js';

gulp.task('default', function () {
    //place code for your default task here;
});

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: karmaConfig,
      action: 'run'
    }));
});

gulp.task('default', function() {
  gulp.src(testFiles)
    .pipe(karma({
      configFile: karmaConfig,
      action: 'watch'
    }));
});