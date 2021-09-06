const router = require('express').Router();
const fs = require('fs');
const path = require('path');
// const uuidv1 = require('uuid/v1');

router.get('/notes', (req, res) => {
    const info = fs.readFileSync(path.join(__dirname, "../db/db.json"));
    res.json(JSON.parse(info));
});

// router.post('/notes', (req, res) => {
//     req.body.id = uuid.v4();

// })


  module.exports = router;