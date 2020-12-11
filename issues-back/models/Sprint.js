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

sprintSchema.methods.addIssue = async function addIssue(issueId) {
  this.issues.push(issueId);
  await this.save();
};

sprintSchema.methods.removeIssue = async function removeIssue(issueId) {
  this.issues.splice(this.issues.indexOf(issueId), 1);
  await this.save();
};
module.exports = mongoose.model('Sprint', sprintSchema);
