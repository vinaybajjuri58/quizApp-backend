const mongoose = require("mongoose");
const Quiz = require("../models/Quiz.model");
const Question = require("../models/Question.model");
const addQuestion = async (req, res) => {
  const { quizId } = req.params;
  try {
    const quizData = await Quiz.findById(quizId);
    const newQuestion = new Question({ ...req.body, options: [] });
    const session = await mongoose.startSession();
    session.startTransaction();
    const savedQuestion = await newQuestion.save({ session: session });
    quizData.questions.push(savedQuestion.id);
    quizData.totalQuestions += 1;
    await quizData.save({ session: session });
    await session.commitTransaction();
    res.status(201).json({
      success: true,
      message: "Added Question",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error in adding question",
    });
  }
};
module.exports = {
  addQuestion,
};
