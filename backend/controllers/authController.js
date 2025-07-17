const User = require("../models/user");
const generateToken = require('../utils/generateToken')    
const generateCookie = require('../utils/generateCookies');
const jwt = require("jsonwebtoken");

// user signup
exports.registerUser = async (req,res) => {
  try {
    const {name,email,password} = req.body;

    const existUser = await User.findOne({email});
    if (existUser) {
      return res.status(400).json({message: 'Email already registered'})
    }

    const newUser = new User({name, email, password});
    await newUser.save()

    res.status(201).json({message: "User registered successfully",
      user:{
        _id: newUser._id,
        email: newUser.email
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message})
  }
}

//user login
exports.loginUser = async (req,res) => {
  try {
    const {email,password} = req.body

    const user = await User.findOne({email}).select('+password');
    if (!user) {
      return res.status(401).json({message: 'Invalid credentials'})
    }

    const isMatch = await user.isValidPassword(password)
    if (!isMatch) {
      return res.status(401).json({message: 'Invalid credentials'})
    }

    const {accessToken,refreshToken}  =  generateToken(user._id)   
    
    generateCookie(res,accessToken,refreshToken)

    res.status(200).json({message: "Login successfull",
      user:{
        email: user.email,
        userId: user._id
      }
    })
  } catch (error) {
    res.status(500).json({message: "Login failed", error: error.message})
  }
}

//logout
exports.logoutUser =  (req,res) => {
  res.clearCookie("access_token",{
    httpOnly: true,
    secure: true,
    sameSite: "Strict"
  });

  res.clearCookie("refresh_token",{
    httpOnly: true,
    secure: true,
    sameSite: "Strict"
  })
  return res.status(200).json({message: "Logged out successfully"})
}

//refresh access token
exports.refreshAccessToken = (req,res) =>{
  const refreshToken = req.cookies.refresh_token;  
  if(!refreshToken){
    return res.status(401).json({message: "No refresh token"})
  }

  jwt.verify(refreshToken,process.env.REFRESH_TOKEN_KEY,(err,decoded)=>{
    if(err) return res.status(403).json({message: "Invalid refresh token"})
      
      const {accessToken,refreshToken:newRefreshToken} = generateToken(decoded.userId)
      generateCookie(res,accessToken,newRefreshToken)

      res.status(200).json({message: "Access token refreshed"})
  })
}