const express = require('express');
const router = express.Router();

require('../db/conn');

const User =require("../model/userSchema");

router.get('/',(req, res)=>{
    res.send('hello home from router js');
});

//by promises
/*
router.post('/signup',(req,res) => {
const {name , email, phone, work, password, cpassword } = req.body;

if(!name || !email || !phone || !work || !password || !cpassword ){
    return res.status(422).json({error: "plz fill all fields"});
}

User.findOne({email:email}).then((userExist) => {
    if(userExist){
        return res.status(422).json({error: "email already exist"});
    }

    const user = new User({name , email, phone, work, password, cpassword });

    user.save().then(() => {
        res.status(201).json({message: "user regstered successfully"});
    }).catch((err) => res.status(500).json({error: "failed to registered"}));

}).catch(err => {console.log(err); });

    // console.log(name);
    // console.log(email);
    // res.send('mera register page');
    // res.json({message : req.body});

});
*/

// by async and await
router.post('/signup', async (req,res) => {
    const {name , email, phone, work, password, cpassword } = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword ){
        return res.status(422).json({error: "plz fill all fields"});
    }

    try{
       const userExist = await User.findOne({email:email});
       if(userExist){
        return res.status(422).json({error: "email already exist"});
    }

    const user = new User({name , email, phone, work, password, cpassword });

    await user.save();

    res.status(201).json({message: "user regstered successfully"});
   
        
    }catch (err){
        console.log(err);
    }
    
    
    
        // console.log(name);
        // console.log(email);
        // res.send('mera register page');
        // res.json({message : req.body});
    
    });

    //log in route

    router.post('/login', async (req, res) => {
        // console.log(req.body);
        // res.json({message : "awesome"});

        try{
           const { email, password } = req.body;
           if(!email || !password){
            return res.status(400).json({error:"plz fill the data"});
           }
           const userlogin = await User.findOne({email: email});
           console.log(userlogin);
           if(!userlogin){
            res.status(400).json({error:"user not registered"});
           }
           else{
            res.json({message:"user signed in succesfully"});
           }
           
        }catch(err){
            console.log(err);
        }

    })

module.exports = router;