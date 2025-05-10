const express = require("express");

const homeController = require("../controllers/homes");
const homeRouter = express.Router();

homeRouter.get("/", homeController.home);

module.exports = homeRouter;
