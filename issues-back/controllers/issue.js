
const Issue = require('../models/Issue');

exports.createIssue = function(req, res,next) {
    delete req.body._id;
    const issue = new Issue({
        ...req.body
    });
    issue.save()
        .then(()=> res.status(201).json({message: "Créé avec succès", issue}))
        .catch(error=> res.status(401).json({error}));
};

exports.updateIssue =function(req, res,next) {
    Issue.findOneAndUpdate(
        {_id: req.params.issue},{ ...req.body, _id:req.params.issue})
        .then(() => res.status(200).json({message:'Issue updated'}))
        .catch(error => res.status(400).json({error}));    
};


exports.getAllIssues=function(req, res,next) {
    Issue.find()
        .then(issues => res.status(200).json(issues))
        .catch(error => res.status(400).json({error}));
};

exports.deleteIssue= function(req, res,next) {
    Issue.deleteOne({_id: req.params.issue})
    .then(()=> res.status(200).json({message:'successfully deleted!'}))
    .catch(error =>res.status(400).json({error}));

};

exports.findOneIssue=function(req, res,next) {
    Issue.findOne({_id:req.params.issue})
        .then(issue => res.status(200).json(issue))
        .catch(error => res.status(400).json({error}));
};

exports.managePriority=function(req,res,next){
    const priorityList = req.body.priorityList;
    console.log(priorityList);
    updatePriority= (issuesArray)=>{
        return issuesArray.issues.map(issue=> new Promise((resolve,reject)=>{
            Issue.findOneAndUpdate({_id:issue._id}, {priority:issuesArray.priority}, {upsert:true, useFindAndModify:true, new:true})
                .then(result=>resolve(result))
                .catch(error =>reject(error));
        }));
    }
    let promises = priorityList.map(
        issuesArray=> new Promise((resolve,reject)=>{
            Promise.all(updatePriority(issuesArray))
                .then(result=>resolve(result))
                .catch(error =>reject(error));
        })
    );

    Promise.all(promises)
        .then(result=>res.status(201).json({result, message: "Updated"}))
        .catch(error => res.status(401).json(error));

}

exports.manageDifficulty = function(req,res,next){
    const difficultyList = req.body.difficultyList;
    let globalPromise = [];

    updateDifficulty = (issuesArray)=>{
        let promiseArray=[];
        issuesArray.issues.forEach(issue=> promiseArray.push(new Promise((resolve,reject)=> {
            Issue.findOneAndUpdate({_id:issue._id}, { difficulty: issuesArray.difficulty}, {upsert:true, useFindAndModify:true, new:true})
            .then(result=> resolve())
            .catch(err=> reject(err))
        })));
        return promiseArray;
    }

    difficultyList.forEach( 
        issuesArray => globalPromise.push(new Promise ((resolve, reject)=>{ 
            Promise.all(updateDifficulty(issuesArray))
            .then(result=> resolve())
            .catch(err =>reject(err));
            })
        )
    );

    Promise.all(globalPromise)
    .then(() => res.status(200).json({message:"Updated"}))
    .catch(error =>res.status(400).json({error}));

};
