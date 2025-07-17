const jwt = require('jsonwebtoken')

const generateToken = (userId)=>{
  try {
    const accessToken = jwt.sign(
      {userId},
      process.env.ACCESS_TOKEN_KEY,
      {expiresIn: "10s"}
    );

    const refreshToken = jwt.sign(
      {userId},
      process.env.REFRESH_TOKEN_KEY,
      {expiresIn: "7d"}
    );

   return {accessToken,refreshToken}
  } catch (error) {
     console.error("Error generating token:",error);
    throw new Error("Token generated failed")
  }
}

module.exports = generateToken