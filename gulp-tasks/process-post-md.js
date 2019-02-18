const marked = require("marked");
const fsp = require("fs").promises;

let postDirPath = "./data/posts/";
let outputDirPath = "./dist/posts/";

function processPostMd(plugins) {
  return function() {
    console.log("process post markdown files");
    fsp
      .mkdir(outputDirPath)
      .then(() => {
        return fsp.readdir(postDirPath).then(mdFileNames => {
          mdFileNames.forEach(mdFileName => {
            fsp.readFile(postDirPath + mdFileName).then(content => {
              let html = marked(content.toString());
              fsp
                .writeFile(
                  outputDirPath + mdFileName + ".html",
                  html,
                  err => {}
                )
                .catch(err => {
                  console.log(err);
                });
            });
          });
        });
      })
      .catch(err => {
        console.log(err);
      });
    return Promise.resolve("process post markdown files");
  };
}

module.exports = processPostMd;
