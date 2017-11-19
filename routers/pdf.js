const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: true })

//handle send pdf binary
router.post('/', bodyParser.raw({type:'pdf'}), (req,res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname,'../misc/thanks.pdf'))
});
//url encoded form data
router.post('/form', urlencodedParser, (req,res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname,'../misc/thanks.pdf'))
});
//xml
router.post('/xml', bodyParser.text({type: 'xml'}), (req,res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname,'../misc/thanks.pdf'))
});
//livecycle xdp
router.post('/xdp', bodyParser.text({type: 'xdp'}), (req,res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname,'../misc/thanks.pdf'))
});


module.exports = router
