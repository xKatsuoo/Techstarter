const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('GET /api/message ', req.ip);
    res.json({ message: 'Hallo von der API!' });
});

router.post('/update', (req, res) => {
    console.log('PUT /api/message/update ', req.ip);
});

module.exports = router