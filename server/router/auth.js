const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.send('hello home from router js');
});

router.post('/signup',(req,res) => {
    console.log(req.body);
    // res.send('mera register page');
    res.json({message : req.body});
})

module.exports = router;