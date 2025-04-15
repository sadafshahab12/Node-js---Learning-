const express = require("express");

const app = express();
app.use("/", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.send(`<h1> Middle ware Practice</h1>
    <a href="/home"> Go to home</a>
    `);
});
app.use("/home", (req, res, next) => {
  console.log(`first middle ware ${req.url} ${req.method}`);
  res.send(`<p> ${req.url} ${req.method} ${new Date().toISOString()} </p>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
