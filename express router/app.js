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
app.use(userRouter);
app.use(hostRouter);
app.use(hostRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
