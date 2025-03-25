// const http = require("http");

// const createdServer = http.createServer((req,res)=>{
//   console.log(req)
// })

// const port = 3003;
// createdServer.listen(port, ()=>{
//   console.log(`Server is running on this address http://localhost:${port}`)
// })
const http = require("http");

// function requestListener(request, response) {
//   console.log(request);
// }
// http.createServer(requestListener) //we pass function reference
const server = http.createServer((req, res) => {
  // console.log(req);
  // process.exit() //stop event loop
  console.log(req.url, req.method, req.headers)
});
const PORT = 3000
server.listen(PORT, ()=>{
  console.log(`Server is running at http://localhost:${PORT}`)
})
