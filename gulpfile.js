let gulp = require('gulp');
// let babel = require('gulp-babel');
let ts = require('gulp-typescript');
let tsProject = ts.createProject("tsconfig.json");
//
// gulp.task('js', function () {
//     gulp.src('src/server/**/*.js')
//         .pipe(babel({
//             "presets": [
//                 "es2015"
//             ],
//             "plugins": [
//             ]
//         }))
//         .pipe(gulp.dest('dist'))
// });

gulp.task('ts', function () {
    return gulp.src('src/server/*.ts')
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});



gulp.task('default', ['ts']);

