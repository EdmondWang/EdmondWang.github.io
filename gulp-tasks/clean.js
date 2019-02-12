const del = require("del");

function clean(plugins) {
  return function() {
    del(["./dist/**/*"]);
    return Promise.resolve("clean");
  };
}

module.exports = clean;
