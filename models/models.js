const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// TODO #6 Add an additional attribute representing the user age.
// TODO #7 Set the appropriate  data type for age. (ie. Number)

// trim is whitespace at end - if include whitespace it gets trimmed off
const clubSchema = new Schema({
  clubName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  imgURL: String,
  website: String,
  description: String,
  university: Number,
  email: String,
});

const tutorSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  name: String,
  description: String,
  website: String,
  rate: String,
  photoURL: String,
});

const Club = mongoose.model("Club", clubSchema);
const Tutor = mongoose.model("Tutor", tutorSchema);

module.exports = { Club, Tutor };
