const express = require('express');
const router = express.Router();

// 로그인 API
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    // 실제로는 DB에서 사용자 정보 확인 후 JWT를 발급해야 합니다.
    if (email === 'test@example.com' && password === 'password') {
        return res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
    } else {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
