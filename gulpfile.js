'use strict';

const browserify = require('browserify'),
  babelify = require('babelify'),
  gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  uglify = require('gulp-uglify'),
  plumber = require('gulp-plumber'),
  cssmin = require('gulp-clean-css');

const files = {
  src: {
    js: {
      all: './src/js/**/*.js',
      game: './src/js/game.js',
      phaser: './src/js/phaser.js',
    },
    css: './src/css/style.css',
  },
  dest: {
    css: './web/css',
    js: './web/js',
    jslib: './web/js/lib',
  },
};

gulp.task('lint', function () {
  return gulp.src(files.src.js.all)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(plumber());
});

gulp.task('cssMin', function () {
  return gulp.src(files.src.css).pipe(cssmin()).pipe(gulp.dest(files.dest.css));
});

gulp.task('phaser', function () {
  let bundle = browserify(files.src.js.phaser).bundle();

  return bundle.pipe(source('phaser.min.js')).pipe(buffer()).//pipe(uglify()).
  pipe(gulp.dest(files.dest.jslib));
});

gulp.task('build', function () {
  let bundle = browserify(files.src.js.game)
    .transform(babelify)
    .bundle();

  return bundle.pipe(source('app.js'))
    .pipe(buffer()).on('error', function (error) {
      console.error('' + error);
    })
    //.pipe(uglify())
    .pipe(gulp.dest(files.dest.js))
    .pipe(plumber());
});

gulp.task('default', ['lint', 'cssMin', 'phaser', 'build']);

gulp.task('watch', function () {
  gulp.watch(files.src.js.all, ['build']);
});

