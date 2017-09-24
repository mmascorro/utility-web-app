const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get('/', (req, res) => {
    res.send('[GET] RECEIVED');
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
