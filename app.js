const express = require("express");
const colors = require("colors");
const bodyParser = require("body-parser");
const path = require("path");
const takeRoutes = require("./routes/takeRoutes");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(takeRoutes);
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at ${port}`.cyan);
});
