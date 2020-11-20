
const Task = require('../models/Task');

exports.createTask = function(req, res,next) {
    console.log(req.body);
    delete req.body._id;
    const task = new Task({
        ...req.body
    });
    task.save()
        .then(()=> res.status(201).json({message: "Successfully created", task}))
        .catch(error=>res.status(401).json({error}));
};

exports.updateTask =function(req, res,next) {
    Task.findOneAndUpdate(
        {_id: req.params.task},{ ...req.body, _id:req.params.task})
        .then(() => res.status(200).json({message:'Task updated'}))
        .catch(error => res.status(400).json({error}));    
};


exports.getAllTasks=function(req, res,next) {
    Task.find()
        .then(tasks => res.status(200).json(tasks))
        .catch(error => res.status(400).json({error}));
};

exports.deleteTask= function(req, res,next) {
    Task.deleteOne({_id: req.params.task})
    .then(()=> res.status(200).json({message:'successfully deleted!'}))
    .catch(error =>res.status(400).json({error}));

};

exports.findOneTask=function(req, res,next) {
    Task.findOne({_id:req.params.task})
        .then(task => res.status(200).json(task))
        .catch(error => res.status(400).json({error}));
};

exports.findByIssues = function (req, res,next){
    console.log(req.params.issue);
    Task.find({issues: {$elemMatch : {$eq: req.params.issue} }})
        .then(tasks => res.status(200).json(tasks))
        .catch(error => res.status(400).json({error}));
}