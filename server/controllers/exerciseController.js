const Exercise = require('../models/exerciseModel.js');

const exerciseController = {
  // create new exercise
  addExercise: (req, res, next) => {
    const { username } = req.body;
    const { exerciseType } = req.body;
    const { duration } = req.body;
    // const { completedAt } = req.body;

    const newExercise = new Exercise({
      username,
      exerciseType,
      duration,
      //   completedAt: Date.parse(completedAt),
      //   completedAt: new Date().toLocaleDateString(),
    });

    newExercise
      .save()
      .then((newExerciseData) => {
        // res.status(200).json(newUserData);
        res.locals = newExerciseData;
        console.log('newExercise', res.locals);
        return next();
      })
      .catch((err) => {
        return next({
          log: 'ERROR, error caught in exerciseController.addExercies middleware',
        });
      });
  },

  // delete exercise
  //   removeExercise: (req, res, next) => {},

  // retrieve all information from all exercises in log
  getAllExercises: (req, res, next) => {
    Exercise.find({})
      .then((exercises) => {
        res.locals = exercises;
        return next();
      })
      .catch((err) => {
        next({
          log: 'ERROR, error caught in exerciseController.getAllExercises middleware',
        });
      });
  },
};

module.exports = exerciseController;
