const Option = require("../models/Option.model");
const Question = require("../models/Question.model");
const mongoose = require("mongoose");
const addOption = async (req, res) => {
  const { questionId } = req.params;
  try {
    const currentQuestion = await Question.findById(questionId);
    const newOption = new Option(req.body);
    const session = await mongoose.startSession();
    await session.startTransaction();
    const savedoption = await newOption.save();
    currentQuestion.options.push(savedoption.id);
    await currentQuestion.save();
    res.status(201).json({
      success: true,
      message: "Added option to the question",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in adding option",
    });
  }
};
module.exports = {
  addOption,
};
