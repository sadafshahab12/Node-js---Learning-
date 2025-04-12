const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// create two middle ware
app.use((req, res, next) => {
  console.log("first middleware: ", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("second middleware: ", req.url, req.method);
  next();
});
// app.use((req, res, next) => {
//   console.log("third middleware: ", req.url, req.method);
//   res.send("<h1>Welcome to My Ecommerce Website</h1>")
// });
app.get("/", (req, res, next) => {
  console.log("handling / for get: ", req.url, req.method);
  res.send(`<h1>Welcome to My Ecommerce Website</h1>
    <a href="/contact"> Contact us </a>
    `);
});

app.get("/contact", (req, res, next) => {
  console.log("Handling /contact for get method: ", req.url, req.method);
  res.send(`<h1>Welcome to contact page</h1>
        <form action="/contact" method="POST">
      <input type="text" placeholder="Enter Your Name" name="name" />
      <input type="email" placeholder="Enter Your Email Address" name="email" />
      <input type="submit" value="Submit" />
    </form>
    `);
});

app.use(bodyParser.urlencoded());  // do all chunk work and parse the data receive from user
app.post("/contact", (req, res, next) => {
  console.log(
    "Handling /contact for POST method: ",
    req.url,
    req.method,
    req.body
  );
  res.send("<h2>Your form has been submitted</h2>");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
