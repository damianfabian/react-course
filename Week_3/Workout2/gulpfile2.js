var gulp = require('gulp'),
 gutil = require('gulp-util');

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
  ;
};

function app(){
  browserify({
    entries: ['./public/js/src/app.jsx','./redux/components/index.js'],
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
  ;
};

gulp.task('bundle', function() {
    vendor();
    app();
});

gulp.task('build:copy', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('./public/js/build'));
});

gulp.task('watch', function () {
  gulp.watch(['./redux/*.js'], ['bundle']);
});

gulp.task('default', ['bundle', 'watch']);

