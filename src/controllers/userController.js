const User=require('../models/user');
const {assignAstrologer}=require('../services/flowdistributionservice');


async function assignUser(req,res){
    const {userId}=req.body;
    const {astrologerId}=await assignAstrologer(usrId);

    try{
        const user=new User({username:req.body.username,astrologerId});
        await user.save();
        res.status(200).json({astrologerId});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports = {
  assignUser,
};