const db = require("../models");
const Product = db.products;

// Create and Save a new Products
exports.create = (req, res) => {
    const product = new Product({
        imageLink: req.body.imageLink,
        productLink: req.body.productLink,
        style: req.body.style,
        productName: req.body.productName,
        rating: req.body.rating,
        numRatings: req.body.numRatings,
        price: req.body.price
      });
    
    product.save(product)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({ message: err.message || "Internal Error" })
    })
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
  Product.find()
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

  Product.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Product with id=${id}.`
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
  Product.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Products were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Internal Error."
      });
    });
};
