const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());

const Doctor = require("./models/doctorModel");
const Appointment = require("./models/AppointModel");

const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.URL, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to database successfully");
  })
  .catch((error) => {
    console.log(error);
  });
mongoose.Promise = global.Promise;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/doctors", async (req, res) => {
  const doctor = await Doctor.find();
  if (!doctor) {
    res.status(500).json(`Not found any Doctor`);
  }
  res.status(200).json(doctor);
});

app.get("/api/doctors/:id", async (req, res) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id);
  if (!doctor) {
    return res.status(500).json(`Doctor not found with ID ${id}`);
  }
  res.status(200).json(doctor);
});

app.post("/api/appointments", async (req, res) => {
  try {
    const newAppointment = await Appointment.create(req.body);
    res.status(200).json(newAppointment);
  } catch (error) {
    res.status(500).json();
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is UP...." });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
