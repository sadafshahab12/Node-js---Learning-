const express = require("express");

const contactRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/path_utils");

contactRouter.get("/contact", (req, res, next) => {
  console.log("Handling /contact for get method: ", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contactForm.html"));
});

contactRouter.post("/contact", (req, res, next) => {
  console.log("Handling /contact for POST method: ", req.url, req.method);
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "submitForm.html"));
});

module.exports = contactRouter;
