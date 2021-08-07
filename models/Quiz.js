const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    views: {type: Number, default: 0, required: true},
    password: { type: String, required: true },
    questions: {
      type: [[]],
      required: true,
    },
    
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
);

QuizSchema.index({title: 'text', author: 'text', _id: 'text'}, {weights:{title: 5, author: 3, _id: 1 }});

module.exports = mongoose.model("Quizes", QuizSchema);
