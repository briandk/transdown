// load modules
var transdown = require('./transdown.js');
var readline = require('readline');
var Handlebars = require('../bower_components/handlebars/handlebars.js');
require('./template-node.js');


var processInputFromInqscribe = function (text, pattern) {
    "use strict";
    text = text.replace(pattern, "");
    text = text.replace(/\\r/g, "\n");
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
