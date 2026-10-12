const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let count = 0;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// preview bridge 지원
app.get('/__preview-bridge.js', (req, res) => {
  res.type('application/javascript').send('/* preview bridge */');
});

// GET /api/count: 호출 시 카운트를 1 증가시키고 반환
app.get('/api/count', (req, res) => {
  count += 1;
  res.json({ count });
});

// GET /api/count/current: 카운트 증가 없이 현재 값만 반환
app.get('/api/count/current', (req, res) => {
  res.json({ count });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
