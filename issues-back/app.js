

const express =  require('express');
const sprintRoutes = require('./routes/sprint');
const issueRoutes = require('./routes/issue');
const app = express();
const cors = require('cors');
var bodyParser = require("body-parser");
const config =require('./DB');

const issueData = require('./data/issue.json');
const Issue = require('./models/Issue');
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

app.listen(4000, function() {
  console.log('Example app listening on port 4000!');
});

app.get('/populate', function(req,res){
  Issue.find().remove();
  for( var i = 0; i < issueData.length; i++ ) {
		new Issue( issueData[ i ] ).save();
  }
  res.redirect('/issues');
})

app.use('/sprints/', sprintRoutes);
app.use('/issues/', issueRoutes);


module.exports  = app;