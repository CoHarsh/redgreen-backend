
const Question = require('../../Models/Question')

const GenerateQuestion = (req,res) => {
    const {questionname,questiontext,questioninputdetails,questionoutputdetails,questionconstrains,questionexamples,questiontestcases} = req.body;
    if(!questionname || !questiontext || !questionoutputdetails || !questionconstrains || !questioninputdetails || !questiontestcases){
        return res.status(400).send({
            success: false,
            message: 'Please Provide all the required information'
        });
    }

    let newQuestion;
    try{
        newQuestion=new Question(req.body);
    }catch(error){
        return res.status(400).send({
            success: false,
            error:error
        });
    }

    try{
        newQuestion.save();
    }catch(error){
        return res.status(400).send({
            success: false,
            error:error
        });
    }

    res.status(200).send({
        success:true,
        message:"Question generated successfully!",
        question: newQuestion
    });
}

module.exports = GenerateQuestion