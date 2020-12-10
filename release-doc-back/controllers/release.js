const Release = require('../models/Release');

exports.createRelease = function createRelease(req, res) {
  delete req.body._id;
  const release = new Release({
    ...req.body,
  });
  release
    .save()
    .then(() => res.status(201).json({ message: 'Créé avec succès', release }))
    .catch((error) => {
      res.status(401).json({ error, message: 'Missing property' });
    });
};

exports.getOneRelease = function getOneRelease(req, res) {
  const releaseId = req.params.release;

  Release.findOne({ _id: releaseId })
    .then((releaseFound) => {
      res.status(200).json(releaseFound);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

exports.getAllReleases = function getAllReleases(req, res) {
  Release.find()
    .then((releases) => res.status(200).json(releases))
    .catch((error) => res.status(400).json(error));
};

/**
 *  Get the infos of the last Release in database
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.getLastReleaseInfos = function getLastReleaseInfos(req, res) {
  Release.find().then((releases) => {
    if (releases.length !== 0) {
      const lastRelease = releases[releases.length - 1];
      res.json({ issues: lastRelease.issues, version: lastRelease.version });
    } else {
      res.json({});
    }
  });
};

exports.deleteRelease = function deleteRelease(req, res) {
  const releaseId = req.params.release;
  Release.deleteOne({ _id: releaseId })
    .then(() => res.status(200).json({ message: 'successfully deleted!' }))
    .catch((error) => res.status(400).json({ error }));
};
