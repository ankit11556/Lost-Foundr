const jwt = require('jsonwebtoken')

const generateEmailVerificationToken = (userId)=>{
  try {
    jwt.sign(
      {userId},
      process.env.JWT_EMAIL_SECRET_KEY,
      {expiresIn: '10m'}
    )
  } catch (error) {
    console.log("Error generating email verification token", error);
    throw new Error("Token generation failed");
  }
}

module.exports = generateEmailVerificationToken