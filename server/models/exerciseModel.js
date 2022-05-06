const mongoose = require('mongoose');
const { Schema } = mongoose;

// SoloFit Database URI
const MONGO_URI = `mongodb+srv://chacta1brice:${process.env.DB_PA}@cluster0.jinir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const exerciseSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  exerciseType: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
});
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;
