const Sprint = require('../models/Sprint');
/**
 *  Check if a sprint based on his id exists.
 *  If not, send an error.
 * @param {*} req the request, object containing informations about http request.
 * @param {*} res the response, object containing informations to send to user.
 */
exports.isSprintExists = function isSprintExists(req, res, next) {
  const sprintId = req.params.sprint;

  Sprint.findById(sprintId)
    .then((sprint) => {
      if (sprint) {
        next();
      } else {
        res.status(400).json({ error: '', message: "Sprint doesn't exist" });
      }
    })
    .catch((error) =>
      res.status(400).json({ error, message: "Sprint doesn't exist" })
    );
};
