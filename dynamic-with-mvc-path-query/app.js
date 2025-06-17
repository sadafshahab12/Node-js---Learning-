const express = require("express");
const homeRouter = require("./routes/homeRoute");
const addBookRoute = require("./routes/addBookRoute");
const { notFoundController } = require("./controllers/notFoundController");
const bookRouter = require("./routes/booksRoute");
const path = require("path");
const rootDir = require("./utils/path_utils");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
const PORT = 5000;

app.use((req, res, next) => {
  console.log("get request url", req.url, req.method);
  next();
});
app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded());
app.use(homeRouter);
app.use(addBookRoute);
app.use(bookRouter);
app.use(notFoundController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
