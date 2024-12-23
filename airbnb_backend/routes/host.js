import express from 'express';

const hostrouter=express.Router();

hostrouter.get('/add-home',(req,res,next)=>{
    res.send(`<h1>Add a home</h1>
        <form action='/host/add-home' method='POST'>
            <input type='text' placeholder='enter the home name' name='housename'/>
            <input type='submit'/>
        </form>`);
});
hostrouter.post('/host/add-home',(req,res,next)=>{
    res.send(`<h1>Home registered successfully</h1>
        <a href="/">Go back to homepage</a>`);
    console.log(req.body);
})

export default hostrouter;