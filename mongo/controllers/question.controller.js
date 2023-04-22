const db = require("../models");
const Question = db.questions;

// Create and Save a new Products
exports.create = (req, res) => {
    const question = new Question({
        usernameq: req.body.usernameq,
        isverified: req.body.isverified,
        datequestion: req.body.datequestion,
        question: req.body.question,
        numanswers: req.body.numanswers,
        usernamea: req.body.usernamea,
        dateanswer: req.body.dateanswer,
        answer: req.body.answer,
        numthumbsup: req.body.numthumbsup,
        numthumbsdown: req.body.numthumbsdown,
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
