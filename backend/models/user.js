const mongoose = require('mongoose');
const bcrypt = require('bcrypt') 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false
  }
},{timestamps: true})

userSchema.pre('save', async function(next){
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next()
  } catch (error) {
    next(error)
  }
})

userSchema.methods.isValidPassword = async function(password){
  try {
    return await bcrypt.compare(password, this.password)
  } catch (error) {
    throw new Error("Password comparision failed");
    
  }
}

const User = mongoose.model('User',userSchema)

module.exports = User