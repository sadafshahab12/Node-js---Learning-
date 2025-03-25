const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Post method</title></head>");
    res.write("<body>");
    res.write("<h1>User Input</h1>");
    res.write("<form action='/user-details' method='POST'>");
    res.write("<label for='username'>Username:</label>");
    res.write(
      "<input type='text' id='fullname' placeholder='Enter your name' name='fullname'><br><br>"
    );
    res.write("<label for='gender'>Gender:</label>");
    res.write("<input  type='radio' value='male' id='male'  name='gender'/>");
    res.write("<label for='male'>Male</label>");
    res.write(
      "<input  type='radio' value='female' id='female'  name='gender'/>"
    );
    res.write("<label for='female'>Female</label>");
    res.write("<input type='submit' value='Submit'/>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/user-details" && req.method == "POST") {
    fs.writeFileSync("user.txt", "sadaf");
    res.statusCode = 302;  //redirect statuscode
    res.setHeader("Location" , "/") //redirect after submitting
    return res.end()
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Post method</title></head>");
  res.write("<body>");
  res.write("<h1>Details</h1>");
  res.write("</body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
