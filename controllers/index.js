const router = require("express").Router();

const apiRoutes = require("./api");
const fitnessRoutes = require("./fitness");

router.use("/", fitnessRoutes);
router.use("/api", apiRoutes);

module.exports = router;
