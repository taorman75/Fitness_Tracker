const router = require("express").Router();
const Workout = require("../models/workout.js");

//post
router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(newWorkout => {
        res.json(newWorkout);
    })
    .catch(err => res.json(err));
})

//put

//couple of get routes
router.get("/api/workouts", (req, res) => {
    Workout.find().then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => res.json(err))
})

//delete

module.exports = router;
