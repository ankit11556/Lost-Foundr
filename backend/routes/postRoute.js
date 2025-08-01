const express = require('express');
const router = express.Router();
const {createPost,getPosts,getMyPosts,deletePost} = require('../controllers/postController')
const upload = require('../middlewares/imgUpload')
const {protectRoutes} = require('../middlewares/authMiddleware')

router.post("/add",protectRoutes,upload.single('image'),createPost)
router.get("/",getPosts)
router.get("/my-posts",protectRoutes,getMyPosts)
router.delete("/my-posts/:id",protectRoutes,deletePost)
module.exports = router