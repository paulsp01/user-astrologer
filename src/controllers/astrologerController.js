const Astrologer=require('../models/Astrologer');
const {adjustFlowWeight}=require('../services/flowdistributionservice');


async function adjustFlowWeightHandler(req,res){
    const {astrologerId}=req.params;
    const {newFlowWeight}=req.body;


    if(await adjustFlowWeight(astrologerId,newFlowWeight)){
        res.status(200).json({message:'Flow weight adjusted successfully'});
    }else{
        res.status(404).json({message:'Astrologer not found'})
    }
}

async function createAstrologer(req,res){
    const createAstrologer=await Astrologer.create(req.body);
    res.status(200).json({message:'astrologer created'});
}

module.exports = { adjustFlowWeightHandler, createAstrologer };

