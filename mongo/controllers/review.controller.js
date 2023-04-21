const db = require("../models");
const Review = db.reviews;

// Create and Save a new Products
exports.create = (req, res) => {
    const review = new Review({
        userName: req.body.userName,
        isVerified: req.body.isVerified,
        date: req.body.date,
        rating: req.body.rating,
        delivery: req.body.delivery,
        decoration: req.body.decoration,
        overallRating: req.body.overallRating,
        fit: req.body.fit,
        qualityRating: req.body.qualityRating,
        title: req.body.title,
        notes: req.body.notes,
        numThumbsUp: req.body.numThumbsUp,
        numThumbsDown: req.body.numThumbsDown,
      });
    
    review.save(review)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({ message: err.message || "Internal Error" })
    })
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Review.find()
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

  Review.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Review with id=${id}.`
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
  Review.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Reviews were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Internal Error."
      });
    });
};
