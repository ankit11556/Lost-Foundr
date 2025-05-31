const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected successfully");  
  } catch (error) {
    console.log("MongoDb not connected",error);
  }
}

module.exports = connectDB;