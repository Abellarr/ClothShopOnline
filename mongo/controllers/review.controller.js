const db = require("../models");
const Review = db.reviews;

// Create and Save a new Products
exports.create = (req, res) => {
    const review = new Review({
        username: req.body.username,
        isverified: req.body.isverified,
        date: req.body.date,
        rating: req.body.rating,
        delivery: req.body.delivery,
        decoration: req.body.decoration,
        overallrating: req.body.overallrating,
        fit: req.body.fit,
        qualityrating: req.body.qualityrating,
        title: req.body.title,
        notes: req.body.notes,
        numthumbsup: req.body.numthumbsup,
        numthumbsdown: req.body.numthumbsdown,
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
