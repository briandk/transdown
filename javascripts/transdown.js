var transdown = {
    transdownify : function () {
        "use strict";
        var transcript = transdown.parseBlocks($(this).val()),
            html = "",
            output;
        output = transcript.episodes.map(
            function (x) {
                var output;
                output = x.turns.map(
                    transdown.processLinks
                );
                return (output);
            }
        );
        html = Handlebars.templates.transcriptTemplate(transcript);
        $('#live-preview').html(html);
        return (output);
    },
    
    parseBlock : function (block) {
        "use strict";
        var conversationalTurn = /\s*\[(\d\d(?::\d\d)+(?:[;.]\d\d){0,1})\]\s+([^:]+):\s+(.*)/,
            episodeTitle = /^\s*#{1,6}\s*([^\s].*)/,
            referenceLink = /^\[([^\]])*\]:\s(.*)/,
            episode = {},
            rawTurnComponents = [],
            turn = {},
            references = [],
            key = "",
            value = "";
        
        // There are several different kinds of blocks
        //   - A block with references ([1]: something.html)
        //   - An episode title
        //   - A conversational turn
        //
        // There are also several different kinds of patterns
        //   - "### something", which is an episode title
        //   - "[1]: something", which is a reference
        //   - "[03:45] Brian: something", which is a conversational turn WITH timestamp
        //   - "Brian: Something", which is a conversational turn WITHOUT timestamp
        //   - "[03:45] Something", which is a conversational turn WITHOUT speaker
        //
        // It's worth thinking about the logical cascade of pattern matching
        // 
        // If (the first character is "#")
        //   - It's definitely an episode title
        //
        // If (the pattern is "[~]: something
        //   - It's definitely a reference definition
        //
        // Otherwise, try parsing it as a turn
        //
        // TO Try parsing it as a turn:
        //   If (it starts with "[03:45]" && there IS speaker name) 
        //      Parse it as a FULL turn, including timestamp and speaker
        //   Else If (it starts with "[03:45]" && there's NO speaker name)
        //      Parse it as a turn WITHOUT speaker
        //   Else
        //      Parse it as a turn WITHOUT a timestamp
        //
        
        
        
        
        // if it's an episode title, make a new episode
        if (episodeTitle.test(block) === true) {
            episode.title = episodeTitle.exec(block)[1];
            episode.turns = [];
            this.episodes.push(episode);
        
        // if it's a conversational turn, make a new turn and 
        // add it to the new episode
        } else if (conversationalTurn.test(block) === true) {
            rawTurnComponents = conversationalTurn.exec(block);
            turn = {
                timestamp: rawTurnComponents[1],
                speakerName: rawTurnComponents[2],
                speech: rawTurnComponents[3],
                accompanyingMedia: ""
            };
            this.episodes[this.episodes.length - 1].turns.push(turn);
            
        } else if (referenceLink.test(block) === true) {
            references = block.split("\n");
            references.map(
                function (ref) {
                    var reference = [],
                        key = "",
                        value = "";
                    
                    if (referenceLink.test(ref) === true) {
                        reference = referenceLink.exec(ref);
                        key = reference[1];
                        value = reference[2];
                        transdown.referencesDictionary[key] = value;
                    }
                }
            );
        }
    },
   
    parseBlocks : function (text) {
        "use strict";
        var blockSeparator = /\n{2,}/,
            blocks = text.split(blockSeparator),
            transcript = {
                episodes: []
            };
        
        blocks.map(transdown.parseBlock, transcript);
        return (transcript);
        /*
        
        To parseBlocks:
           + separate the text into blocks
           + Create a new transcript object
           + process each block
                
        To process a block (by handing in a transcript object):
            If (it's an episode title):
                Create a new episode with that as the title
                Append the episode to the end of the episodes array
            Else If (it's a turn):
                Create a new conversationalTurn object
                Get the last episode
                Append the turn to the array of turns in the last episode
        
        See also: https://gist.github.com/briandk/e561fc59e81eaebd2adc          
        
        */
        
    },
    
    referencesDictionary : {},
    
    processLinks : function (turn) {
        var referenceLinkPattern = /(!\[[^\]]*\])\[([^\]])*\]/,
            inlineLinkPattern = /(!\[[^\]]*\])\[([^\]])*\]/,
            key = "",
            speech = turn.speech;
        
        turn.accompanyingMedia = "";
        
        if (referenceLinkPattern.test(speech) === true) {
            key = referenceLinkPattern.exec(speech)[2];
            turn.accompanyingMedia = transdown.referencesDictionary[key];
        } else if (inlineLinkPattern.test(speech) === true) {
            turn.accompanyingMedia = inlineLinkPattern.exec(speech)[2];
        }
        return (turn);

    }
};

var text = $('#text-to-transdownify');
text.each(transdown.transdownify);
text.first().keyup(transdown.transdownify);
