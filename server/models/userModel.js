const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URI =
  'mongodb+srv://chacta1brice:I81u81222$@cluster0.jinir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

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

const userSchema = new Schema({
  name: String,
  age: Number,
  height: Number,
  weight: Number,
  weeklyWorkoutGoal: Number,
  totalWorkoutsCompleted: Number,
});
const User = mongoose.model('User', userSchema);

module.exports = User;
