const mongoose = require('mongoose');



const issueSchema =  mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type:{
        type: String, 
        enum: ['feature','documentation'],
        required: true
    },
    difficulty: {
        type: Number,
        required: false
    },
    
    priority: {
        type: String ,
        enum : ['HIGH','MEDIUM','LOW'],
        required: false
    },
    state:{
        type:String,
        enum:['TO DO', 'DOING', 'DONE'],
        default: 'TO DO'
    },
    tasks:{
        type: [Number],
        default: []
    }
});

module.exports = mongoose.model('Issue',issueSchema);