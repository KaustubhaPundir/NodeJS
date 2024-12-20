import express from 'express';
import bodyParser from 'body-parser';
// import hostHandler from './routes/host';
import userrouter from './routes/user.js';
const app=express();
app.use(userrouter);
const port = 3001;
app.listen(port, () => { console.log("Server running at http://localhost:3001/"); }); 