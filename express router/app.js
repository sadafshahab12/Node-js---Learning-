const express = require("express"); // external module
//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();

app.use("/", (req, res, next) => {
  console.log(req.url, req.method); //show url
  next();
});
app.use(express.urlencoded());
//express router 
app.use(userRouter);
app.use(hostRouter);
app.use(hostRouter);

// 404 page not found with status code 
app.use((req, res, next) => {
  res.status(404).send(`<h1>404! page not found</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
