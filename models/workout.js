const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserWorkout = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type",
      },
      name: {
        type: String,
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", UserWorkout);

module.exports = Workout;
