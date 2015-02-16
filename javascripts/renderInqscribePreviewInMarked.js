// Directory variables
var pathToTemplate = '/Users/briandanielak/Dropbox/dev/transdown/transcriptTemplate.handlebars';

// load modules
var Handlebars = require('handlebars');
var fs = require('fs');
var transdown = require('./transdown.js');
var readline = require('readline');

// compile template
var template = Handlebars.compile(
    fs.readFileSync(
        pathToTemplate,
        encoding = 'utf8'
    )
);

var processInputFromInqscribe = function (text, pattern) {
    "use strict";
    text = text.replace(pattern, "");
    text = text.replace(/\\r/g, "\n");
    text = transdown.transdownify(text);
    text = template(text);
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