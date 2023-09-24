const mongoose = require('mongoose');

const {Schema} = mongoose;

const userschema = new Schema({
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
    college:{
        type:String,
        required:true
    }
});


module.exports = mongoose.model("User", userschema);