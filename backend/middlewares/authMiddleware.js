const jwt = require('jsonwebtoken');
const User = require('../models/user')

const protectRoutes =async (req,res,next) =>{
  const token = req.cookies.access_token ||
  (req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1]
  );

  //check json web token exists & is verified
  if(!token){
    return res.status(401).json({message: "Not authorized, token missing"})
  }

  let decoded;
  try {
    decoded = jwt.verify(token,process.env.ACCESS_TOKEN_KEY);
  } catch (error) {
    if(error.name === "TokenExpiredError"){
      return res.status(401).json({message: "Session expired. Please login again"})
    };
    return res.status(401).json({message: "Invalid token. Please login."})
  }

  const user = await User.findById(decoded.userId).select('-password');
  if(!user){
    return res.status(401).json({message: "User not found. Please sign in."})
  }
  req.user = user



  next()
}

module.exports = {protectRoutes}
