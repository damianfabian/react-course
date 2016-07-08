var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

const copy = ['jquery','bootstrap']; //'react-redux', 'redux'
const vendors = ['react', 'react-dom'];

gulp.task('build:vendor', () => {
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
});

gulp.task('build:app', () => {
  browserify({
    entries: ['./public/js/src/app.jsx'],
    extensions: ['.js', '.jsx'],
    debug: true
  })
  .external(vendors) // Specify all vendors as external source
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('public/js/build/'))
  ;
});

gulp.task('build:copy', function() {
    gulp.src(['./node_modules/jquery/dist/jquery.min.js','./node_modules/bootstrap/dist/js/bootstrap.min.js'])
    .pipe(gulp.dest('./public/js/build'));
});

gulp.task('default', ['build:vendor', 'build:app', 'build:copy']);

