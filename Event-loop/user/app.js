const http = require("http");
const requestHandler = require("./actualparsing")  // extracting function from a file 

const server = http.createServer(requestHandler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
