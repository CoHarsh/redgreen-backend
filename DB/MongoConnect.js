// mongoose.connect('mongodb://localhost:27017/students')

const mongoose = require('mongoose');

async function dbconnect(){
    await mongoose.connect('mongodb://127.0.0.1:27017/redgreen')
}

module.exports = dbconnect;