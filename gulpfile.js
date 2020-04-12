const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-minify-html');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');

gulp.task('imagemin', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});
gulp.task('logomin', function() {
    return gulp.src('src/logo/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/logo'))
});
gulp.task('htmlmin', function() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
});
gulp.task('autoprefixer', function() {
    return gulp.src('src/css/*.css')
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
});
gulp.task('compress', function() {
    return gulp.src('src/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('dist/js'))
});

gulp.task('build', gulp.parallel('imagemin', 'logomin', 'htmlmin', 'autoprefixer', 'compress'));