const express = require("express")

const hostRouter = express.Router()
hostRouter.get("/add-home", (req, res, next) => {
  res.send(`<h1> Register Your Home Here: </h1>
    <form action="/host/add-home" method="post">
    <input type="text" name="user-name" placeholder="Enter Your Name"/>
    <input type="text" name="house name" placeholder="Enter the name of your house"/>
    <input type ="submit" />
    </form>
    `);
});
hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`<h1> Home Registered successfully </h1>
    <a href="/"> Go back to Home</a>
    `);
});
module.exports = hostRouter