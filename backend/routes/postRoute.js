const express = require('express');
const router = express.Router();
const {createPost,getPosts} = require('../controllers/postController')
const upload = require('../middlewares/imgUpload')

router.post("/add",upload.single('image'),createPost)
router.get("/",getPosts)
module.exports = router