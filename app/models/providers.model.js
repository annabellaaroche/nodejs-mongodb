const mongoose = require("mongoose");

const Provider = mongoose.model(
  "Provider",
  new mongoose.Schema({
    name: String,
    adress: String,
    email: String,
    phone: String,
  })
);

module.exports = Provider;