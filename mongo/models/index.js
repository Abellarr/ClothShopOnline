const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = "mongodb://localhost:27017/mydatabase";
db.products = require("./products.model.js")(mongoose);
db.reviews = require("./reviews.model.js")(mongoose);
db.questions = require("./questions.model.js")(mongoose);
db.sizes = require("./sizes.model.js")(mongoose);


module.exports = db;