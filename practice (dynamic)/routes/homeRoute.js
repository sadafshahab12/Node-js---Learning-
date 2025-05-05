const express = require("express");
const homeRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path_utils");
const { tasks } = require("./taskFormRoute");
homeRouter.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "home.html"));
  res.render("home", { tasks, title: "Home Page" , currentPage: "Home"});
});

exports.homeRouter = homeRouter;
