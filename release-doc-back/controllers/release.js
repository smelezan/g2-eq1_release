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
