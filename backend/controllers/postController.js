const Post = require("../models/posts");
const path = require('path');
exports.createPost = async (req,res) => {
  try {
    const {title,status,itemName,date,location,contactInfo,postedBy} = req.body;
    const userId = req.user._id
    const image = req.file ? req.file.path : null
    console.log(image);
    console.log(path);
    
    
    
    const newPost =  new Post({title,status,itemName,date,location,contactInfo,postedBy,image:req.file.path,userId})

    await newPost.save()
    res.status(201).json({message: "Post added successfully",data:newPost})
  } catch (error) {
    res.status(500).json({message: "Post not added",error:error.message})
  }
}

exports.getPosts = async (req,res) => {
 try {
  const {status,itemName,limit} = req.query;

  let filter = {};

  if(status){
    filter.status = status;
  }

  if(itemName){
    filter.itemName = {$regex: itemName, $options: "i"};
  }

  const posts = await Post.find(filter).sort({date: -1})
  .limit(Number(limit));

  if(!posts || posts.length === 0){
    return res.status(404).json({message: "No matching posts found"});
  }

  res.status(200).json({data: posts})
 } catch (error) {
  res.status(500).json({error:error.message})
 } 
}

exports.getMyPosts = async(req,res)=>{
  try {
     const userId = req.user._id
  const posts = await Post.find({userId})
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

exports.deletePost = async (req,res) => {
  try {
    const {id} = req.params;
    const post = await Post.findByIdAndDelete({_id: id,userId:req.user._id})

    if(!post){
      return res.status(404).json({message: "Post not found"})
    }

    res.status(200).json({message: "Post delete successfully"})
  } catch (error) {
    res.status(500).json({message: "Something went wrong",error: error.message})
  }
}

exports.editPost = async (req,res) => {
  try {
    const {title,status,itemName,date,location,contactInfo,postedBy} = req.body
    const image = req.file ? req.file.path : null
    console.log("image:",image);
    console.log("path:",path);
    
    
    const {id} = req.params;
    const edit = await Post.findByIdAndUpdate(
      {_id: id,userId: req.user._id},
      {title,status,itemName,date,location,contactInfo,postedBy,image:req.file.path},
      {new: true,runValidators:true}
    );

    if(!edit){
      return res.status(404).json({error: "Post not found"})
    }

    res.status(200).json({message: "Post update successfully",edit})
  } catch (error) {
    res.status(500).json({error: error.message})
  }
}