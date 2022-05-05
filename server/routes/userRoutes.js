const express = require('express');
// const { Router } = require('express');
const router = express.Router();
// const User = require('../models/userModel.js');
const userController = require('../controllers/userController.js');

// post route to create user
router.post('/', userController.createUser, (req, res, next) => {
  res.status(200).json(res.locals);
});

router.get('/', userController.getAllUsers, (req, res, next) => {
  res.status(200).json(res.locals);
});

// get route to retrieve user information
router.get('/:username', userController.getUserData, (req, res, next) => {
  res.status(200).json(res.locals);
});

router.delete('/:username/:id', userController.deleteEntireUser, (req, res, next) => {
  res.sendStatus(200)
})

// router.put()


// router.put('/:username', )
module.exports = router;
