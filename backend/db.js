const mongoose = require('mongoose');
const DB = process.env.DATABASE;

const connectToMongo = async () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("MongoDB Connection Successfull");
    })
    .catch((error) => {
      console.log("No Connection", error);
    });
};

module.exports = connectToMongo;