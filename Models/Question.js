const mongoose = require('mongoose');

const {Schema} = mongoose;

const testcases = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    input:{
        type:String,
    },
    output:{
        type:String,
    }
});


const questionSchema = new Schema({
    questionname:{
        type:String,
        required:true
    },
    questiontext:{
        type:String,
        required:true
    },
    questioninputdetails:{
        type:String,
        // required:true
    },
    questionoutputdetails:{
        type:String,
        // required:true
    },
    questionconstrains:{
        type:String,
        // required:true
    },
    questionexamples:[testcases],
    questiontestcases:[testcases],
});

module.exports = mongoose.model('Question',questionSchema);