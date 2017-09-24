const express = require('express');
const request = require('request');
const router = express.Router()

router.get('/', (req, res) => {

  let url = 'http://localhost:3000/endpoint';

  //get
  request(url, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  });

  res.send('Sent Get')
});


router.get('/form', (req, res) => {

  let url = 'http://localhost:3000/endpoint/form';

  //post form data
  let formData = {
    'message': 'hi there'
  };
  request.post(
    {
      url: url,
      form: formData
    },
    function(error, response, body){
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
    }
  );

  res.send('Sent Form')
});


router.get('/json', (req, res) => {

  let url = 'http://localhost:3000/endpoint/json';

  //post json
  let jsonData = {
    'message': 'hi there'
  };
  request.post(
    {
      url: url,
      body: jsonData,
      json: true
    },
    function(error, response, body){
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
      console.log('body:', body);
    }
  );

  res.send('Sent JSON')
});

module.exports = router
