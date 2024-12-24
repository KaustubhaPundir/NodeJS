import { get } from "https";
import path from "path";
const __dirname = path.resolve('.');
const getAddhome=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','MVC','views','addHome.html')); //file is send
}
const postAddhome=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','MVC','views','homeaddedsuccess.html')); //file is send
    console.log(req.body);
}
export default {getAddhome,postAddhome};