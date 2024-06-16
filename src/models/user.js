const mongoose = require("mongoose");


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    astrologerId:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'astrologer' ,

    },
});

module.exports = mongoose.model("user", userSchema);