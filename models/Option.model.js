const mongoose = require("mongoose");
const { Schema } = mongoose;
const opts = { toJSON: { virtuals: true } };
const optionSchema = Schema(
  {
    text: {
      type: String,
      required: "Add text to the option",
    },
    isRight: {
      type: Boolean,
      required: "Add whether is right or not ",
    },
    isSelected: {
      type: Boolean,
      required: "Add whether selected or not",
    },
  },
  opts
);

module.exports = mongoose.model("Option", optionSchema);
