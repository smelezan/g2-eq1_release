const Test = require("../models/Test");

exports.createTest = function (req, res, next) {
  delete req.body._id;
  const test = new Test({
    ...req.body,
  });
  test
    .save()
    .then(() => res.status(201).json({ message: "Successfully created", test }))
    .catch((error) => res.status(401).json({ error }));
};

exports.updateTest = function (req, res, next) {
  console.log(req.body);
  console.log(req.params);
  Test.findOneAndUpdate(
    { _id: req.params.test },
    { ...req.body, _id: req.params.test }
  )
    .then(() => res.status(200).json({ message: "Test updated" }))
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

exports.getAllTests = function (req, res, next) {
  Test.find()
    .then((tests) => res.status(200).json(tests))
    .catch((error) => {
      console.log(error);
      res.status(400).json({ error });
    });
};

exports.deleteTest = function (req, res, next) {
  Test.deleteOne({ _id: req.params.test })
    .then(() => res.status(200).json({ message: "successfully deleted!" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneTest = function (req, res, next) {
  Test.findOne({ _id: req.params.test })
    .then((test) => res.status(200).json(test))
    .catch((error) => res.status(400).json({ error }));
};

exports.verifyTest = function (req, res, next) {
  const tests = req.body.tests;
  const issues = req.body.issues;
  const tasks = req.body.tasks;

  let result = {
    correct: [],
    wrong: [],
  };

  let promises = tests.map(
    (test) =>
      new Promise((resolve, reject) => {
        getTestDependances(test, issues, tasks).then((result) => {
          resolve(result);
        });
      })
  );

  Promise.all(promises)
    .then((results) => {
      for (let i = 0; i < results.length; i++) {
        if (results[i].type == undefined) {
          result.wrong.push(tests[i]);
        } else {
          result.correct.push({
            testGroup: "",
            description: tests[i].description,
            dependance: results[i].id,
            type: results[i].type === "Task" ? "Unitaire" : "E2E",
            testedDates: [{ date: new Date(), result: tests[i].result }],
          });
        }
      }

      res.status(200).json(result);
    })
    .catch((err) =>
      res.status(400).json({ err, message: "Error in verification" })
    );
};

/**
 * A réécrire
 * @param {} req
 * @param {*} res
 * @param {*} next
 */
exports.saveTest = function (req, res, next) {
  const tests = req.body.tests;
  console.log(tests);
  let promises = tests.map((test) => {
    new Promise((resolve, reject) => {
      Test.findOne({ description: test.description })
        .then((result) => {
          let testedDates = result.testedDates;

          testedDates.push({
            date: test.testedDates[0].date,
            result: test.testedDates[0].result,
          });
          Test.findOneAndUpdate(
            { description: test.description },
            { testedDates }
          ).then((res) => resolve(res));
        })
        .catch(() => {
          new Test(test)
            .save()
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        });
    });
  });
  Promise.all(promises)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => res.status(400).json({ err, message: "Error in save" }));
};

/**
 *
 * @param {list} test
 * @param {list} issues
 * @param {list} tasks
 *
 * @returns {type, id} si il y a une dépendance et {} sinon.
 */
async function getTestDependances(test, issues, tasks) {
  let dependance = test.title;

  const result = await findDependance(dependance, issues, tasks);

  return result;
}

/**
 *
 * @param {String} dependance
 * @param {List} issues
 * @param {List} tasks
 *
 * @returns {[{type, id }]} returns a list of object as a promise containing the type ( Issue or Task), and his id.
 */
const findDependance = (dependance, issues, tasks) => {
  const issueMatch = new RegExp("^\\s*#\\s.*");
  const taskMatch = new RegExp("^\\s*~\\s");
  return new Promise((resolve, reject) => {
    if (issueMatch.test(dependance)) {
      let newDependance = dependance.replace(
        new RegExp("(^\\s*)+(#\\s)+(.+)"),
        "$3"
      );

      let currentIssue = issues.find((issue) => issue.title === newDependance);
      if (currentIssue != undefined) {
        resolve({ type: "Issue", id: currentIssue._id });
      } else {
        resolve({});
      }
    } else if (taskMatch.test(dependance)) {
      let newDependance = dependance.replace(
        new RegExp("(^\\s*)+(~\\s)+(.+)"),
        "$3"
      );
      let currentTask = tasks.find((task) => task.title === newDependance);
      if (currentTask != undefined) {
        resolve({ type: "Task", id: currentTask._id });
      } else {
        resolve({});
      }
    } else {
      resolve({});
    }
  });
};
