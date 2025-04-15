const path = require("path"); //Core

const express = require("express");
// local module
const rootDir = require("../utils/path_utils");
const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
