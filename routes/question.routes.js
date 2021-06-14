const express = require("express");
const questionRouter = express.Router();
const { addOption } = require("../controllers/option.controllers");
questionRouter.route("/:questionId/options").post(addOption);
module.exports = {
  questionRouter,
};
