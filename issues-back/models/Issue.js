const mongoose = require('mongoose');

const issueSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['feature', 'documentation'],
    required: true,
  },
  difficulty: {
    type: Number,
    required: false,
  },

  priority: {
    type: String,
    enum: ['HIGH', 'MEDIUM', 'LOW'],
    required: false,
  },
  status: {
    type: String,
    enum: ['TO DO', 'DOING', 'DONE'],
    default: 'TO DO',
  },
  tasks: {
    type: [String],
    default: [],
  },
  progression: {
    type: Number,
    default: 0,
  },
});

issueSchema.methods.addTask = async function addTask(taskId) {
  this.tasks.push(taskId);
  await this.save();
};
issueSchema.methods.removeTask = async function removeTask(taskId) {
  this.tasks.splice(this.tasks.indexOf(taskId), 1);
  await this.save();
};

module.exports = mongoose.model('Issue', issueSchema);
