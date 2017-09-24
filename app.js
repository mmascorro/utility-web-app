const express = require('express');

const ipsum = require('./lib/ipsum');

const endpointRouter = require('./routers/endpoint');
const sendRouter = require('./routers/send');

const app = express()
app.set('view engine', 'pug')

//routes
app.get('/', (req,res) => {
  res.render('index');
});

app.use('/endpoint', endpointRouter);

app.use('/send', sendRouter);

app.get('/ipsum', (req,res) => {
  let result = ipsum.makeIpsum(10);
  res.set('Content-Type', 'text/plain');
  res.send(result)
});

//start server
app.listen(3000, () => {
  console.log(' started')
});
