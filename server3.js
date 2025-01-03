//taking input from user 

const http = require('http'); //importing http for comms and data transfer
const fs=require('fs');
function requestListener(req, res) {
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
        fs.writeFileSync('user-details.txt','kaustubha');
        res.statusCode=302;//302 means redirection
        res.setHeader('Location','/'); //change location to /
        return res.end();
    } 

}
const server = http.createServer(requestListener);
const port = 3001;
server.listen(3001, () => { console.log("Server running at http://localhost:3001/"); });