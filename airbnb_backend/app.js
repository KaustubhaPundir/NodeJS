import express from 'express';
import bodyParser from 'body-parser';
// import hostHandler from './routes/host';
import userrouter from './routes/user.js';
import hostrouter from './routes/host.js';
const app=express();

app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
});//this middleware applies to every middleware and will show url and method
app.use(express.urlencoded({extended:true}));
app.use(userrouter);
app.use(hostrouter);
app.get('/host/add-home',(req,res,next)=>{
    
});
const port = 3001;
app.listen(port, () => { console.log("Server running at http://localhost:3001/"); }); 