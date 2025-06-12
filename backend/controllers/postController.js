const Post = require("../models/posts");
const path = require('path')
exports.createPost = async (req,res) => {
  try {
    const {title,status,itemName,date,location,contactInfo,postedBy} = req.body;

    const image = req.file ? req.file.path : null
    
    const newPost =  new Post({title,status,itemName,date,location,contactInfo,postedBy,image:req.file.path})

    await newPost.save()
    res.status(201).json({message: "Post added successfully",data:newPost})
  } catch (error) {
    res.status(500).json({message: "Post not added",error:error.message})
  }
}

exports.getPosts = async (req,res) => {
 try {
  const {status,itemName} = req.query;

  let filter = {};

  if(status){
    filter.status = status;
  }

  if(itemName){
    filter.itemName = {$regex: itemName, $options: "i"};
  }

  const posts = await Post.find(filter).sort({date: -1});

  if(!posts || posts.length === 0){
    res.status(404).json({message: "No matching posts found"});
  }

  res.status(200).json({data: posts})
 } catch (error) {
  res.status(500).json({error:error.message})
 } 
}