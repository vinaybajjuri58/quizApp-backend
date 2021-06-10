const mongoose = require("mongoose");
const initialiseDbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Successfully connected with DB");
  } catch (err) {
    console.log("Error in establishing db connection");
  }
};
module.exports = {
  initialiseDbConnection,
};
