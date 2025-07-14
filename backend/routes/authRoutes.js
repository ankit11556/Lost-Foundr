const express = require('express');
const router = express.Router();
const {registerUser,loginUser,logoutUser,refreshAccessToken} = require('../controllers/authController')
const {protectRoutes} = require('../middlewares/authMiddleware')

router.post("/signup",registerUser);
router.post("/login",loginUser)
router.get("/check-auth",protectRoutes,(req,res)=>{
  res.json({user: req.user})
})
router.get("/logout",logoutUser)
router.get("/refresh-token",refreshAccessToken)
module.exports = router