const mongoose = require('mongoose');
const { Schema } = mongoose;

// SoloFit Database URI
const MONGO_URI =
  'mongodb+srv://chacta1brice:I81u81222$@cluster0.jinir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// connect mongoose to mongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SoloFit',
  })
  .then(() => {
    console.log('Connect to SoloFit MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

// Schema for user information
const userSchema = new Schema({
  name: String,
  age: Number,
  height: String,
  weight: Number,
  weeklyWorkoutGoal: Number,
  totalWorkoutsCompleted: Number,
});
// Model for user information
const User = mongoose.model('User', userSchema);

module.exports = User;
