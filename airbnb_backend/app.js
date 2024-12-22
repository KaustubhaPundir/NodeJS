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
app.get("/",(req,res,next)=>{
    res.send(`<h1>Welcome to airbnb</h1>
        <a href="/user">go to user</a>
        <a href="/host">go to host</a>
        <br>
        <a href="/add-home">Add home</a>`);
});
app.get('/add-home',(req,res,next)=>{
    res.send(`<h1>Add a home</h1>
        <form action='/add-home' method='POST'>
            <input type='text' placeholder='enter the home name' name='housename'/>
            <input type='submit'/>
        </form>`)
});
app.post('/add-home',(req,res,next)=>{
    res.send(`<h1>Home registered successfully</h1>
        <a href="/">Go back to homepage</a>`);
    console.log(req.body);
})
app.use(userrouter);
app.use(hostrouter);
const port = 3001;
app.listen(port, () => { console.log("Server running at http://localhost:3001/"); }); 