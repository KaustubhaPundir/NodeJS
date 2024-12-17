import http from 'http';
import requestListener from './server.js';
const server = http.createServer(requestListener);
const port = 3001;
server.listen(3001, () => { console.log("Server running at http://localhost:3001/"); }); 