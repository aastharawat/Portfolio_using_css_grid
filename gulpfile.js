var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
browserSync = require('browser-sync').create(),

browserSync.init({
    server: '.'
    });

gulp.task('sass', async function () {
    return gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  }); 

 
  gulp.task('css', async function () {
    gulp.src('./css/*.css')
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(gulp.dest('./dist/'));
  });

  gulp.task('run', gulp.series( ['sass', 'css']));

    gulp.watch('./scss/**/*.scss', gulp.series('sass'), browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
  gulp.task('watch', async function(){
      gulp.watch('./sass/*.sass', gulp.series('sass'));
      gulp.watch('./css/*.css', gulp.series('css'))
  });
 

gulp.task('default', gulp.series(['run', 'watch']));