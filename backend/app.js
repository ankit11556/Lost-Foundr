const express = require('express');
const app = express()

require('dotenv').config()

const connectDB = require('./config/db')

app.use(express.json())

const postRoute = require('./routes/postRoute')
app.use("/api/post",postRoute)

const PORT = process.env.PORT;
connectDB().then(()=>{
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})
})