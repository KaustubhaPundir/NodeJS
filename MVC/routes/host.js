import path from 'path'; //core module
import express from 'express';
import homesController from '../controller/homes.js'
const __dirname = path.resolve('.'); //done while using ES module as __dirname, __filename are not available in it
const hostrouter=express.Router();

hostrouter.get('/add-home',homesController.getAddhome);
hostrouter.post('/add-home',homesController.postAddhome);

export default hostrouter;