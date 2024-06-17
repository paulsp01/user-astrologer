const mongoose=require('mongoose');


const astrologerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    flowWeight:{
        type:Number,
        default:1

    },
});

module.exports=mongoose.model('Astrologer',astrologerSchema);