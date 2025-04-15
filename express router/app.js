const express = require("express"); // external module
//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();

// middle ware
app.use("/", (req, res, next) => {
  console.log(req.url, req.method); //show url
  next();
});
//body parser with direct express.urlencoded() already built in function in express
// express.urlencoded() is a function that comes from the Express framework.
app.use(express.urlencoded());
//More specifically, it is a middleware factory function — that means it’s a function that returns a middleware function.
//express router
app.use(userRouter);
app.use("/host", hostRouter);
app.use("/host", hostRouter); //the given path will be preponed means add before the url given in the router like /host/add-home

// 404 page not found with status code
app.use((req, res, next) => {
  res.status(404).send(`<h1>404! page not found</h1>`);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
