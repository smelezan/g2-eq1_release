
const Test = require('../models/Test');

exports.createTest = function(req, res,next) {
    console.log(req.body);
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

