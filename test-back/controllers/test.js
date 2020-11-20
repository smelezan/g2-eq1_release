
const Test = require('../models/Test');

exports.createTest = function(req, res,next) {
    delete req.body._id;
    const test = new Test({
        ...req.body
    });
    test.save()
        .then(()=> res.status(201).json({message: "Successfully created", test}))
        .catch(error=>res.status(401).json({error}));
};

exports.updateTest =function(req, res,next) {
    Test.findOneAndUpdate(
        {_id: req.params.test},{ ...req.body, _id:req.params.test})
        .then(() => res.status(200).json({message:'Test updated'}))
        .catch(error => res.status(400).json({error}));    
};


exports.getAllTests=function(req, res,next) {
    Test.find()
        .then(tests => res.status(200).json(tests))
        .catch(error => res.status(400).json({error}));
};

exports.deleteTest= function(req, res,next) {
    Test.deleteOne({_id: req.params.test})
    .then(()=> res.status(200).json({message:'successfully deleted!'}))
    .catch(error =>res.status(400).json({error}));

};

exports.findOneTest=function(req, res,next) {
    Test.findOne({_id:req.params.test})
        .then(test => res.status(200).json(test))
        .catch(error => res.status(400).json({error}));
};

exports.verifyTest= function(req,res,next){
    const tests = req.body.tests;
    const issues = req.body.issues;
    const tasks = req.body.tasks;
    let promises = tests.map(test=>new Promise((resolve,reject)=>{ 
        Test.findOne({description: test.description})
            .then(response=>{
                let testedDates = response.testedDates;
                testedDates.push({date: new Date(), result:test.result});
                response.update({testedDates:testedDates});
                resolve(response);
            })
            .catch(() =>{
                let currentDepend= [];
                getTestDependances(test,issues,tasks)
                .then(result => {
                    currentDepend = result
                    const currentTest = new Test({
                        testGroup: test.testGroup,
                        type: (currentDepend[0].type=="Task") ? "Unitaire":"E2E",
                        testedDates: [{date:new Date(), result:test.result}],
                        dependance: currentDepend[0].id,
                        description: test.description,
                    });
                    currentTest.save()
                        .then(()=> {
                            resolve(currentTest)
                        })
                        .catch(err => reject(err));
                    //console.log(currentTest);
                });
            });
    }));
    Promise.all(promises)
    .then(response => {
        //console.log(response);
        res.status(200).json(response)
    })
    .catch(err=>console.log(err));
    
}


/**
 * A partir d'une liste d'issue et de taches, renvoie une liste des dépendances
 */
async function getTestDependances(test,issues,tasks){
    
    let dependances=test.title.split(",");

    const result = await Promise.all(dependances.map(dependance=>findDependance(dependance,issues,tasks)));
    return result;
}

const findDependance =(dependance,issues,tasks)=>{
    const issueMatch = new RegExp('^\\s*#\\s.*');
    const taskMatch = new RegExp('^\\s*~\\s');
    return new Promise((resolve,reject)=>{
        if(issueMatch.test(dependance)){
            let newDependance = dependance.replace(new RegExp('(^\\s*)+(#\\s)+(.+)'), '$3');
            
            let currentIssue = issues.find(issue => issue.title === newDependance);
            if (currentIssue!= undefined){
                resolve({type:"Issue", id:currentIssue._id});
            }
            else{
                console.log("Undefined Issue");
            }
        }
        else if(taskMatch.test(dependance)){
            let newDependance = dependance.replace(new RegExp('(^\\s*)+(~\\s)+(.+)'), '$3');
            let currentTask = tasks.find(task => task.title === newDependance);
            if(currentTask!= undefined){
                resolve({type:"Task",id:currentTask._id});
            }
            else{
                console.log("Undefined Task");
            }
                
        }
    });
}