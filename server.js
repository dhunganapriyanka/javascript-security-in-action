const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const pages = {
  "/": "secure.html",
  "/secure.html": "secure.html",
  "/vulnerable.html": "vulnerable.html",
  "/secure.js": "secure.js",
  "/style.css": "style.css"
};

http.createServer((req, res) => {
  const file = pages[req.url];

  if (!file) {
    res.writeHead(404);
    return res.end("Page not found");
  }

  if (file === "secure.html") {
    // CSP blocks inline scripts and eval() on the secure page.
    res.setHeader("Content-Security-Policy",
      "default-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'; base-uri 'none'");
  }

  const type = file.endsWith(".js") ? "text/javascript"
    : file.endsWith(".css") ? "text/css" : "text/html";
  res.setHeader("Content-Type", type + "; charset=utf-8");

  fs.readFile(path.join(__dirname, "public", file), (error, content) => {
    if (error) {
      res.writeHead(500);
      return res.end("Could not load the page");
    }
    res.end(content);
  });
}).listen(port, "0.0.0.0", () => {
  console.log(`Project is running on port ${port}`);
});
