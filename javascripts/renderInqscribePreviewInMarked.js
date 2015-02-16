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

var processInputFromInqscribe = function (text) {
    "use strict";
    return (text);
};

// Reading from stdin

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    var inqscribeTranscriptDataPattern = /^text=(.*)/;
    
    if (inqscribeTranscriptDataPattern.test(line) === true) {
        processInputFromInqscribe(line);
        console.log("LINE " + line);
    }
});