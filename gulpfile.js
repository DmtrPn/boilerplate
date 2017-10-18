let gulp = require('gulp');
let babel = require('gulp-babel');

gulp.task('js', function () {
    gulp.src('src/server/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'))
});


gulp.task('default', ['js']);

