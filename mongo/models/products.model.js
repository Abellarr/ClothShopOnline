module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          imageLink: String,
          productLink: String,
          style: String,
          productName: String,
          rating: Number,
          numRatings: Number,
          price: Number
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Product = mongoose.model("product", schema);
    return Product;
  };