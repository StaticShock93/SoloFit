const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');


router.post('/addexercise', exerciseController.addExercise, (req, res, next) => {
    res.status(200).json(res.locals);
})
// get all exercises for user
router.get('/', exerciseController.getAllExercises, (req, res, next) => {
    res.status(200).json(res.locals)
})


// router.delete('/addExercise', exerciseController.removeExercise, (req, res, next) => {
    
// })


module.exports = router;
