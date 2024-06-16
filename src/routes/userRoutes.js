const express=require('express');
const router=express.Router();
const {assignUser}=require('../controllers/userController');

router.post('/assignUser',assignUser);
module.exports=router;