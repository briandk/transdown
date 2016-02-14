// To compile the handlebars template for this function:
// handlebars transcriptTemplate.handlebars -c ../bower_components/handlebars/handlebars.js > javascripts/template-node.js

// load modules
var transdown = require('./transdown.js');
var readline = require('readline');
var Handlebars = require('../bower_components/handlebars/handlebars');
require('./template-node.js');


var processInputFromInqscribe = function (text, pattern) {
    "use strict";
    text = text.replace(pattern, "");
    text = text.replace(/\\r/g, "\n");
    text = text.replace(/\\e/g, "="); // Inqscribe handles equals signs weirdly
    text = transdown.transdownify(text);
    text = Handlebars.templates.transcriptTemplate(text);
    return (text);
};

// Reading from stdin

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.on('line', function (line) {
   var inqscribeTranscriptDataPattern = /^text=/;

   if (inqscribeTranscriptDataPattern.test(line) === true) {
       console.log(
           processInputFromInqscribe(
               line,
               inqscribeTranscriptDataPattern
           )
       );
   }
});
