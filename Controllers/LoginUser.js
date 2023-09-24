const Users = require('../Models/User')
const jwt = require('jsonwebtoken');
require('dotenv').config();


const LoginUser = (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(403).send({
            message: "Please provide email and password"
        });
    }
    
    let user;

    try{
        user=Users.findOne({email: email});
    }catch(error){
        return res.status(403).send({
            message: "Internal Server Error from DB",
            error: error
        });
    }

    if(!user){
        return res.status(403).send({
            message: "Invalid email or password"
        });
    }
    const privateKey = process.env.JWTPRIVATE;
    try{
        var token = jwt.sign({
                "email":email
            },
            privateKey
        );
        return res.status(200).send({
            email:email,
            token: token
        });
    }catch(error){
        return res.status(403).send({
            message: "Internal Server Error",
            error: error
        });
    }

};

module.exports = LoginUser;