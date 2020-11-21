

const express =  require('express');
const taskRoutes = require('./routes/task');
const app = express();
const cors = require('cors');
var bodyParser = require("body-parser");
const config =require('./DB');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

let mongoose = require('mongoose');

  mongoose.connect(
    config.DB,
    { useNewUrlParser: true,
      useUnifiedTopology: true 
    }
  )
  .then(() => console.log('Connexion à MongoDB réussie!!!!!! !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen(5000, function() {
  console.log('Task app listening on port 5000!');
});



app.post('/populate',function(req,res){
  mongoose.connection.db.dropDatabase();
  const issues = req.body.issues;
  
  const Task = require('./models/Task');
  const taskData= require('./data/task.json');

  Task.find().remove();

  let promises = taskData.map(taskD=> new Promise((resolve,reject) => {
    let issuesList = taskD.issues || [];
    delete taskD.issues;
    let newIssuesList = issuesList.map(title=> issues.find(issue=> issue.title === title)._id);
    let task = new Task({
      ...taskD,
      issues: newIssuesList
    });
    task.save()
      .then(()=>resolve())
      .catch((err)=>reject(err));
  }));
  
  Promise.all(promises)
    .then(()=>{
      Task.find()
        .then(tasks => res.status(200).json(tasks))
        .catch(error => res.status(400).json({error}));
  });
    
});

app.use('/tasks', taskRoutes);


module.exports  = app;