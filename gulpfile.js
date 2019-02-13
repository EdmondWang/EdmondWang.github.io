const { series, src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();

let ep = exports;

(function registerTasks(names) {
  names.forEach(name => {
    ep[name] = require("./gulp-tasks/" + name)(plugins);
  });
})(["clean", "script"]);

function css() {
  return Promise.resolve("css");
}

ep.build = series(ep["clean"], ep["script"], css);
ep.default = ep.build;
