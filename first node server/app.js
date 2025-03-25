// First Server of node exit
const http = require("http"); //using core module
// create server take callback
// function requestListener(req, res) {
//when we built dunction it always take 2 parameter req and res
//console.log(req); //receive from browser --> reuqest
//request receive in function and data in req parameter
//}
// http.createServer(requestListener);
const server = http.createServer((req, res) => {
  // this create server always return object and it should listen
  console.log(req);
  process.exit(); //stop event loop
}); //create server by this
// function refernce pass
const PORT = 3002; //port store in variable
server.listen(PORT, () => {
  console.log(`server is running on address http://localhost:${PORT}`);
}); //3000 is port our  localhost
// listen also take call back
// listen function take 2 parameter port and callback
