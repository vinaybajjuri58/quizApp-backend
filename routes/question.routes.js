const express = require("express");
const questionRouter = express.Router();

questionRouter.route("/").post(addQuestion);
module.exports = {
  questionRouter,
};
