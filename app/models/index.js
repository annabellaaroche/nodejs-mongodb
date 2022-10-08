const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");
db.client = require("./client.model");
db.client = require("./providers.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
