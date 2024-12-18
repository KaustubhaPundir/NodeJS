import http from 'http';
import express from 'express';
import requestListener from './server.js';

const app = express();
app.use('/',(req,res,next)=>{
    console.log("first middleware",req.url,req.method);
    next();
});
app.use((req,res,next)=>{
    console.log("second middleware",req.url,req.method);
    res.send('<h1>Hello ExpressJS</h1>');
})



const port = 3001;
app.listen(3001, () => { console.log("Server running at http://localhost:3001/"); }); 