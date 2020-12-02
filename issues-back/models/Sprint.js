const mongoose = require('mongoose');

const sprintSchema = mongoose.Schema({
  name: {
    type: String,
    default: 'Sprint',
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  issues: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model('Sprint', sprintSchema);
