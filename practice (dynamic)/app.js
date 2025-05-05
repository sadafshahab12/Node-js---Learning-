// const http = require("http");
// const express = require("express");
// const PORT = 3000;
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port: http://localhost:${PORT}`);
// });

// const app = express()

// app.use("/" , (req, res, next)=>{
//   console.log(req.url, req.method);
// })

const express = require("express");
const { homeRouter } = require("./routes/homeRoute");
const { taskFormRouter } = require("./routes/taskFormRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use((req, res, next) => {
  console.log(`get request url and method: ${req.url}, ${req.method}`);
  next();
});
// app.use("/", (req, res, next) => {
//   res.send("<h1>Welcome to the home page</h1>");
// })
app.use(express.urlencoded());
app.use(homeRouter);
app.use(taskFormRouter);

app.use(express.static("public"));
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
