const http = require('http'); //importing http for comms and data transfer

function requestListener(req, res) {
    console.log(req.url, req.method, req.headers); //logging request
    // process.exit();
    //creating a response
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Server1</title><head>');
        res.write('<body><h1>Server1 running</h1></body>')
        res.write('</html>');
        return res.end();
    } else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Server1 - product</title><head>');
        res.write('<body><h1>You are at product section in server1</h1></body>')
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write(`<head><title>Server1-something</title><head>`);
    res.write(`<body><h1>You are at something section in server1</h1></body>`)
    res.write('</html>');
    res.end();

    //This is a response to send back

}//created a function request listner whihc takes a request req and gives a response res
const server = http.createServer(requestListener); //creates a server which runs our function
const port = 3001; //port for our server
server.listen(3001, () => { console.log("Server running"); }); // tells server to listen at port 3001 , if success log the message
//the second arg in server.listen is an anonimous(direct funtion as argument) function which will be called by server.listen