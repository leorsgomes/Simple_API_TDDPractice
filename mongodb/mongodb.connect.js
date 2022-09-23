const mongoose = require("mongoose");
require('dotenv').config()

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.vhg6tl9.mongodb.net/todo-tdd`,
      { useNewUrlParser: true }
    );
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };
