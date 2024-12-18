import http from 'http';
import express from 'express';
import requestListener from './server.js';

const app = express();
app.get("/home",(req,res,next)=>{
    console.log("second middleware",req.url,req.method);
    res.send('<h1>Hello ExpressJS</h1>');
})
app.get("/submit-details",(req,res,next)=>{
    console.log("inside get submit details middleware");
    res.send(`
        <html>
        <form action='/submit-details' method='POST'>
        <input name='username' type='text'>
        <input type='submit'>
        </form>
        </html>
        `)
});
app.post("/submit-details",(req,res,next)=>{
    console.log("post middleware");
    res.send('<h1>we will get to you soon</h1>')
})
app.use("/",(req,res,next)=>{ //we can add path to use app.use for first
    console.log("first middleware",req.url,req.method);
    next(); //now this next() will not got to submit-detail middleware as it is not applicable
});
app.use((req,res,next)=>{
    console.log("called by the next of /");
});

const port = 3001;
app.listen(3001, () => { console.log("Server running at http://localhost:3001/"); }); 


//basically by adding path we are doing route handling
//that app.use will only be active when the specific path have arrived
//order of middleware matters
//next cannot be done after send, as send ultimately calls res.end()
// '/' is a universal path and works for every path, it doesnot care what is written after it will be executed so it should pe at the last in order 

//In use the path is wildcard(if any path having the starting same as the path this will also be executed)
//get and post will do the exact matching of the path