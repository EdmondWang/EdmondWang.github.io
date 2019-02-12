"use strict";

const { series, src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();

(function registerTasks(names) {
  names.forEach(name => {
    exports[name] = require("./gulp-tasks/" + name)(plugins);
  });
})(["clean"]);

function js() {
  return src("./src/*.js")
    .pipe(plugins.babel())
    .pipe(dest("./dist/"))
    .pipe(plugins.uglify())
    .pipe(plugins.rename({ extname: ".min.js" }))
    .pipe(dest("./dist/"));
}

function css() {
  return Promise.resolve("css");
}

exports.build = series(exports["clean"], js, css);
exports.default = exports.build;
