const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// mongoose.connect('mongodb://localhost/workouts', {
//   useNewUrlParser: true,
//   useFindAndModify: false
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//if deployed, use the deployed database. otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workouts";

//connect to the Mongo DB
mongoose.connect(MONGODB_URI);


// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });