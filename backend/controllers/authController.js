const User = require("../models/user");

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

    res.status(200).json({message: "Login successfull",
      user:{
        email: user.email
      }
    })
  } catch (error) {
    res.status(500).json({message: "Login failed", error: error.message})
  }
}