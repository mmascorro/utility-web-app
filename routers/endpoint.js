const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: true })
let textParser = bodyParser.text({ type: '*/*'})

router.get('/', (req, res) => {
    res.send('[GET] RECEIVED');
});

router.post('/post', textParser, (req, res) => {
    console.log(req.body)
    res.end('[POST] RECEIVED');
});

router.post('/form', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.end('[FORM] RECEIVED');
});

router.post('/json', jsonParser, (req, res) => {
    console.log(req.body)
    res.end('[JSON] RECEIVED');
});

module.exports = router
