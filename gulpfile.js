var gulp =      require('gulp'),
watch =         require('gulp-watch'),
postcss =       require('gulp-postcss'),
autoprefixer =  require('autoprefixer'),
cssvars =       require('postcss-simple-vars'),
nested =        require('postcss-nested'),
cssImport =     require('postcss-import'),
browserSync=    require('browser-sync').create();

gulp.task('default', () => {
  console.log("Hooray - you created a gulp task!");
});

gulp.task('html', () => {
  console.log("Imagine something useful being done to your HTML");
});

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, autoprefixer, cssvars, nested]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', () => {
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['style'], () => {
  return gulp.src('./app/temp/style/style.css')
    .pipe(browserSync.stream());
});