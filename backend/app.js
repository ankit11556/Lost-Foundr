const express = require('express');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
require('dotenv').config()

const connectDB = require('./config/db')

app.use(helmet())
app.use(morgan('dev'))
app.use(compression())

if(!process.env.PORT || !process.env.CLIENT_URL || !process.env.MONGO_URI){
  throw new Error("Please define all required environment variables");
}

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))

app.use('/uploads', express.static('uploads'));

const postRoute = require('./routes/postRoute')
const authRoute = require('./routes/authRoutes')

app.use("/api/post",postRoute)
app.use("/api/auth",authRoute)

app.use((err,req,res,next)=>{
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  })
})

const PORT = process.env.PORT;
connectDB().then(()=>{
app.listen(PORT,()=>{
  console.log(`server is running at http://localhost:${PORT}`);
})
})