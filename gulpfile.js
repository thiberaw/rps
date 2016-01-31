var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function(){
    gulp.src('css/*.css')
                   .pipe(autoprefixer())
                   .pipe(gulp.dest('build'))
});

gulp.task('default', function(){
    gulp.watch('css/*.css', ['style ']);
});

