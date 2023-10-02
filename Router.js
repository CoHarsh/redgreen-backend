const express = require('express')
const router = express.Router();

// import the controllers
const LoginUser = require('./Controllers/LoginUser')
const Contests = require("./Controllers/Contests");
const CollegeRegistration = require('./Controllers/College/CollegeRegistration');
const CompiletheCode = require('./Controllers/CodeCompiler/CompileCode');
const GenerateQuestion = require('./Controllers/Admin/GenerateQuestion');
const GetQuestion = require('./Controllers/College/GetQuestion');
router.get('/',function(req,res){
    res.status(200).send({
        message:"Welcome to the server!"
    });
});


router.post('/login',LoginUser);
router.post('/collegeregister',CollegeRegistration);
// contest listing
router.get('/contests',Contests);

router.post('/compile',CompiletheCode);

router.post('/generatequestion',GenerateQuestion);
router.get('/getquestion/:id',GetQuestion);



module.exports = router;
