const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  res.setHeader("content-type", "text/plain");
  if (url === "/" && method === "GET") {
    res.statusCode = 200;
    res.end("Server is running");
    return;
  }
  else if (url === "/about" && method === "GET") {
    res.statusCode = 200;
    res.end("This is the about page");
    return;
  }
  else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});