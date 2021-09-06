const router = require('express').Router();
const fs = require('fs');
const path = require('path');
// const uuidv1 = require('uuid/v1');

router.get('/notes', (req, res) => {
    const info = fs.JSON.parse(readFileSync(path.join(__dirname, "../db/db.json")));
    res.json(info);
});

router.post('/notes', (req, res) => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
    // req.body.id = uuid.v4();
    // console.log(req.body.id);
})

router.delete('/notes', (req, res) => {

})


  module.exports = router;