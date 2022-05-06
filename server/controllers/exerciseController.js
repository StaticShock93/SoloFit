const Exercise = require('../models/exerciseModel.js');

const exerciseController = {
  // create new exercise
  addExercise: (req, res, next) => {
    const { username } = req.body;
    const { exerciseType } = req.body;
    const { duration } = req.body;

    const newExercise = new Exercise({
      username,
      exerciseType,
      duration,
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
//  read/get one exercise 
  findExercise: (req, res, next) => {
    console.log('testing', req.params.id);
    Exercise.findById(req.params.id)
      .then((response) => {
        res.locals = response;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'ERROR, error caught in exerciseController.findExercise middleware',
        });
      });
  },

  // delete exercise
  removeExercise: (req, res, next) => {
    console.log('testingRemoveExercise', req.params.id);
    Exercise.findByIdAndDelete(req.params.id)
      .then((response) => {
        res.locals = response;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'ERROR, error caught in exerciseController.removeExercise middleware',
        });
      });
  },

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

  //   updates exercise field
  updateExercise: (req, res, next) => {
    Exercise.findById(req.params.id).then((exerciseData) => {
      console.log('testing postBodyName', req.body);
      console.log('responseData', exerciseData);
      exerciseData.username = req.body.username;
      exerciseData.exerciseType = req.body.exerciseType;
      exerciseData.duration = req.body.duration;

      exerciseData.save()
      .then((exerciseData) => {
          res.locals = exerciseData;
          return next();
      })
      .catch(err => {
          next({
          log: 'ERROR, error caught in exerciseController.updateExercise middleware',

          })
      })
    });
  },
};

module.exports = exerciseController;
