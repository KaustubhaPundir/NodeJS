import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

const app=express();
app.get("/home",(req,res,next)=>{
    res.send(`<h1>Hello this is home</h1>`);
});

const port = 3001;
app.listen(port, () => { console.log("Server running at http://localhost:3001/"); }); 