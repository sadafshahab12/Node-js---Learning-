const http = require("http");

// function requestListener(request, response) {
//   console.log(request);
// }
// http.createServer(requestListener) //we pass function reference
const server = http.createServer((req, res) => {
  // console.log(req);
  // process.exit() //stop event loop
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Ecommerce Website</title></head>");
    res.write("<body><h1>Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.write("<html>");
    res.write("<head><title>Ecommerce Website | Products</title></head>");
    res.write("<body><h1>Products</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>Node js learning</title></head>");
  res.write("<body><h1>OUR First Node js server</h1></body>");
  res.write("</html>");
  return res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
