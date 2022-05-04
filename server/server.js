const express = require('express');
const app = express();
const PORT = 5000;
const userRouter = require('./controllers/userRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes for user request
app.use('/user', userRouter);

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
