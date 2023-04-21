const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;
const db = require("./mongo/models")
app.use(cors());
app.use(express.json());

db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=> {
    console.log('Connected to database');
}).catch(err => {
    console.log("Unable to connect to the database");
    process.exit();
});

// Testing route
app.get("/", (req, res) => {
    res.json({ message: "The server is up and running." });
  });

require("./mongo/routes/product.routes")(app);
require("./mongo/routes/review.routes")(app);
require("./mongo/routes/question.routes")(app);
require("./mongo/routes/size.routes")(app);

app.listen(port, function () {
    console.log(`Server is listening on port ${port}.`);
  });