var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var maps   = require('gulp-sourcemaps');
var del    = require('del');

gulp.task("minifyScripts", function() {
  return gulp.src("./js/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./js'))
});

gulp.task('css', function() {
  return gulp.src('./css/style.scss')
  .pipe(maps.init())
  .pipe(sass({
    includePaths: ['./css/']
  }))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('./css'))
});

gulp.task('watchFiles', function() {
  gulp.watch(['./css/*.scss'], ['css']);
  // gulp.watch([''])
});

gulp.task('clean', function() {
  del(['./css/style.css*']);
});
gulp.task("build", ['minifyScripts', 'css']);

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});
