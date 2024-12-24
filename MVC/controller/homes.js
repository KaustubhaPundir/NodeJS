import { get } from "https";
import path from "path";
const __dirname = path.resolve('.');
const getAddhome=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','MVC','views','addHome.html')); //file is send
}
export default getAddhome;