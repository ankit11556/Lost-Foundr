const Post = require("../models/posts");

exports.createPost = async (req,res) => {
  try {
    const {title,status,itemName,date,location,contactInfo,postedBy} = req.body;
    
    const newPost =  new Post({title,status,itemName,date,location,contactInfo,postedBy})
    
    await newPost.save()
    res.status(201).json({message: "Post added successfully",data:newPost})
  } catch (error) {
    res.status(500).json({message: "Post not added",error:error.message})
  }
}