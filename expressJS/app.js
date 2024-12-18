import http from 'http';
import express from 'express';
import requestListener from './server.js';

const app = express();
app.use("/",(req,res,next)=>{ //we can add path to use app.use for first
    console.log("first middleware",req.url,req.method);
    next(); //now this next() will not got to submit-detail middleware as it is not applicable
});
app.use("/submit-details",(req,res,next)=>{
    console.log("second middleware",req.url,req.method);
    res.send('<h1>Hello ExpressJS</h1>');
})



const port = 3001;
app.listen(3001, () => { console.log("Server running at http://localhost:3001/"); }); 


//basically by adding path we are doing route handling
//that app.use will only be active when the specific path have arrived