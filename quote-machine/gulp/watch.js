var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass'),
webpack = require('webpack');

gulp.task('browserSync', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'src/'
    },
  });
});

gulp.task('live', function(){
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist/'
    },
  });
});

gulp.task('html', function(){
  return gulp.src('src/**/*.html')
    .pipe(browserSync.stream());
});

gulp.task('jsReload', ['js'], function() {
  return browserSync.reload();
})

gulp.task('sass', function() {
return gulp.src('src/assets/**/*.sass')
  .pipe(sass())
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
})
  .pipe(gulp.dest('./src/assets/'))
  .pipe(browserSync.stream());
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/assets/**/*.sass', ['sass']);
  gulp.watch('src/assets/**/!(Main)*.js', ['jsReload']);
})

gulp.task('default', ['browserSync', 'html', 'sass', 'jsReload', 'watch']);
