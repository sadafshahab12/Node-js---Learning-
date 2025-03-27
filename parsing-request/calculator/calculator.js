const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<h1>Welcome Home</h1></br> <a href="/calculator">go to calculator</a>'
    );
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<form action="/calculate-result" method="POST"><input placeholder="Enter first number" type="number" id="firstNum" name="firstNum"/><input placeholder="Enter second number" type="number" id="secondNum" name="secondNum"/><button type="submit" >Sum</button></form>'
    );
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method == "POST"
  ) {
    const result = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      result.push(chunk);
    });
    req.on("end", () => {
      const fullResult = Buffer.concat(result).toString();
      console.log(fullResult);
      const resultParams = new URLSearchParams(fullResult);
      const resultObj = Object.fromEntries(resultParams);
      console.log(resultObj);
      fs.writeFileSync("sum.txt", JSON.stringify(resultObj));
    });
    res.setHeader("Content-Type", "text/html");
    res.write("<p>The sum of </p>");
    return res.end();
  }
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});


