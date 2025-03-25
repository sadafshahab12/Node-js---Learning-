const http = require("http");

const createdServer = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if(req.url === "/"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Server in Node js</title></head>");
    res.write("<body><h1>My First Node JS Server</h1></body>");
    res.write("</html>");
    res.end();
  }
  else if(req.url === "/products"){
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Porduct in Node js</title></head>");
    res.write("<body><h1>My First Node JS Server</h1></body>");
    res.write("</html>");
    res.end();
  }

    //if url something else
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Server in Node js</title></head>");
    res.write("<body><h1>My First Node JS Server</h1></body>");
    res.write("</html>");
    res.end();
  
  
});

const port = 3000;
createdServer.listen(port, () => {
  console.log(`Server is running on this address http://localhost:${port}`);
});
