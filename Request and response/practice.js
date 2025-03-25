const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><head><title>Sadaf Navbar</title></head><body><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li><li><a href="/service">Service</a></li></ul></nav><br><h1>Welcome Home</h1></body></html>'
    );
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><head><title>Sadaf Navbar</title></head><body><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li><li><a href="/service">Service</a></li></ul></nav><br><h1>Welcome to About</h1></body></html>'
    );
    return res.end();
  } else if (req.url === "/service") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><head><title>Sadaf Navbar</title></head><body><nav><ul><li><a href="/">Home</a></li><li><a href="/about">About</a></li><li><a href="/service">Service</a></li></ul></nav><br><h1>Welcome to Service</h1></body></html>'
    );
    return res.end();
  } else {
    res.setHeader("Location", "/");
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on Port http://localhost:${PORT}`);
});
