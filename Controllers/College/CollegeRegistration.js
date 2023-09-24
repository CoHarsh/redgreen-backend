
const College = require('../../Models/College')
const CollegeRegistration = async (req,res)=>{
    const {name,email,password,collegeacryn} = req.body;
    if(!name || !email || !password || !collegeacryn){
        return res.status(400).json({
            message: "Please fill all the fields"
        });
    }

    let newcollege;

    try{
        newcollege = new College({
            name,
            email,
            password,
            collegeacryn
        });
    }
    catch(err){
        return res.status(400).json({
            message: "Internal Server Error",
            error:err
        });
    }
    
    try{
        await newcollege.save();
    }catch(err){
        if(err.code === 11000){
            return res.status(400).json({
                message:"Please take another acryn for your College",
                error:err
            });
        }
        return res.status(400).json({
            message: "Internal Server Error",
            error:err
        });
    }
    return res.status(200).json({
        message: "College Created Successfully",
        collegedata:{
            name,
            email,
            password,
            collegeacryn
        }
    });
};

module.exports = CollegeRegistration;