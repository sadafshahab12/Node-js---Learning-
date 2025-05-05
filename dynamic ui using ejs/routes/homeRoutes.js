const express = require("express");
const homeRouter = express.Router();
// const path = require("path");
// const rootDir = require("../utils/path_utils");
const { addedBooks } = require("./contactRoutes");
homeRouter.get("/", (req, res, next) => {
  console.log("handling / for get: ", req.url, req.method);
  console.log(addedBooks);
  // res.sendFile(path.join(rootDir, "views", "home.html"));
  res.render("home", { addedBooks }); // render is attached with ejs
});

module.exports = homeRouter;
