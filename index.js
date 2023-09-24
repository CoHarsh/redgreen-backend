const express = require("express");
require('dotenv').config();
var bodyparser = require('body-parser')
const router = require('./Router');
const dbconnect = require('./DB/MongoConnect')



const app = express();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
})) 

app.use('/api',router);

app.listen((process.env.HOST,process.env.PORT), () => {
    dbconnect()
    .then(() => console.log("DB Connected"))
    .catch(err=>{
        console.log(err);
    })
    console.log(`Server is running on port ${process.env.PORT}`);
});

