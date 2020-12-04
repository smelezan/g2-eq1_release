const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/project');
// const Project = require('./models/Project');
// const projectData = require('./data/project.json');

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

const config = require('./config/DB');

mongoose
  .connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie!!!!!! !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen(5002, () => {
  console.log('Project app listening on port 5002!');
});

app.post('/populate', () => {});

app.use('/projects', projectRoutes);

module.exports = app;
