import express from 'express';

const userrouter=express.Router();

userrouter.get("/",(req,res,next)=>{
    res.send(`<h1>Welcome to airbnb</h1>
        <a href="/user">go to user</a>
        <a href="/host">go to host</a>
        <br>
        <a href="/host/add-home">Add home</a>`);
});

export default userrouter;