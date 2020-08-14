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
router.put("api/workouts/:id", (req, res) => {
    Workout.update({
        _id: mongojs.ObjectId(req.params.id)
    }).then(updatedWorkout => {
        res.json(updatedWorkout);
    })
    .catch(err => res.json(err));
})

//couple of get routes
router.get("/api/workouts", (req, res) => {
    Workout.find().then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => res.json(err))
})

//get specific workout
router.get("/api/workouts/:id", (req, res) => {
    Workout.find({ _id: mongojs.ObjectId(req.params.id)
    }).then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => res.json(err))
})

//delete
router.delete("/api/workouts/:id", (req, res) => {
    Workout.remove({ _id: mongojs.ObjectId(req.params.id)
    }).then(console.log("workout removed"))
    .catch(err => res.json(err));
})

module.exports = router;
