// load modules
var Handlebars = require('handlebars');
var fs = require('fs');
var transdown = require('./transdown.js');
 

// transdown stuff
var template = Handlebars.compile(
    fs.readFileSync(
        '../transcriptTemplate.handlebars', 
        encoding='utf8'
    )
)

var text = '[33:33] Rebecca: and then my thinking at least, is you should be able to, um, say that "star p of i" /mmhmm/ equals, uh, the title, and then you just do i++, so then it’ll {{move to the next one}} ![makes looping gesture with left hand][1] /OK/';

var output = template(
    transdown.transdownify(text)
);
 
console.log(output);