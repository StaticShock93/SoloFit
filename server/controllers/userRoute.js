const express = require('express');
const { Router } = require('express');
const router = express.Router();
const User = require ('../models/userModel.js');
const userController = require('./userController.js');

// post route to create user
router.post('/', userController.createUser, (req, res, next) => {
  res.status(200).json(res.body)

  return next();
});

// get route to retrieve user information

// put route to update user information

// delet route to delete user information

module.exports = router;
