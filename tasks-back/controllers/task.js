const Task = require('../models/Task');

exports.createTask = function createTask(req, res) {
  console.log(req.body);
  delete req.body._id;
  const task = new Task({
    ...req.body,
  });
  task
    .save()
    .then(() => res.status(201).json({ message: 'Successfully created', task }))
    .catch((error) => res.status(401).json({ error }));
};

exports.updateTask = function updateTask(req, res) {
  Task.findOneAndUpdate(
    { _id: req.params.task },
    { ...req.body, _id: req.params.task },
  )
    .then(() => res.status(200).json({ message: 'Task updated' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllTasks = function getAllTasks(req, res) {
  Task.find()
    .then((tasks) => res.status(200).json(tasks))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteTask = function deleteTask(req, res) {
  Task.deleteOne({ _id: req.params.task })
    .then(() => res.status(200).json({ message: 'successfully deleted!' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneTask = function findOneTask(req, res) {
  Task.findOne({ _id: req.params.task })
    .then((task) => res.status(200).json(task))
    .catch((error) => res.status(400).json({ error }));
};

exports.findByIssues = function findByIssues(req, res) {
  console.log(req.params.issue);
  Task.find({ issues: { $elemMatch: { $eq: req.params.issue } } })
    .then((tasks) => res.status(200).json(tasks))
    .catch((error) => res.status(400).json({ error }));
};
