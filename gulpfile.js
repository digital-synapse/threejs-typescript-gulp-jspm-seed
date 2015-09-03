var config = require('./gulp-config.json');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');

var browserSync = require('browser-sync').create();
var tsProject = ts.createProject('tsconfig.json');
 
var tsd = require('gulp-tsd'); 
gulp.task('tsd', function (callback) {
    tsd(config.tsd, callback);
});

function build() {
    var tsResult = gulp.src( config.src.files.ts ).pipe(ts(tsProject));
    var other = gulp.src( config.src.files.other );
        
    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
        tsResult.dts.pipe(gulp.dest( config.build.path)),
        tsResult.js.pipe(gulp.dest( config.build.path)),
        other.pipe(gulp.dest( config.build.path)),
        gulp.src( 'config.js').pipe(gulp.dest( config.build.path))
    ]);    
}
gulp.task('build', build);

// Static server
gulp.task('dev',['tsd','build'], function() {
    browserSync.init({
        server: {
            baseDir: config.build.path,
            routes: config.build.routes
        }
    });
    gulp.watch(config.src.files.all).on('change', function() {
        build();
        browserSync.reload();        
    });
});
