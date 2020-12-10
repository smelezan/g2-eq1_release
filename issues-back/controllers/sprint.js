const moment = require('moment');
const Sprint = require('../models/Sprint');

exports.getOneSprint = (req, res) => {
  Sprint.findOne({ _id: req.params.sprint })
    .then((sprint) => res.status(200).json(sprint))
    .catch((error) => res.status(400).json(error));
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

/**
 *  Creates a sprint based on a start date, an end date and a name
 *  Can't create a sprint with same start and end dates
 *  Can't create a sprint who overlaying an other
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.createSprint = (req, res) => {
  delete req.body._id;
  const sprint = { ...req.body };
  const startDate = new Date(sprint.startDate);
  const endDate = new Date(sprint.endDate);
  if (sprint.startDate === undefined || sprint.endDate === undefined) {
    res.status(401).json({ error: '', message: 'Missing property' });
  }
  if (moment(sprint.endDate).isSameOrBefore(moment(sprint.startDate))) {
    res
      .status(401)
      .json({ error: '', message: "Can't create a sprint with theses dates" });
  }
  Sprint.find({}).then((sprints) => {
    const allSprintsInDatabase = sprints;
    const isBetweenDates = allSprintsInDatabase.some((sprintInDb) => {
      return (
        moment(startDate).isBetween(sprintInDb.startDate, sprintInDb.endDate) ||
        moment(endDate).isBetween(sprintInDb.startDate, sprintInDb.endDate)
      );
    });
    if (isBetweenDates) {
      res.status(401).json({ error: "Can't overlay sprints" });
    } else {
      new Sprint(sprint)
        .save()
        .then((createdSprint) =>
          res
            .status(201)
            .json({ message: 'successfully created', sprint: createdSprint })
        )
        .catch((error) => res.status(401).json(error));
    }
  });
};

/**
 *  From a list of sprints, reassigns all issues to sprints
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.reassign = (req, res) => {
  const allSprints = req.body.sprints;

  const promises = allSprints.map(
    (sprint) =>
      new Promise((resolve, reject) => {
        Sprint.findByIdAndUpdate(sprint._id, { issues: sprint.issues })
          .then(() => resolve())
          .catch((err) => reject(err));
      })
  );

  Promise.all(promises)
    .then(() => res.status(200).json({ message: 'successfully reatributed' }))
    .catch((error) =>
      res.status(400).json({ error, message: 'failed the reatribution' })
    );
};

exports.addIssue = (req, res) => {
  const { issueId } = req.body;
  const { sprint } = req.params;
  Sprint.findById(sprint).then((sprintFound) => {
    sprintFound
      .addIssue(issueId)
      .then(() => res.status(201).json({ message: 'Sprint updated' }));
  });
};
exports.removeIssue = (req, res) => {
  const issueId = req.body;
  const { sprint } = req.params;
  Sprint.findById(sprint).then((sprintFound) => {
    sprintFound
      .removeIssue(issueId)
      .then(() => res.status(201).json({ message: 'Sprint updated' }));
  });
};
