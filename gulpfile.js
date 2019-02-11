"use strict";

const { series, src, dest } = require("gulp");
const plugins = require('gulp-load-plugins')();

(function registerTasks(names) {
  names.forEach((name) => {
    exports[name] = require('./gulp-tasks/' + name)(plugins);
  });
})(['clean']);


function defaultTask() {
  console.log("default task");
}

function clean() {
  return Promise.resolve('clean');
}

function js() {
  return src('./src/*.js').pipe(plugins.babel()).pipe(dest('./dist/'));
}

function css() {
  return Promise.resolve('css');
}

exports.build = series(clean, js, css);
exports.default = series(defaultTask);
