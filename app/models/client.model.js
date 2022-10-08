const mongoose = require("mongoose");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    name: String,
    adress: String,
    email: String,
    phone: Number,
  })
);

module.exports = Client;