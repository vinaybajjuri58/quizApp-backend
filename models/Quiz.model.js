const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const opts = { toJSON: { virtuals: true } };
const quizSchema = Schema(
  {
    description: {
      type: String,
      required: "Add description to the quiz",
    },
    image: {
      type: String,
    },
    totalQuestions: {
      type: Number,
      required: "Add total number of questions",
    },
    questions: [
      {
        type: Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  opts
);
const Quiz = mongoose.model("Quiz", quizSchema);
