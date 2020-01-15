const { src, dest, series } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const gulpStylelint = require('gulp-stylelint');
const del = require('del');

const copy = (cb) => {
  src('./src/**/*.scss')
    .pipe(dest('./dist/scss'));
  cb();
};

const clean = () => del(['./dist'])

const build = (cb) => {
  src(['./src/cpt/*.scss', './src/index.scss'])
  .pipe(sass())
  .pipe(autoprefixer({
    cascade: false
  }))
    .pipe(dest('./dist/css'))
    .pipe(cssmin())
    .pipe(rename(function (path) {
      return {
        dirname: path.dirname + "/css",
        basename: path.basename + ".min",
        extname: ".css"
      };
    }))
    .pipe(dest('./dist/'));
  cb();
}

exports.styleLint = (cb) => {
  src('src/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ],
    }));
    cb();
  }

exports.default = series(clean, copy, build);