const Issue = require('../models/Issue');

exports.isIssueExists = function isIssueExists(req, res, next) {
  const issueId = req.params.issue;

  Issue.findById(issueId)
    .then((issue) => {
      if (issue) {
        next();
      } else {
        res.status(400).json({ error: '', message: "Issue doesn't exist" });
      }
    })
    .catch((error) =>
      res.status(400).json({ error, message: "Issue doesn't exist" })
    );
};
