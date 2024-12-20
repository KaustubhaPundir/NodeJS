import express from 'express';

const hostrouter=express.Router();

hostrouter.get('/host',(req,res,next)=>{
    res.send('<h1>Welcome to host page</h1>');
});

export default hostrouter;