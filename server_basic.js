const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let HTML = fs.readFileSync("./index.html");
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(HTML);
  } else if (req.url === "/api/user") {
    res.writeHead(200, { "Content-type": "application/json" });
    const json = JSON.stringify({
      name: "sathish",
      bikes: ["TVS", "APACHE"],
      age:23
    });
    res.end(json);
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8080, "127.0.0.1");
// console.log("server");
