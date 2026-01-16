const http = require("http");
const queryString = require("queryString");

const port = 3000;

const server = http.createServer((res, req) => {
  if (req.url == "/login" && req.method == "POST") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk.toString();
    })

    req.on("end", () => {
      console.log("raw data in form urlencoded" + data);
      let parsedData = queryString.parseString(data);
      console.log("passed raw to json data" + parsedData)

      let jsonString = JSON.stringify(parsedData);
      console.log("json" + jsonString);
      let final = JSON.parse(jsonString)
      console.log(final);

      res.writeHead(200, { "Content-Type": "application/json" })
      res.end({ msg: "Data  received", jsonString })

    });
    return;
  }
  res.end("server is running");

})
server.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

