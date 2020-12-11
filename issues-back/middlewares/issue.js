const Issue = require('../models/Issue');

/**
 *  Check if an issue based on his id exists.
 *  If not, send an error.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
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
