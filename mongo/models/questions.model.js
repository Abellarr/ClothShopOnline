module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
          userNameQ: String,
          isVerified: Boolean,
          dateQuestion: String,
          question: String,
          numAnswers: Number,
          userNameA: String,
          dateAnswer: String,
          answer: String,
          numThumbsUp: Number,
          numThumbsDown: Number
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