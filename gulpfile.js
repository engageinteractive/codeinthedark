var
	browserSync = require('browser-sync'),
	gulp        = require('gulp');

gulp.task('watch', function() {
	browserSync.init({
		files:  [
			'src/index.html',
			'src/main.css',
		],
		notify: false,
		open:   false,
		port:   5757,
		server: 'src'
	});
});

gulp.task('default', ['watch']);
