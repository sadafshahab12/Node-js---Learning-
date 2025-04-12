const http = require("http");
const testingSyntax = require("./syntax");
const runtime = require("./runtime");
const logical = require("./logical");
const calulcateArea = require("./practice");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // testingSyntax()
  // runtime()
  // logical();
  calulcateArea()
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
