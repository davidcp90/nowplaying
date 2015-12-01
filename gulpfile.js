var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    gutil = require('gulp-util');

gulp.task('lint', function() {
  gulp.src('js/app.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
gulp.task('browserify', function() {
  gulp.src(['js/app.js'])
  .pipe(browserify({insertGlobals: true,debug: true}))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist/js'));
});
gulp.task('less', function () {
  return gulp.src('less/bootstrap.less')
    .pipe(less({compress: true}).on('error', gutil.log))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({browsers: ['last 4 versions'],cascade: false}))
    .pipe(minifyCss({keepBreaks: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
});
gulp.task('watch', function() {
  gulp.watch('less/*.less', ['less']);
  //gulp.watch(['js/*.js', 'js/**/*.js'],['lint','browserify']);
});
