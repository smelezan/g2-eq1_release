const Issue = require('../models/Issue');

/**
 * Create an issue from an object.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 *
 */
exports.createIssue = function createIssue(req, res) {
  delete req.body._id;
  const issue = new Issue({
    ...req.body,
  });
  issue
    .save()
    .then((issueSaved) => {
      res.status(201).json({ message: 'Créé avec succès', issue: issueSaved });
    })
    .catch((error) => {
      res.status(401).json({ error, message: 'Missing property' });
    });
};

/**
 *  From a tasks' list , update the Issue's tasks field.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
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
/**
 *  From an Issue object, updates the corresponding issue.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.updateIssue = function updateIssue(req, res) {
  Issue.findOneAndUpdate(
    { _id: req.params.issue },
    { ...req.body, _id: req.params.issue },
    { new: true }
  )
    .then((issue) => res.status(201).json({ message: 'Issue updated', issue }))
    .catch((error) => res.status(401).json({ error }));
};
/**
 *  Get all issues of the database
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.getAllIssues = function getAllIssue(req, res) {
  Issue.find()
    .then((issues) => res.status(200).json(issues))
    .catch((error) => res.status(400).json({ error }));
};
/**
 *  Removes the issue corresponding to the Id passed into parameters.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.deleteIssue = function deleteIssue(req, res) {
  Issue.deleteOne({ _id: req.params.issue })
    .then(() => res.status(200).json({ message: 'successfully deleted!' }))
    .catch((error) => res.status(400).json({ error }));
};

/**
 *  Finds the issue corresponding to the Id passed into parameters.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.findOneIssue = function findOneIssue(req, res) {
  Issue.findOne({ _id: req.params.issue })
    .then((issue) => res.status(200).json(issue))
    .catch((error) => res.status(400).json({ error }));
};

/**
 *  Updates the issue's difficulty field based on difficulty passed in request body.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.updateDifficulty = function updateDifficulty(req, res) {
  const issueId = req.params.issue;
  const update = { difficulty: req.body.difficulty };
  Issue.findByIdAndUpdate(issueId, update, { new: true })
    .then((updatedIssue) => res.status(201).json(updatedIssue))
    .catch((error) =>
      res.status(401).json({ error, message: 'Invalid field' })
    );
};

exports.addTaskToIssue = function addTaskToIssue(req, res) {
  const issueId = req.params.issue;
  const taskId = req.params;
  Issue.findById(issueId).then((issueFound) => {
    issueFound
      .addTask(taskId)
      .then(() => {
        res.status(201).json(issueFound);
      })
      .catch((error) => res.status(401).json({ error }));
  });
};
exports.removeTaskToIssue = function removeTaskToIssue(req, res) {
  const issueId = req.params.issue;
  const taskId = req.params;
  Issue.findById(issueId).then((issueFound) => {
    issueFound
      .removeTask(taskId)
      .then(() => {
        res.status(201).json(issueFound);
      })
      .catch((error) => res.status(401).json({ error }));
  });
};

/**
 *  Updates the issue's priority field based on priority passed in request body.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
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

/**
 *  Updates the issues' priority field based on a list of priority objects containing a list of issues.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
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
/**
 *  Updates the issues' difficulty field based on a list of difficulty objects containing a list of issues.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
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
