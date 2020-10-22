var express = require("express");
var path = require("path");
var Workout = require("../models/workout.js");

const router = express.Router();
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.post("/api/workouts", (req, res) => {
  Workout.create({}).then(() => {
    res.status(201).send();
  });
});

module.exports = router;
