// load modules
var transdown = require('./transdown.js');
var readline = require('readline');
var Handlebars = require('handlebars');
require('./template-node.js');


var processMarkdown = function (text) {
    "use strict";
    var output;
    
    output = Handlebars.templates.transcriptTemplate(
        transdown.transdownify(text)
    );
    return (output);
};

// Reading from stdin

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function () {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(
            processMarkdown(chunk)
        );
    }
});

process.stdin.on('end', function () {
    process.stdout.write('end');
});