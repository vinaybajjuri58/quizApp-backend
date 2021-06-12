const express = require("express");
const quizRouter = express.Router();
const { getQuizData, addQuiz } = require("../controllers/quiz.controllers");
quizRouter.route("/").get(getQuizData).post(addQuiz);
module.exports = {
  quizRouter,
};
