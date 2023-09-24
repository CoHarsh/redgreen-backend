const mongoose = require('mongoose');
const {Schema} = mongoose;

const contestSchema = new Schema({
    contestname:{
        type:String,
        required:true
    },
    contestwriters:{
        type:String,
        // required:true
    },
    contestduration:{
        type:Number,
        required:true
    },
    conteststarttime:{
        type:Date,
        required:true,
        default:Date.now()
    },
    contesthostcollege:{
        type:String,
        required:true
    },
    constestquestions:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Question'
    },
});


module.exports = mongoose.model('Contest', contestSchema);