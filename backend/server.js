const express = require('express');
const path = require('path');
const app = express();

// 'frontend/dist' 폴더를 정적 파일로 제공
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// 기본 라우트 (앱이 로드될 때)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/src/App.svelte'));  // 빌드된 index.html 제공
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});