const mongoose = require("mongoose");


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    astrologerId:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Astrologer' ,

    },
});

module.exports = mongoose.model("User", userSchema);