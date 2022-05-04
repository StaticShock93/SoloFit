const express = require('express');
const { Router } = require('express');
const router = express.Router();
const User = require ('../models/userModel.js')

router.get('/', (req, res, next) => {
  res.status(200).json({
    username: 'chac',
    age: 1000,
  });
  return next();
});

module.exports = router;
