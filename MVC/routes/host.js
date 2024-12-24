import path from 'path'; //core module
import express from 'express';
import homesController from '../controller/homes.js'
const __dirname = path.resolve('.'); //done while using ES module as __dirname, __filename are not available in it
const hostrouter=express.Router();

hostrouter.get('/add-home',homesController.getAddhome);
hostrouter.post('/host/add-home',(req,res,next)=>{
    // res.send(`<h1>Home registered successfully</h1>
    //     <a href="/">Go back to homepage</a>`);
    res.sendFile(path.join(__dirname,'../','airbnb_backend','views','homeaddedsuccess.html')); //file is send
    console.log(req.body);
})

export default hostrouter;