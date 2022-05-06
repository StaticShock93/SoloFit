const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');
const Exercise = require('../models/exerciseModel');

// get all exercises for user
router.get('/', exerciseController.getAllExercises, (req, res, next) => {
  res.status(200).json(res.locals);
});

router.get('/:id', exerciseController.findExercise, (req, res, next) => {
  res.status(200).json(res.locals);
});

router.post(
  '/addexercise',
  exerciseController.addExercise,
  (req, res, next) => {
    res.status(200).json(res.locals);
  }
);

router.post(
  '/update/:id',
  exerciseController.updateExercise,
  (req, res, next) => {
    res.status(200).json(res.locals);
  }
);

// router.delete('/addExercise', exerciseController.removeExercise, (req, res, next) => {

// })

module.exports = router;
