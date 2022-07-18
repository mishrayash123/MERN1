const express = require('express');
const router = express.Router();

require('../db/conn');

const User =require("../model/userSchema");

router.get('/',(req, res)=>{
    res.send('hello home from router js');
});

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

module.exports = router;