const loremIpsum = require('lorem-ipsum');
const fs = require('fs');


exports.makeIpsum = function (chapters = 8) {
  let output = '';

  for(let i = 1; i <= chapters; i++) {
    output += `Chapter ${i}\n`;
    let sMax = 7;
    let sMin = 2;
    let subSections = Math.round( Math.random() * (sMax - sMin) + sMin );

    for(let j = 1; j <= subSections; j++) {
      output += `Section ${j}\n`;
      let pMax = 50;
      let pMin = 20;
      let amt = Math.round( Math.random() * (pMax - pMin) + pMin );
      liText = loremIpsum({
        count: amt,
        units: 'paragraphs',
        format: 'plain'
      });
      output += liText + '\n';
    }
  }


  // fs.writeFileSync('content.txt',output);
  return output;
}
