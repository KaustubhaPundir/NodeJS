import express from 'express';

const userrouter=express.Router();

userrouter.get("/user",(req,res,next)=>{
    res.send(`<h1>welcome to user page</h1>`);
});

export default userrouter;