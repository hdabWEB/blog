// backend/routes/blog.js
const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// 블로그 글 목록 조회
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();  // DB에서 모든 블로그 글 조회
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 블로그 글 작성
router.post('/', async (req, res) => {
    const { title, content } = req.body;

    const newBlog = new Blog({
        title,
        content,
    });

    try {
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);  // 저장된 블로그 글 반환
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
