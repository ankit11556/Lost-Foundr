const express = require('express');
const router = express.Router();
const {registerUser,loginUser} = require('../controllers/authController')

router.post("/signup",registerUser);
router.get("/login",loginUser)
module.exports = router