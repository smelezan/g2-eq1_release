const axios = require('axios');
const Project = require('../models/Project');
const { issueProxy, testProxy } = require('../config/proxy');

exports.getAllProjects = function getAllProjects(req, res) {
  Project.find()
    .then((projects) => res.status(200).json(projects))
    .catch((error) => res.status(400).json({ error }));
};
exports.createProject = function createProject(req, res) {
  delete req.body._id;
  const project = new Project({
    ...req.body,
  });
  project
    .save()
    .then(() =>
      res.status(201).json({ message: 'Successfully created', project }),
    )
    .catch((error) =>
      res.status(401).json({ error, message: 'Missing property' }),
    );
};

exports.getIssuesByProjectId = function getIssuesByProjectId(req, res) {
  const projectId = req.params.project;
  Project.findById(projectId)
    .then((project) => {
      const { issues } = project;
      const promises = issues.map(
        (issue) =>
          new Promise((resolve, reject) => {
            axios
              .get(`${issueProxy}/issues/${issue}`)
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => reject(error));
          }),
      );
      Promise.all(promises).then((issuesFound) => {
        res.status(200).json({ projectId, issues: issuesFound });
      });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getTestsByProjectId = function getTestsByProjectId(req, res) {
  const projectId = req.params.project;
  Project.findById(projectId)
    .then((project) => {
      const { tests } = project;
      const promises = tests.map(
        (test) =>
          new Promise((resolve, reject) => {
            axios
              .get(`${testProxy}/tests/${test}`)
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => reject(error));
          }),
      );
      Promise.all(promises)
        .then((testsFound) => {
          res.status(200).json({ projectId, tests: testsFound });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getDocumentationsByProjectId = function getDocumentationsByProjectId(
  req,
  res,
) {
  const projectId = req.params.project;
  Project.findById(projectId)
    .then((project) => {
      const documentations = project.getDocumentations();
      res.status(200).json({ projectId, documentations });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getReleasesByProjectId = function getReleasesByProjectId(req, res) {
  const projectId = req.params.project;
  Project.findById(projectId)
    .then((project) => {
      const releases = project.getReleases();
      res.status(200).json({ projectId, releases });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.getSprintsByProjectId = function getSprintsByProjectId(req, res) {
  const projectId = req.params.project;
  Project.findById(projectId)
    .then((project) => {
      const { sprints } = project;
      const promises = sprints.map(
        (sprint) =>
          new Promise((resolve, reject) => {
            axios
              .get(`${issueProxy}/sprints/${sprint}`)
              .then((response) => {
                resolve(response.data);
              })
              .catch((error) => reject(error));
          }),
      );
      Promise.all(promises)
        .then((sprintsFound) => {
          res.status(200).json({ projectId, sprints: sprintsFound });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

exports.updateProject = function updateProject(req, res) {
  Project.findOneAndUpdate(
    { _id: req.params.project },
    { ...req.body, _id: req.params.project },
  )
    .then(() => res.status(200).json({ message: 'Project updated' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneProject = function findOneProject(req, res) {
  Project.findOne({ _id: req.params.project })
    .then((project) => res.status(200).json(project))
    .catch((error) => res.status(400).json({ error }));
};
