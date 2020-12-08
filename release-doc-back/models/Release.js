const mongoose = require('mongoose');

const releaseSchema = mongoose.Schema({
  issues: {
    type: [String],
    default: [],
  },
  version: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Release', releaseSchema);
