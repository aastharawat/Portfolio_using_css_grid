var gulp = require("gulp");
var sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");

(browserSync = require("browser-sync").create()),
  browserSync.init({
    server: ".",
  });

gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("run", gulp.series(["sass"]));

gulp.watch("./sass", gulp.series("sass"), browserSync.reload);
gulp.watch("./index.html").on("change", browserSync.reload);
// gulp.watch("/js/modal.js", gulp.series("js"), browserSync.reload);

gulp.task("watch", async function () {
  gulp.watch("./sass/*.sass", gulp.series("sass"));
});

gulp.task("default", gulp.series(["run", "watch"]));
