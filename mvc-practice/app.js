import express from "express";
import { homeRouter } from "./routes/homeRoute.js";
import { bookRouter } from "./routes/bookRoute.js";

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());
app.use(homeRouter);
app.use(bookRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
