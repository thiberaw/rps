var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('style', function(){
    gulp.src('css/*.css')
                   .pipe(autoprefixer())
                   .pipe(gulp.dest('build'))
});
