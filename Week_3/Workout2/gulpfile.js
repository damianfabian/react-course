var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

const copy = ['jquery','bootstrap']; //'react-redux', 'redux'
const vendors = ['react', 'react-dom'];

function vendor (){
  const b = browserify({
    debug: true
  });

  // require all libs specified in vendors array
  vendors.forEach(lib => {
    b.require(lib);
  });

  b.bundle()
  .pipe(source('vendor.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: false}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('public/js/build/'))
  .pipe(browserSync.stream({once: true}))
  
};

function app(){
  browserify({
    entries: ['./public/js/src/app.jsx','./redux/components/index.js','./components/index.js'],
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .external(vendors) // Specify all vendors as external source
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('public/js/build/'))
  .pipe(browserSync.stream({once: true}))
  
};

gulp.task('copyjs', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('./public/js/build'));
});

gulp.task('bundle', ['copyjs'] ,function() {
    gutil.log(" Running bundle!!!");
    vendor();
    app();
});


if (process.env.NODE_ENV === 'production') {
    console.log('*** production ***');

    gulp.task('build', ['bundle']);
}
else {
    console.log('*** development ***');

    gulp.task('build', ['bundle']);
    gulp.task('scripts-watch', ['bundle'], reload);

    gulp.task('browser-sync', ['nodemon'], function() {
      browserSync.init({
        proxy: "http://localhost:3000",
        injectChanges: true,
        browser: ['google chrome'],
        port: 4000
      });
    });

    gulp.task('nodemon', function (cb) {
      var called = false;
      return nodemon({
        script: 'app.js',
        ext: 'js handlebars css',
        ignore: ['public/js/build/*','gulpfile.js']
      }).on('start', function () {
        if (!called) {
          called = true;
          cb();
        }
      });
    });

    gulp.task('default', ['browser-sync', 'build'], function () {
      gulp.watch(["public/js/src/*.js","public/js/src/*.jsx","redux/**/*.js"], ['scripts-watch'], reload);
      gulp.watch([ "views/**/*.handlebars", 'views/layouts/*.handlebars'], reload);
    });
}


