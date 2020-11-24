const Sprint = require('../models/Sprint');

exports.getOneSprint = (req, res) => {
  Sprint.find({ _id: req.params.sprint })
    .then((sprint) => res.status(200).json(sprint))
    .catch((err) => res.status(400).json(err));
};

exports.getAllSprints = (req, res) => {
  Sprint.find()
    .then((sprint) => res.status(200).json(sprint))
    .catch((err) => res.status(400).json(err));
};

exports.deleteOneSprint = (req, res) => {
  Sprint.deleteOne({ _id: req.params.sprint })
    .then(() => res.status(200).json({ message: 'successfully deleted!' }))
    .catch((err) => res.status(400).json({ err }));
};

exports.createSprint = (req, res) => {
  delete req.body.id;
  const sprint = new Sprint({
    ...req.body,
  });
  sprint
    .save()
    .then(() =>
      res.status(201).json({ message: 'Successfully created', sprint })
    )
    .catch((error) => res.status(401).json({ error }));
};
