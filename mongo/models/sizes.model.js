module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          productID: Number,
          color: String,
          size: String,
          price: Number,
          salePrice: Number,
          numAvailable: Number
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Size = mongoose.model("size", schema);
    return Size;
  };