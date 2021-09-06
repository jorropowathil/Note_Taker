const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuid } = require("uuid");

router.get('/notes', (req, res) => {
    const info = fs.JSON.parse(readFileSync(path.join(__dirname, "../db/db.json")));
    res.json(info);
});

router.post('/notes', (req, res) => {
    // setting info read path to db
    const info = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
    console.log(info);
    // setting note item to randomly generated id
    req.body.id = uuid();
    // Pushing info variable into the body of object 
    info.push(req.body);
    console.log(req.body);
    // writing to the db.json file and stringify the
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), 
    JSON.stringify(info));
    console.log("stringified info here ---->", info);
    // Return the data object
    res.json(info);
})

router.delete('/notes', (req, res) => {

})


module.exports = router;