var gulp =      require('gulp'),
postcss =       require('gulp-postcss'),
autoprefixer =  require('autoprefixer'),
cssvars =       require('postcss-simple-vars'),
nested =        require('postcss-nested'),
cssImport =     require('postcss-import');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, autoprefixer, cssvars, nested]))
    .pipe(gulp.dest('./app/temp/styles'));
});