const express = require('express');
const User = require('../models/userModel.js');

const userController = {
  // add user to database
  createUser: (req, res, next) => {
    const newUser = new User({
      name: 'test',
      age: 20,
      height: `5' 10"`,
      weight: 198,
      weeklyWorkoutGoal: 3,
      totalWorkoutsCompleted: 10,
    });
    newUser
      .save()
      .then((response) => {
        res.status(200).json(response);
        return next();
      })
      .catch((err) => {
        return next({
          log: 'ERROR, error caught in userController.createUser middleware',
        });
      });
  },
};

// const userSchema = new Schema({
//     name: String,
//     age: Number,
//     height: Number,
//     weight: Number,
//     weeklyWorkoutGoal: Number,
//     totalWorkoutsCompleted: Number,
//   });

module.exports = userController;
