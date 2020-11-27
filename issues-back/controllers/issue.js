const Issue = require('../models/Issue');

exports.createIssue = function createIssue(req, res) {
  delete req.body._id;
  const issue = new Issue({
    ...req.body,
  });
  issue
    .save()
    .then(() => res.status(201).json({ message: 'Créé avec succès', issue }))
    .catch((error) => res.status(401).json({ error }));
};

exports.updateIssue = function updateIssue(req, res) {
  Issue.findOneAndUpdate(
    { _id: req.params.issue },
    { ...req.body, _id: req.params.issue }
  )
    .then(() => res.status(200).json({ message: 'Issue updated' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllIssues = function getAllIssue(req, res) {
  Issue.find()
    .then((issues) => res.status(200).json(issues))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteIssue = function deleteIssue(req, res) {
  Issue.deleteOne({ _id: req.params.issue })
    .then(() => res.status(200).json({ message: 'successfully deleted!' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneIssue = function findOneIssue(req, res) {
  Issue.findOne({ _id: req.params.issue })
    .then((issue) => res.status(200).json(issue))
    .catch((error) => res.status(400).json({ error }));
};

exports.managePriority = function managePriority(req, res) {
  const { priorityList } = req.body;
  console.log(priorityList);
  const updatePriority = (issuesArray) =>
    issuesArray.issues.map(
      (issue) =>
        new Promise((resolve, reject) => {
          Issue.findOneAndUpdate(
            { _id: issue._id },
            { priority: issuesArray.priority },
            { upsert: true, useFindAndModify: true, new: true }
          )
            .then((result) => resolve(result))
            .catch((error) => reject(error));
        })
    );
  const promises = priorityList.map(
    (issuesArray) =>
      new Promise((resolve, reject) => {
        Promise.all(updatePriority(issuesArray))
          .then((result) => resolve(result))
          .catch((error) => reject(error));
      })
  );

  Promise.all(promises)
    .then((result) => res.status(201).json({ result, message: 'Updated' }))
    .catch((error) => res.status(401).json(error));
};

exports.manageDifficulty = function manageDifficulty(req, res) {
  const { difficultyList } = req.body;

  const updateDifficulty = (issuesArray) =>
    issuesArray.issues.map(
      (issue) =>
        new Promise((resolve, reject) => {
          Issue.findOneAndUpdate(
            { _id: issue._id },
            { priority: issuesArray.difficulty },
            { upsert: true, useFindAndModify: true, new: true }
          )
            .then((result) => resolve(result))
            .catch((error) => reject(error));
        })
    );

  const promises = difficultyList.map(
    (issuesArray) =>
      new Promise((resolve, reject) => {
        Promise.all(updateDifficulty(issuesArray))
          .then((result) => resolve(result))
          .catch((error) => reject(error));
      })
  );

  Promise.all(promises)
    .then(() => res.status(200).json({ message: 'Updated' }))
    .catch((error) => res.status(400).json({ error }));
};
