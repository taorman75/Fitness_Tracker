const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

mongoose.connect('mongodb://localhost/workouts', {
  useNewUrlParser: true,
  useFindAndModify: false
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "workout"; // name the db
// const collections = ["collection"]; // name the collections

//const db = mongojs(databaseUrl, collections);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });