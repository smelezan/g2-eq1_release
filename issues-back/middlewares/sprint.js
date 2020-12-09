const Sprint = require('../models/Sprint');

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
