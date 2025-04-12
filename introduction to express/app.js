// const http = require("http"); //core module
const express = require("express"); //external

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came into first middleware:", req.url, req.method);
  next();
});
app.post("/submit", (req, res, next) => {
  console.log("Came into second middleware:", req.url, req.method);
  res.send("<h1>Welcome to my website</h1>");
});
app.use("/", (req, res, next) => {
  console.log("Came from another middleware:", req.url, req.method);
  res.send("<p>Came from another middleware"); 
});

// const server = http.createServer(app);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
