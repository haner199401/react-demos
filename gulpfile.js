/**
 * Created by haner on 15/11/10.
 */
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    port = process.env.port || 3838;


// live reload
gulp.task('server',function(){
    browserSync.init({
        server:'./simple-demo',
        port:port,
        notify:true
    });
});

// reload Js
gulp.task('js',function(){
    gulp.src('./**/*.js')
        .pipe(browserSync.stream());
});

// reload html
gulp.task('html',function(){
    gulp.src('./**/*.html')
        .pipe(browserSync.stream());
});

//watch for reload
gulp.task('watch',function(){
    gulp.watch('./**/*.js',['js']);
    gulp.watch('./**/*.html',['html']);
});


//default
gulp.task('default',['server','watch']);
