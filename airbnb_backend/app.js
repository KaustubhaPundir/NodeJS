import express from 'express';
import bodyParser from 'body-parser';
// import hostHandler from './routes/host';
import userrouter from './routes/user.js';
import hostrouter from './routes/host.js';
const app=express();
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res,next)=>{
    res.send(`<h1>Welcome to airbnb</h1>
        <a href="/user">go to user</a>
        <a href="/host">go to host</a>`);
})
app.use(userrouter);
app.use(hostrouter);
const port = 3001;
app.listen(port, () => { console.log("Server running at http://localhost:3001/"); }); 