const Question = require('../../Models/Question');

const GetQuestion = async (req,res) => {
    const questionid = req.params.id;
    
    let question;
    try{
        question = await Question.findById(questionid);
    }catch(err){
        if(err.message.startsWith('Cast to ObjectId failed for value ')){
            return res.status(404).send({
                success:false,
                message:"Question not found"
            });
        }else{
            return res.status(404).send({
                success:false,
                message:"Question not found"
            });
        }
    }
    
    question.questiontestcases=null;
    res.status(200).json({
        success:true,
        data:JSON.stringify(question)
    });

};

module.exports = GetQuestion;