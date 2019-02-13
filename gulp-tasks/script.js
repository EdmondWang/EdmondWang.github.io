const { src, dest } = require("gulp");

function script(plugins) {
  return function() {
    return src("./src/*.js")
      .pipe(plugins.babel())
      .pipe(dest("./dist/"))
      .pipe(plugins.uglify())
      .pipe(plugins.rename({ extname: ".min.js" }))
      .pipe(dest("./dist/"));
  };
}

module.exports = script;
