const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema({
//   dayField: Date,
//   exercises: [
//       {
//           type: Schema.Types.ObjectId,
//           ref: "Exercise"
//       }
//   ]
// });

const WorkoutSchema = new Schema({
  datesField: Date,
  exercisesField: [
      {
          type:
            {
              type: String,
              default: "cardio",
              allowNull: false
            },
          name:
            {
              type: String
            },
          duration:
            {
              type: Number,
              required: true
            },
          distance:
            {
              type: Number
            },
          weight:
            {
              type: Number
            },
          reps:
            {
              type: Number
            },
          sets:
          {
            type: Number
          }
      }
  ]
});

const Workout = mongoose.model("workout-models", WorkoutSchema);

module.exports = Workout;
