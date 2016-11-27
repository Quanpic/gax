let gulp = require('gulp');
let babel = require('gulp-babel');
let rename = require('gulp-rename');

gulp.task('compile-server', () => {
	return gulp.src('lib/*.js')
		.pipe(babel({
      presets: ['es2015-node', 'stage-0']
    }))
    .pipe(gulp.dest('lib/build'));
});

gulp.task('watch', () => {
	gulp.watch('lib/*.js', ['compile-server']);
});

gulp.task('default', ['watch', 'compile-server']);
