const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const { initialiseDbConnection } = require("./db/db.connect");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 5000;
initialiseDbConnection();

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
