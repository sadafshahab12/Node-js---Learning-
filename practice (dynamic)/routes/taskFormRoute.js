const express = require("express");
const path = require("path");
const rootDir = require("../utils/path_utils");
const taskFormRouter = express.Router();

taskFormRouter.get("/add-task", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addTask.html"));
});
const tasks = [];
taskFormRouter.post("/add-task", (req, res, next) => {
  console.log(req.body);
  tasks.push(req.body);
  console.log(tasks);
  res.sendFile(path.join(rootDir, "views", "addSuccess.html"));
});
exports.taskFormRouter = taskFormRouter;
exports.tasks = tasks;
