const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');


let urlencodedParser = bodyParser.urlencoded({ extended: true })

router.get('/', (req, res) => {

    let bmSrc = fs.readFileSync('misc/bookmarklet.js','utf8');

    bmSrc = bmSrc.replace(/\n/,'')
    let bm = `javascript:${bmSrc}`;
    res.send(bm);
});

router.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.end('[----] RECEIVED');

    fs.open('linknotes.md', 'a', (err, fd) => {
      if (err) throw err;

      let txt = `- [${req.body.title}](${req.body.url})\n`;
      fs.write(fd, txt, (err) => {

      });

    });
});



module.exports = router
