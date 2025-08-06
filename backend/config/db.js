const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    mongoose.set('strictQuery',true)
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb connected successfully");  
  } catch (error) {
    console.log("MongoDb not connected",error);
    process.exit(1)
  }
}

module.exports = connectDB;