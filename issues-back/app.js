const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sprintRoutes = require('./routes/sprint');
const issueRoutes = require('./routes/issue');

const app = express();
const config = require('./DB');

const issueData = require('./data/issue.json');
const Issue = require('./models/Issue');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie!!!!!! !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});

app.post('/populate', (req, res) => {
  mongoose.connection.db.dropDatabase();
  const promises = issueData.map(
    (issue) =>
      new Promise((resolve, reject) => {
        new Issue(issue)
          .save()
          .then(() => resolve())
          .catch((err) => reject(err));
      })
  );

  Promise.all(promises).then(() => {
    Issue.find()
      .then((issues) => {
        console.log(issues);
        res.status(200).json(issues);
      })
      .catch((error) => res.status(400).json({ error }));
  });
});

app.use('/sprints/', sprintRoutes);
app.use('/issues/', issueRoutes);

module.exports = app;
