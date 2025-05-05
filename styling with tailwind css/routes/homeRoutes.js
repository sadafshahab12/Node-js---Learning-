const express = require("express");
const homeRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path_utils");
homeRouter.get("/", (req, res, next) => {
  console.log("handling / for get: ", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
