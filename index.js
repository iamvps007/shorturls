const express = require("express");
const bodyParser = require("body-parser");
const shortUrls = require("./controllers/constroller");
 const pool = require("./db/db");
 const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors())


app.get("/", (request, response) => {
  response.json({ api: "running...." });
});



require("./routers/routers")(app);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
