var db = require("models");

module.exports = function(app) {
  // api get last workout
  app.get("/api/workouts", (req, res) => {
      db.Workout.find({})
      .then(workout => {
          res.json(workout);
      })
      .catch(err => {
          res.json(err);
      });
  });