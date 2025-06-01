const express = require('express');
const router = express.Router();
const {createPost,getPosts} = require('../controllers/postController')

router.post("/add",createPost)
router.get("/",getPosts)
module.exports = router