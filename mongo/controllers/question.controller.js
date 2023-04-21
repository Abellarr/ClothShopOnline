const db = require("../models");
const Question = db.questions;

// Create and Save a new Products
exports.create = (req, res) => {
    const question = new Question({
        userNameQ: req.body.userNameQ,
        isVerified: req.body.isVerified,
        dateQuestion: req.body.dateQuestion,
        question: req.body.question,
        numAnswers: req.body.numAnswers,
        userNameA: req.body.userNameA,
        dateAnswer: req.body.dateAnswer,
        answer: req.body.answer,
        numThumbsUp: req.body.numThumbsUp,
        numThumbsDown: req.body.numThumbsDown,
      });
    
    question.save(question)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({ message: err.message || "Internal Error" })
    })
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Question.find()
  .then(data => {
    res.send(data)
  }).catch(err=>{
    res.status(500).send({ message: err.message || "Internal Error" })
  })
};

// Find a single Products with an id
exports.findOne = (req, res) => {
  
};

// Update a Products by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Products with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Question.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Question with id=${id}.`
        });
      } else {
        res.send({
          message: "Deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete " + id
      });
    });
};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {
    Question.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Questions were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Internal Error."
      });
    });
};
