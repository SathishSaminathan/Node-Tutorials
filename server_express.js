const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

const jsonParser = bodyParser.json();

app.use("/css", express.static(__dirname + "/public/css"));
app.use("/", (req, res, next) => {
  console.log(`Somebody tried for the api.... of url ${req.url}`);
  res.cookie("cookieName", "cookieValue");

  next();
});

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link type="text/css" rel="stylesheet" href="/css/styles.css"/>
      </head>
        <body>
            Hello sachu!!!
        </body>
    </html>`);
});

app.get("/user_data", (req, res) => {
  let HTML = fs.readFileSync(`${__dirname}/postJson.html`);
  res.send(`${HTML}`);
});

app.post("/post_userdata", jsonParser, (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get("/api/user", (req, res) => {
  res.send({
    name: "sathish",
    bikes: ["TVS", "APACHE"]
  });
});

app.get("/api/:user/:id", (req, res) => {
  let id = req.params.id;
  let userName = req.params.user;
  res.send(
    ` hai dude i got the the id!!! ${id} and the user name is ${userName}`
  );
});

app.get("/api/bike", (req, res) => {
  let brand = req.query.brand;
  let year = req.query.year;

  res.send({
    brand,
    year
  });
});

const port = process.env.PORT || 8080;

app.listen(port);
