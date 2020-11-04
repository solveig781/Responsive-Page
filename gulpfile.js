
const browserSync = require('browser-sync').create();

const { src, dest, parallel, series, watch } = require('gulp');


function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: 'app/' }, // Указываем папку сервера
		notify: false, // Отключаем уведомления
		online: true // Режим работы: true или false
	})
}
exports.browsersync = browsersync;


var gulp = require('gulp'), // Подключаем Gulp
		sass = require('gulp-sass'); // Подключаем Sass пакет
 
gulp.task('sass', function() { // Создаем таск "sass"
	return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('css')) // Выгружаем результата в папку css
	});
 
gulp.task('watch', function() {
	gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});
 
gulp.task('default', gulp.series('server', 'watch'));
