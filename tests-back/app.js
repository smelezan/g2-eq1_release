const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./DB");
const testRoutes = require("./routes/test");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

let mongoose = require("mongoose");

mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected"))
  .catch(() => console.log("Connection to Mongodb failed"));

app.listen(5001, function () {
  console.log("Test app listening on port 5001!");
});

app.use("/tests/", testRoutes);

module.exports = app;
