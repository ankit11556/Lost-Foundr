const express = require('express');
const router = express.Router();
const {createPost,getPosts} = require('../controllers/postController')
const upload = require('../middlewares/imgUpload')
const {protectRoutes} = require('../middlewares/authMiddleware')

router.post("/add",protectRoutes,upload.single('image'),createPost)
router.get("/",getPosts)
module.exports = router