const mongoose = require("mongoose");
const { Schema, Types } = mongoose;
const opts = { toJSON: { virtuals: true } };
const questionSchema = Schema(
  {
    question: {
      type: String,
      required: "Add question",
    },
    image: {
      type: String,
    },
    points: {
      type: Number,
      required: "Add points for this question",
    },
    negativePoints: {
      type: Number,
      required: "Add negative points",
    },
    options: [
      {
        type: Types.ObjectId,
        ref: "Option",
      },
    ],
  },
  opts
);
module.exports = mongoose.model("Question", questionSchema);
