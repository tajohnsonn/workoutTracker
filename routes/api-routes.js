var db = require("../models");

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

  //creates new workout in the db

  app.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({ type: "workout" });
      res.json(response);
    } catch (err) {
      console.log("An error occured while creating a workout: ", err);
    }
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    const workoutID = params.id;
    let savedExercises = [];

    //finds saved workouts

    db.Workout.find({ _id: workoutID })
      .then(dbWorkout => {
        savedExercises = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...savedExercises, body];
        console.log(allExercises);
        updateWorkout(allExercises);
      })
      .catch(err => {
        res.json(err);
      });

    function updateWorkout(exercises) {
      db.Workout.findByIdAndUpdate(
        workoutID,
        { exercises: exercises },
        function(err, doc) {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });
};
