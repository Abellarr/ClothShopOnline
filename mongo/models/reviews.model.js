module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          userName: String,
          isVerified: Boolean,
          date: String,
          rating: Number,
          delivery: String,
          decoration: String,
          overallRating: Number,
          fit: String,
          qualityRating: Number,
          title: String,
          notes: String,
          numThumbsUp: Number,
          numThumbsDown: Number
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