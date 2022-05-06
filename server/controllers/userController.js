// const express = require('express');
const User = require('../models/userModel.js');

const userController = {
  // add user to database
  createUser: (req, res, next) => {
    const { name } = req.body;
    const { email } = req.body;
    const { age } = req.body;
    const { currentWeight } = req.body;
    const { goalWeight } = req.body;

    const newUser = new User({
      // these fields will be later changed to equal req.params from submitting user input form
      name,
      email,
      age,
      currentWeight,
      goalWeight,
    });
    newUser
      .save()
      .then((newUserData) => {
        // res.status(200).json(newUserData);
        res.locals = newUserData;
        console.log('newUser', res.locals);
        return next();
      })
      .catch((err) => {
        return next({
          log: 'ERROR, error caught in userController.createUser middleware',
        });
      });
  },
  //   getUser data from Database
  getUserData: (req, res, next) => {
    const { username } = req.body;
    User.findOne({
      name: username,
    })
      .then((userData) => {
        console.log('userData', userData);
        res.locals = userData;
        return next();
      })
      .catch((err) => {
        next({
          log: 'ERROR, error caught in userController.getUserData middleware',
        });
      });
  },
  getAllUsers: (req, res, next) => {
    User.find({})
      .then((allUserData) => {
        console.log(allUserData);
        res.locals = allUserData;
        // res.status(200).json(allUserData);
        return next();
      })
      .catch((err) =>
        next({
          log: 'ERROR, error caught in userController.getAllUsers middleware',
        })
      );
  },

  //  delete all user information
  deleteEntireUser: (req, res, next) => {
    console.log('testingRemoveUser',req.params.id)
    // console.log('deleteSection', req.params);
    // delete by email or id on req.params.id
  //  const {id} = req.body;
    // const { email } = req.body;
    User.findByIdAndDelete(req.params.id)
      .then((deletedUser) => {
        res.locals = deletedUser;
        // res.status(200).json(deletedUser);
        return next();
      })
      .catch((err) => {
        next({
          log: 'ERROR, error caught in userController.deleteEntireUser middleware',
        });
      });
  },
  // still need a put controller
};

module.exports = userController;
