const express=require('express');
const router=express.Router();
const {adjustFlowWeightHandler}=require('../controllers/astrologerController');

router.put("/adjustFlowWeight/:astrologerId", adjustFlowWeightHandler);

module.exports=router;  