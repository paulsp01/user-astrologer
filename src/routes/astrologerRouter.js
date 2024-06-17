const express=require('express');
const router=express.Router();
const {
  adjustFlowWeightHandler,
  createAstrologer,
} = require("../controllers/astrologerController");


router.put("/adjustFlowWeight/:astrologerId", adjustFlowWeightHandler);
router.post("/create", createAstrologer);
module.exports=router;  