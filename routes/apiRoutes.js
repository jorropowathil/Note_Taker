const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });


  module.exports = router;