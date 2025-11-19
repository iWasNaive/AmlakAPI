const express = require("express");
const amlakRouter = require("./routers/amlak");
const app = express();

app.use(express.json());

app.use("/api/amlak", amlakRouter);

module.exports = app;
