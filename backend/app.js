const express = require('express');
const app = express()

require('dotenv').config()

const connectDB = require('./config/db')

app.get("/",(req,res,next)=>{
  res.send("hi")
  
})

const PORT = process.env.PORT;
connectDB().then(()=>{
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})
})