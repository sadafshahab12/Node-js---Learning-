import express from "express";
import {
  addBookController,
  addBookPostController,
} from "../controller/addBook.js";

const bookRouter = express.Router();

bookRouter.get("/books", addBookController);

bookRouter.post("/books", addBookPostController);
export { bookRouter };
