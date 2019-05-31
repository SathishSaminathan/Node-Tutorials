const express = require("express");
const app = express();
// const querystring = require("querystring");

app.get("/", (req, res) => {
  res.send(`
    <html>
        <body style="background:red">
            Hello sachu!!!
        </body>
    </html>`);
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
