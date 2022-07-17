const dotenv = require('dotenv');
const mongoose =require('mongoose');
const express =require('express');
const app =express();

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

// const User = require('./model/userSchema');

// linked router file too root
app.use(require('./router/auth'));

const PORT =process.env.PORT;



//mongodb+srv://mishra:<password>@cluster0.yrprxjp.mongodb.net/?retryWrites=true&w=majority

//middleware

const middleware = (req,res,next) => {
    console.log('middleware');
    next();
}


app.get('/',(req, res)=>{
    res.send('hello Home');
});

app.get('/about',middleware,(req, res)=>{
    res.send('hello About');
});

app.get('/login',(req, res)=>{
    res.send('hello Login');
});

app.get('/signup',(req, res)=>{
    res.send('hello Signup');
});

app.listen(PORT, ()=> {
    console.log(`server is running at port no ${PORT}`);
})


