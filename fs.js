console.log("This is my first server");
const fs=require('fs');
fs.writeFile("Output_server1.txt","Writing File",(err)=>{
    if (err) console.log("Error occured");
    else console.log("File written successfully");
});