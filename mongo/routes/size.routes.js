module.exports = app => {
    const sizes = require("../controllers/size.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Review
    router.post("/", sizes.create);
  
    // Retrieve all Reviews
    router.get("/", sizes.findAll);
  
    // Retrieve a single Review with id
    router.get("/product/1/color/:color", sizes.findOne);
  
    // Update a Review with id
    router.patch("/:id", sizes.update);
  
    // Delete a Review with id
    router.delete("/:id", sizes.delete);
  
    // Delete all Reviews
    router.delete("/", sizes.deleteAll);
  
    app.use('/api/sizes', router);
  };