const { series, src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();

let ep = exports;

(function registerTasks(names) {
  names.forEach(name => {
    ep[name] = require("./gulp-tasks/" + name)(plugins);
  });
})(["clean", "script", "process-post-md"]);

function css() {
  return Promise.resolve("css");
}

ep.build = series(ep["clean"], ep["script"], css, ep["process-post-md"]);
ep.default = ep.build;
