//taking input from user 
import fs from'fs';
import { Module } from 'module';
const requestListener=(req, res)=>{
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<head><title>Server1</title><head>');
        res.write('<html>');
        res.write('<body><h1>Welcome to Home Page</h1></body>');
        res.write('<form action="/submit-details" method="POST">');//in action we give the url where we have to submit the form and method post means we are coming with some data
        res.write('<input type="text" name="username" id="name" placeholder="Enter your name"><br>');
        res.write('<button type="submit">Submit</button>')
        res.write('</html>');
    }else if(req.url.toLowerCase()==='/submit-details' && req.method=="POST"){
        const body=[];
        req.on('data',(chunk)=>{ //event listner
            console.log(chunk); //reading chunks
            body.push(chunk);
        });
        req.on('end',()=>{ //extracting data
            const parseddata=Buffer.concat(body).toString();
            console.log(parseddata); //gives in url format
            const params=new URLSearchParams(parseddata);//exract parameters , params=parameters
            // const jsonObject={};
            // for(const [key,value] of params.entries()){ //arranging in key value pairs
            //     jsonObject[key]=value;
            // }
            const jsonObject=Object.fromEntries(params); //easy way for above commented code
            console.log(jsonObject);
            fs.writeFileSync('user-details.txt',JSON.stringify(jsonObject));
        })
        
        res.statusCode=302;//302 means redirection
        res.setHeader('Location','/'); //change location to /
        return res.end();
    } 

};
export default requestListener;
