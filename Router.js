const express = require('express')
const router = express.Router();

// import the controllers
const LoginUser = require('./Controllers/LoginUser')
const Contests = require("./Controllers/Contests");
const CollegeRegistration = require('./Controllers/College/CollegeRegistration');

router.get('/',function(req,res){
    res.status(200).send({
        message:"Welcome to the server!"
    });
});


router.post('/login',LoginUser);
router.post('/collegeregister',CollegeRegistration);
// contest listing
router.get('/contests',Contests);




module.exports = router;
