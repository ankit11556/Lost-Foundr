const express = require('express');
const router = express.Router();
const {registerUser,loginUser} = require('../controllers/authController')
const {protectRoutes} = require('../middlewares/authMiddleware')

router.post("/signup",registerUser);
router.post("/login",loginUser)
router.get("check-auth",protectRoutes,(req,res)=>{
  res.json({user: req.user})
})
module.exports = router