const express = require("express");
// local module
const homeRouter = require("./routes/homeRoutes");
const contactRouter = require("./routes/contactRoutes");
const path = require("path");
const rootDir = require("./utils/path_utils");
const app = express();

// create two middle ware
app.use((req, res, next) => {
  console.log("get request url: ", req.url, req.method);
  next();
});
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
