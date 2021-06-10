const express = require("express");
const quizRouter = express.Router();
quizRouter.route("/").get(getQuizData);
module.exports = {
  quizRouter,
};
