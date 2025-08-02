const express = require('express');
const router = express.Router();
const {createPost,getPosts,getMyPosts,deletePost,editPost} = require('../controllers/postController')
const upload = require('../middlewares/imgUpload')
const {protectRoutes} = require('../middlewares/authMiddleware')

router.post("/add",protectRoutes,upload.single('image'),createPost)
router.get("/",getPosts)
router.get("/my-posts",protectRoutes,getMyPosts)
router.delete("/my-posts/:id",protectRoutes,deletePost)
router.put("/my-posts/:id",protectRoutes,upload.single('image'),editPost)
module.exports = router