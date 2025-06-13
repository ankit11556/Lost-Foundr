const express = require('express');
const app = express()
const cors = require('cors')
require('dotenv').config()

const connectDB = require('./config/db')
app.use('/uploads', express.static('uploads'));
app.use(express.json())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))

const postRoute = require('./routes/postRoute')
const authRoute = require('./routes/authRoutes')

app.use("/api/post",postRoute)
app.use("/api/auth",authRoute)

const PORT = process.env.PORT;
connectDB().then(()=>{
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})
})