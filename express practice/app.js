const express = require("express");

const app = express();
// create two middle ware
app.use("/", (req, res, next) => {
  console.log("first middleware: ", req.url, req.method);
  next();
});
app.use("/", (req, res, next) => {
  console.log("second middleware: ", req.url, req.method);
  next();
});
app.use("/", (req, res, next) => {
  console.log("third middleware: ", req.url, req.method);
  res.send("<h1>Welcome to My Ecommerce Website</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
