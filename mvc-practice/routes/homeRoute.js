import express from "express";
import {homeController} from "../controller/home.js";
const homeRouter = express.Router();

homeRouter.get("/", homeController);

export { homeRouter };
