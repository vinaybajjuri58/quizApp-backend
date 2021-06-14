const express = require("express");
const quizRouter = express.Router();
const { getQuizData, addQuiz } = require("../controllers/quiz.controllers");

const { addQuestion } = require("../controllers/question.controllers");
quizRouter.route("/").get(getQuizData).post(addQuiz);
quizRouter.route("/:quizId/questions").post(addQuestion);
module.exports = {
  quizRouter,
};
