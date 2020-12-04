const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sprints: {
    type: [String],
    required: false,
    default: [],
  },
  issues: {
    type: [String],
    required: false,
    default: [],
  },
  tests: {
    type: [String],
    required: false,
    default: [],
  },
  releases: {
    type: [String],
    required: false,
    default: [],
  },
  documentations: {
    type: [String],
    required: false,
    default: [],
  },
  collaborators: {
    type: [String],
    required: false,
    default: [],
  },
});

projectSchema.methods.getIssues = () => {
  return this.issues;
};
projectSchema.methods.getSprints = () => {
  return this.sprints;
};
projectSchema.methods.getDocumentations = () => {
  return this.documentations;
};
projectSchema.methods.getCollaborators = () => {
  return this.collaborators;
};
projectSchema.methods.getTests = () => {
  return this.tests;
};
projectSchema.methods.getReleases = () => {
  return this.releases;
};
module.exports = mongoose.model('Schema', projectSchema);
