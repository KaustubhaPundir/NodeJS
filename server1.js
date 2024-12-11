const http=require('http'); //importing http for comms and data transfer

function requestListener(req,res){
    console.log(req);
}//created a function request listner whihc takes a request req and gives a response res
const server=http.createServer(requestListener); //creates a server which runs our function
const port=3001; //port for our server
server.listen(3001,()=>{console.log("Server running");}); // tells server to listen at port 3001 , if success log the message
//the second arg in server.listen is an anonimous(direct funtion as argument) function which will be called by server.listen