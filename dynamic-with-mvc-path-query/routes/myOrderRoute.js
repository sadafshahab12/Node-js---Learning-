const express = require("express");
const {
  myOrderController,
} = require("../controllers/storeController/myOrderController");

const myOrderRoute = express.Router();

myOrderRoute.get("/my-orders", myOrderController);
module.exports = myOrderRoute;
