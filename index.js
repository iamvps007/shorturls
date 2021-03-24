const express = require("express");
const bodyParser = require("body-parser");
const shortUrls = require("./controllers/constroller");
const { request, response } = require("express");
const pool = require("./db/db");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/go/:id", (request, response) => {
  const shortLink = request.params.id;
  console.log(shortLink);

  pool.query("SELECT *FROM shorturls.links WHERE shortlink LIKE $1", [
    shortLink,
  ]),
    (error, results) => {
      console.log("working");
      if (error) {
        throw error;
      }
      console.log(results.rows);
      response.redirect(results.rows[0].original);
    };
});

require("./routers/routers")(app);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
