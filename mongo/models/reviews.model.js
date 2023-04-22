module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          username: String,
          isverified: Boolean,
          date: String,
          rating: Number,
          delivery: String,
          decoration: String,
          overallrating: Number,
          fit: String,
          qualityrating: Number,
          title: String,
          notes: String,
          numthumbsup: Number,
          numthumbsdown: Number
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Review = mongoose.model("review", schema);
    return Review;
  };