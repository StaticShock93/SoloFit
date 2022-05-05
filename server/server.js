require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const userRouter = require('./routes/userRoutes');
const exerciseRouter = require('./routes/exerciseRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes for user based request
// single user
app.use('/user', userRouter);
// all users
app.use('/users', userRouter);
// app.use('/user', userRouter)

// routes for exercise based request
app.use('/exercises', exerciseRouter)

// catch-all-error-handler
app.use((req, res) => res.sendStatus(404));
// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unkown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on localhost: ${PORT}`);
});
