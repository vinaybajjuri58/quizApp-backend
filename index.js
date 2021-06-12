const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const { initialiseDbConnection } = require("./db/db.connect");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const { quizRouter } = require("./routes/quiz.routes");
const { questionRouter } = require("./routes/question.routes");

initialiseDbConnection();
app.use("/quiz", quizRouter);
app.use("/question", questionRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
