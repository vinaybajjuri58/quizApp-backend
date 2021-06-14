const Quiz = require("../models/Quiz.model");
const getQuizData = async (req, res) => {
  try {
    const Quizdata = await Quiz.find({}).populate({
      path: "questions",
      populate: {
        path: "options",
      },
    });
    res.status(200).json({
      success: true,
      Quizdata,
    });
  } catch (err) {
    console.log(err);
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
  addQuiz,
};
