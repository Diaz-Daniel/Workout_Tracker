const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// routes for completing CRUD
app.use(require("./routes/api.js"));
//responsible for serving the html files
//exercise.js and stats.js
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
