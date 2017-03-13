const gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  browserify = require('gulp-browserify'),
  cleanCSS = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  del = require('del'),
  obfuscate = require('gulp-obfuscate'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  config = require('./config'),
  rev = require('gulp-rev'),
  revCollector = require("gulp-rev-collector"),
  gulpsync = require('gulp-sync')(gulp);



gulp.task('delCss',function(){
  del([config.sass.del]);
  del([config.css.del]);
});
gulp.task('sass',['delCss'], function () {
  return gulp.src(config.sass.src)//'./app/source/sass/*.scss'
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest));//'./app/source/sass/css'
});

gulp.task('concatcss',['sass'],function(){
  return gulp.src(config.css.arr)    //- 需要处理的css文件，放到一个字符串数组里
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest(config.css.src));//'./app/source/css'
});

gulp.task('css',['concatcss'], function() {
  return gulp.src('./app/source/css/all.min.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(config.css.dest))
    .pipe(rev())  //set hash key
    .pipe(gulp.dest(config.css.dest))
    .pipe(rev.manifest()) //set hash key json
    .pipe(gulp.dest(config.css.rev)); //dest hash key json;;
});

gulp.task('delJs',function(){
  del([config.js.del]);
});

gulp.task('js',['delJs'],function(){
  gulp.src(config.js.arr)
    .pipe(concat('all.js'))
    // .pipe(babel({
    //   presets: ['es2015']
    // }))
    .pipe(gulp.dest('./app/source/js/module'))
    .pipe(rename({suffix: '.min'}))
    .pipe(browserify())
    // .pipe(uglify({ mangle: false, compress:true, output: { beautify: false } }))
    //.pipe(obfuscate())
    .pipe(gulp.dest('./app/out/js'))
    .pipe(rev())  //set hash key
    .pipe(gulp.dest(config.js.dest))
    .pipe(rev.manifest()) //set hash key json
    .pipe(gulp.dest(config.js.rev)); //dest hash key json;
});


gulp.task('rev', function () {
  return gulp.src([config.rev.revJson, config.rev.src])
    .pipe( revCollector({
      replaceReved: true
    }) )
    .pipe(gulp.dest(config.rev.dest) );
});


gulp.task('default',['js','css']);
// gulp.task('default',gulpsync.sync(['js','css','rev']));
