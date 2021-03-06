var gulp = require("gulp");
var sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

gulp.task("sass-build", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("build", gulp.series(["sass-build"]));
