module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          usernameq: String,
          isverified: Boolean,
          datequestion: String,
          question: String,
          numanswers: Number,
          usernamea: String,
          dateanswer: String,
          answer: String,
          numthumbsup: Number,
          numthumbsdown: Number
        }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    
    const Question = mongoose.model("question", schema);
    return Question;
  };