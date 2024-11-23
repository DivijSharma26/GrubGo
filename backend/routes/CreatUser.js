const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/creatuser",async(req,res)=>{
    try{
       await User.create({
            name:"Divij Sharma",
            password:"12345",
            email:"DivijSharma26@gmail.com",
            location:"Chitkara University"
        })

        res.json({success:true});

    }catch(error){
        console.log(error);
        res.json({success:false});
    }
})


module.exports = router;