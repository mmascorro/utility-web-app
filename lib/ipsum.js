
const LoremIpsum = require('lorem-ipsum').LoremIpsum;

exports.makeIpsum = function (chapters = 8) {
  let output = '';

  let lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

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


      let liText = lorem.generateParagraphs(amt);
      output += liText + '\n';
    }
  }


  return output;
}
