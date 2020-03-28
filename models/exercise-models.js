// line 16 of exercise-models.js = what does the capitalization mean?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  typeField: {
      type: String,
      required: true
  },
  name: String,
  duration: Number
});


const Exercise = mongoose.model("exercise-models", ExerciseSchema);

module.exports = Exercise;
