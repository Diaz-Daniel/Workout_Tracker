const router = require("express").Router();
const Workout = require("../../models/workout");

router.get("/workouts", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err));
});

router.post("/workouts", (req, res) => {
  Workout.create({})
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err));
});

router.put("/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err));
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
