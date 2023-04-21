const db = require("../models");
const Size = db.sizes;

// Create and Save a new Products
exports.create = (req, res) => {
    const size = new Size({
        productID: req.body.productID,
        color: req.body.color,
        size: req.body.size,
        price: req.body.price,
        salePrice: req.body.salePrice,
        numAvailable: req.body.numAvailable
      });
    
    size.save(size)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({ message: err.message || "Internal Error" })
    })
};

// Retrieve all Products from the database.
exports.findAll = (req, res) => {
    Size.find()
    .then(data => {
        res.send(data)
    }).catch(err=>{
        res.status(500).send({ message: err.message || "Internal Error" })
    })
};

// Find a single Products with an id
exports.findOne = (req, res) => {
    const color = req.params.color

    Size.find({ color: color })
    .then(data => {
        res.send(data)
    }).catch(err=>{
        res.status(500).send({ message: err.message || "Internal Error" })
    })
  
};

// Update a Products by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Products with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Size.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Size with id=${id}.`
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
    Size.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Sizes were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Internal Error."
      });
    });
};
