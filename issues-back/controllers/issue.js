const Issue = require('../models/Issue');

exports.createIssue = function createIssue(req, res) {
  delete req.body._id;
  const issue = new Issue({
    ...req.body,
  });
  issue
    .save()
    .then(() => res.status(201).json({ message: 'Créé avec succès', issue }))
    .catch((error) => {
      res.status(401).json({ error, message: 'Missing property' });
    });
};
exports.assignedTasks = function assignedTasks(req, res) {
  const tasks = req.body;

  const updateIssues = (issues, task) =>
    issues.map(
      (issue) =>
        new Promise((resolve, reject) => {
          Issue.findById(issue).then((issueFound) => {
            issueFound
              .addTask(task)
              .then(resolve(issueFound))
              .catch((error) => reject(error));
          });
        })
    );
  const promises = tasks.map(
    (task) =>
      new Promise((resolve, reject) => {
        Promise.all(updateIssues(task.issues, task.taskId))
          .then((issue) => resolve(issue))
          .catch((error) => reject(error));
      })
  );
  Promise.all(promises)
    .then((issues) => res.status(201).json(issues))
    .catch((error) => {
      res.status(401).json(error);
    });
};
exports.updateIssue = function updateIssue(req, res) {
  Issue.findOneAndUpdate(
    { _id: req.params.issue },
    { ...req.body, _id: req.params.issue },
    { new: true }
  )
    .then((issue) => res.status(201).json({ message: 'Issue updated', issue }))
    .catch((error) => res.status(401).json({ error }));
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

exports.updateDifficulty = function updateDifficulty(req, res) {
  const issueId = req.params.issue;
  const update = { difficulty: req.body.difficulty };
  Issue.findByIdAndUpdate(issueId, update, { new: true })
    .then((updatedIssue) => res.status(201).json(updatedIssue))
    .catch((error) =>
      res.status(401).json({ error, message: 'Invalid field' })
    );
};

exports.updatePriority = function updatePriority(req, res) {
  const issueId = req.params.issue;
  const update = { priority: req.body.priority };
  if (
    update.priority !== 'HIGH' &&
    update.priority !== 'MEDIUM' &&
    update.priority !== 'LOW'
  ) {
    res.status(401).json({ error: '', message: 'Invalid field' });
  }
  Issue.findByIdAndUpdate(issueId, update, { new: true })
    .then((updatedIssue) => res.status(201).json(updatedIssue))
    .catch((error) =>
      res.status(401).json({ error, message: 'Invalid field' })
    );
};

exports.managePriority = function managePriority(req, res) {
  const { priorityList } = req.body;
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
            { difficulty: issuesArray.difficulty },
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
