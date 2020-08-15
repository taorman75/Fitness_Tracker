const router = require("express").Router();
const Workout = require("../models/workout.js");

//post
router.post("/api/workouts", (req, res) => {
    Workout.create({}).then(newWorkout => {
        res.json(newWorkout);
        console.log(newWorkout);
    })
    .catch(err => res.json(err));
})

//put
/*router.put("api/workouts/:id", (req, res) => {
    Workout.update({
        _id: mongojs.ObjectId(req.params.id)
    }).then(updatedWorkout => {
        res.json(updatedWorkout);
    })
    .catch(err => res.json(err));
})*/

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      // "runValidators" will ensure new exercises meet our schema requirements
      //{ new: true, runValidators: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  router.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

//couple of get routes

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
      .then(dbWorkouts => {
        console.log(dbWorkouts)
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });

/*router.get("/api/workouts", (req, res) => {
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
})*/

//delete

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });

/*router.delete("/api/workouts/:id", (req, res) => {
    Workout.remove({ _id: mongojs.ObjectId(req.params.id)
    }).then(console.log("workout removed"))
    .catch(err => res.json(err));
})*/

module.exports = router;
