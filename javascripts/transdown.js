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
        var speechWithTimestampAndSpeaker = /\s*\[(\d\d(?::\d\d)+(?:[;.]\d\d){0,1})\]\s+([^:]+):\s+(.*)/,
            speechWithSpeaker = /^\s*([^:]*):\s+(.*)/,
            speechWithTimestamp = /\s*\[(\d\d(?::\d\d)+(?:[;.]\d\d){0,1})\]\s+(.*)/,
            episodeTitle = /^\s*#{1,6}\s*([^\s].*)/,
            referenceLink = /^\[([^\]])*\]:\s(.*)/,
            episode = {},
            rawTurnComponents = [],
            turn = {},
            references = [],
            key = "",
            value = "";
        
        // if it's an episode title, make a new episode
        if (episodeTitle.test(block) === true) {
            episode.title = episodeTitle.exec(block)[1];
            episode.turns = [];
            this.episodes.push(episode);
        
        // if it's a conversational turn, make a new turn and 
        // add it to the new episode
        } else if (referenceLink.test(block) === true) {
            transdown.parseReferencesList(block, referenceLink);
        } else if (speechWithTimestampAndSpeaker.test(block) === true) {
            transdown.parseSpeechWithTimestampAndSpeaker(
                block,
                speechWithTimestampAndSpeaker,
                this
            );
        } else if (speechWithTimestamp.test(block) === true) {
            transdown.parseSpeechWithTimestamp(
                block,
                speechWithTimestamp,
                this
            );  
        } else if (speechWithSpeaker.test(block) === true) {
            transdown.parseSpeechWithSpeaker(
                block,
                speechWithSpeaker,
                this
            );
        }
//        } else {
//            console.log("fallthrough " + block);
//            turn = {
//                timestamp: "",
//                speaker: "",
//                speech: block,
//                accompanyingMedia: ""
//            };
//            transcript.episodes[transcript.episodes.length - 1].turns.push(turn);
//        }
    },
    
    parseSpeechWithTimestamp : function (block, pattern, transcript) {
        var rawTurnComponents = pattern.exec(block),
            turn = {
                timestamp: rawTurnComponents[1],
                speech: rawTurnComponents[2]
            };
        transcript.episodes[transcript.episodes.length - 1].turns.push(turn);
    },
    
    parseSpeechWithSpeaker : function (block, pattern, transcript) {
        var rawTurnComponents = pattern.exec(block),
            turn = {
                speakerName: rawTurnComponents[1],
                speech: rawTurnComponents[2]
            };
        transcript.episodes[transcript.episodes.length - 1].turns.push(turn);
    },
    
    parseSpeechWithTimestampAndSpeaker : function (block, pattern, transcript) {
        var rawTurnComponents = pattern.exec(block),
            turn = {
                timestamp: rawTurnComponents[1],
                speakerName: rawTurnComponents[2],
                speech: rawTurnComponents[3]
            };
        transcript.episodes[transcript.episodes.length - 1].turns.push(turn);
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
    
    parseReferencesList : function (block, referencePattern) {
        var references = block.split("\n");
        references.map(
            function (ref) {
                var reference = [],
                    key = "",
                    value = "";

                if (referencePattern.test(ref) === true) {
                    reference = referencePattern.exec(ref);
                    key = reference[1];
                    value = reference[2];
                    transdown.referencesDictionary[key] = value;
                }
            }
        );
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
