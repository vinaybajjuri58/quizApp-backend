const Quiz = require("../models/Quiz.model");
const getQuizData = async (req, res) => {
  try {
    const Quiz = await Quiz.find({});
    res.status({
      success: true,
      Quiz,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in getting quiz data",
    });
  }
};

const addQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz({ ...req.body, questions: [] });
    await newQuiz.save();
    res.status(201).json({
      success: true,
      message: "Added Quiz data",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in Added quiz",
    });
  }
};

module.exports = {
  getQuizData,
};
