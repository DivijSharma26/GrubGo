const {Schema, default: mongoose} = require("mongoose");
const User = new Schema({
    name:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:String,
        default:Date.now()
    }
})
module.exports = mongoose.model("user",User);