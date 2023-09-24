
const Contest = require('../Models/Contest')

const Contests = async (req,res) => {
    //serve all the constest 
    let allcontest;
    try{
        allcontest= await Contest.find({});
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }

    if(!allcontest){
        return res.status(404).json({
            message: "Contest not found"
        });
    }

    return res.status(200).json(allcontest);

    

};

module.exports = Contests;