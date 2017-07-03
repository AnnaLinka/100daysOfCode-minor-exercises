var gulp = require('gulp');
var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', function () {
return gulp.src('src/scss/*.scss')

.pipe(sass({
  errLogToConsole:true,
  outputStyle:'compressed'
}))

// .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))

.pipe(gulp.dest('dist/css'))
});

gulp.task('watch', ['styles'], function (){
  gulp.watch('src/scss/*.scss',['styles']);
});
