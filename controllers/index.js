const router = require("express").Router();

const apiRoutes = require("./api");
const fitnessRoutes = require("./fitness");

router.use("/", fitnessRoutes);
router.use("/api", apiRoutes);

module.exports = router;

// // routes for completing CRUD
// app.use(require("./controllers/api.js.js"));
// //responsible for serving the html files
// //exercise.js and stats.js
// app.use(require("./controllers/view.js.js"));
