var url = "https://12komnat.com/";

var urlSnippets = require("url-snippets");
//urlSnippets(url,optional_array,callback)
urlSnippets(url, [], function (err, data) {
  console.log(data);
});

urlSnippets(
  url,
  ["isValid", "title", "meta", "p", "img", "html"],
  function (err, data) {
    console.log(data);
  }
);
