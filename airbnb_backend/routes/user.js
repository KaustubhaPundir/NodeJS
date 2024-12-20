import express from 'express';

const userrouter=express.Router();

userrouter.get("/home",(req,res,next)=>{
    res.send(`<h1>Hello this is home</h1>`);
});

export default userrouter;