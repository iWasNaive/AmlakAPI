const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = require("./app");

port = process.env.port;
uri = process.env.uri;

((async) => {
  mongoose.connect(uri);
  console.log("mongo");
})();

app.listen(port, () => {
  console.log("Run");
});
