const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
const renderer = require("../services/render");

route.get("/", renderer.homeRoute);
route.get("/add_user", renderer.add_user);
route.get("/update_user", renderer.update_user);
route.get("/about", renderer.about);

//api route

route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.delete("/api/users/:id", controller.delete);
route.put("/api/users/:id", controller.update);

module.exports = route;