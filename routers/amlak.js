const express = require("express");
const controller = require("./../controllers/amlak");

const r = express.Router();

r.route("/create").post(controller.Create);
r.route("/melks").get(controller.getAll);

module.exports = r;
