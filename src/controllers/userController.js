const User=require('../models/User');
const {assignAstrologer}=require('../services/flowdistributionservice');


async function assignUser(req,res){
    const {userId}=req.params;
    const {astrologerId}=await assignAstrologer(userId);
    console.log(astrologerId);

    try{
        if(astrologerId){
        const user=new User({username:req.body.username,astrologerId});
        await user.save();
        res.status(200).json({astrologerId});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports = {
  assignUser,
};