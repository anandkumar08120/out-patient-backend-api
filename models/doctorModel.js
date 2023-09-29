const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  name: String,
  schedule: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
