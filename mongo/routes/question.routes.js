module.exports = app => {
    const questions = require("../controllers/question.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Review
    router.post("/", questions.create);
  
    // Retrieve all Reviews
    router.get("/", questions.findAll);
  
    // Retrieve a single Review with id
    router.get("/:id", questions.findOne);
  
    // Update a Review with id
    router.patch("/:id", questions.update);
  
    // Delete a Review with id
    router.delete("/:id", questions.delete);
  
    // Delete all Reviews
    router.delete("/", questions.deleteAll);
  
    app.use('/api/questions', router);
  };