const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/task');
const Task = require('./models/Task');
const taskData = require('./data/task.json');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  );
  next();
});

const config = require('./DB');

mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie!!!!!! !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen(5000, () => {
  console.log('Task app listening on port 5000!');
});

app.post('/populate', (req, res) => {
  mongoose.connection.db.dropDatabase();
  const { issues } = req.body;
  const promises = taskData.map(
    (result) =>
      new Promise((resolve, reject) => {
        const taskD = result;
        const issuesList = taskD.issues || [];

        delete taskD.issues;
        const newIssuesList = issuesList.map(
          (title) => issues.find((issue) => issue.title === title)._id,
        );
        const task = new Task({
          ...taskD,
        });
        const newTask = {
          taskId: task._id,
          issues: newIssuesList,
        };
        task
          .save()
          .then(() => resolve(newTask))
          .catch((err) => reject(err));
      }),
  );

  Promise.all(promises)
    .then((tasks) => {
      console.log(tasks);
      res.status(200).json(tasks);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use('/tasks', taskRoutes);

module.exports = app;
