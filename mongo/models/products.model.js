module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          imagelink: String,
          productlink: String,
          style: String,
          productname: String,
          rating: Number,
          numratings: Number,
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