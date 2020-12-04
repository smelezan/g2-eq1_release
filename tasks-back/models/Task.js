const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  dod: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: false,
  },
  developer: {
    type: String,
    required: false,
  },
  dependencies: {
    type: [String],
    required: false,
  },
  status: {
    type: String,
    enum: ['TO DO', 'DOING', 'DONE'],
    default: 'TO DO',
  },
});

module.exports = mongoose.model('Task', taskSchema);
