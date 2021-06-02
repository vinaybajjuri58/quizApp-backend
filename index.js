const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
