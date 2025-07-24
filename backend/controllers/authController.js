const User = require("../models/user");
const generateToken = require('../utils/generateToken')    
const generateCookie = require('../utils/generateCookies');
const jwt = require("jsonwebtoken");
const generateEmailVerificationToken = require('../utils/generateEmailToken')
const sendEmail = require('../services/emailService')
const {oauth2client} = require('../utils/googleConfig')
const axios = require('axios')
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

    const emailToken = generateEmailVerificationToken(newUser._id)
    // console.log("email token",emailToken);
    const verifyLink = `${process.env.CLIENT_URL}/verify-email?token=${emailToken}`

    // console.log("verify link",verifyLink);
    await sendEmail(
      newUser.email,
      "Verify your email",
      `<h3>Click to verify your email:</h3>
      <a href="${verifyLink}" target="_blank" style="padding:10px 15px;background:#4CAF50;color:white;text-decoration:none;border-radius:5px;display:inline-block;">Click Here to Verify</a>`
    )

    res.status(201).json({message: "Signup successful. Please verify your email to activate your account",
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
      return res.status(401).json({message: 'User not found. Please sign up first.'})
    }

    if (!user.isVerified) {
      return res.status(401).json({message: "Please first verify your email"})
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

      res.status(200).json({message: "Access token refreshed",accessToken})
  })
}

//verify email
exports.verifyEmail = async (req,res) => {
  const {token} = req.body;

  if(!token){
    return res.status(400).json({message: "invalid token"})
  }

  try {
    const decoded = jwt.verify(token,process.env.JWT_EMAIL_SECRET_KEY);
    const user = await User.findById(decoded.userId)

    if(!user){
      return res.status(404).json({message: "user not found"})
    }

    if(user.isVerified){
      return res.status(400).json({message: "Email already verified"})
    }

    user.isVerified = true;
    await user.save();

    return res.status(200).json({message: "Email verified successfully"})
  } catch (error) {
    return res.status(400).json({message: "Token expiried or invalid"})
  }
}

//google login
exports.googleLogin = async(req,res) =>{
  try {
    const {code} = req.query;
    const {tokens} = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(process.env.GOOGLE_AUTH_URI,{
      headers:{
        Authorization: `Bearer ${tokens.access_token}`
      }
    });

    const {email, name} = userRes.data;

    let user = await User.findOne({email})

    if (!user) {
      user = new User({name,email,isVerified: true});
      await user.save()
    }

    const {accessToken,refreshToken}  =  generateToken(user._id)   
    generateCookie(res,accessToken,refreshToken)

    return res.status(200).json({
      message: "Login successfull",
      user:{
        userId: user._id,
        email: user.email,
        name: user.name,
        authType: 'google'
      }
    })
  } catch (error) {
    console.error("Google Login Error:",error)
    return  res.status(500).json({message: "Google login failed"})
  }
}