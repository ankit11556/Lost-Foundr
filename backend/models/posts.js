const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  title: {
   type: String,
   required: true
  },
  status: {
    type: String,
    enum:['Lost','Found'],
    required: true
  },
  itemName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  location:{
    type: String,
    required: true,
  },
  contactInfo: {
    type: String,
    required: true
  },
  postedBy: {
    type: String,
    required: true
  }

},{timestamps: true})

const Post = mongoose.model('Post',itemSchema)

module.exports = Post