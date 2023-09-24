const mongoose = require('mongoose');

const {Schema} = mongoose;


const collegeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contests:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'Contest'
    },
    collegeacryn:{
        type:String,
        unique:true,
        required:true
    }
});

module.exports = mongoose.model('College',collegeSchema);