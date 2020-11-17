const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    type:{
        type:String,
        required: true,
        enum:['E2E','Regression','Unitaire']
    },
    testedDates:{
        type: [
            {
                date:{
                    type: Date,
                    required: true
                },
                result:{
                    type: String,
                    required: true,
                    enum:['Success','Fail']
                }
            }],
        required: true
    },
    dependance:{
        type: [String],
        default:[]
    },
    description:{
        type: String
    }
});

module.exports = mongoose.model('Test',testSchema);