var transdown = {
    transdownify : function () {
        "use strict";
        var transcript = transdown.parseBlocks($(this).val()),
            html = "",
            output;
        
        transcript.episodes.forEach(
            function (element, index) {
                element.turns.map(
                    transdown.processLinks,
                    element
                );
                element.columns =  transdown.getColumnNames(element);
                element.numberOfColumns = element.columns.length;
            },
            transcript
        );
        
        html = Handlebars.templates.transcriptTemplate(transcript);
        $('#live-preview').html(html);
        console.log(transcript);
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
            latestEpisode = this.episodes[this.episodes.length - 1],
            value = "";
        
        // if it's an episode title, make a new episode
        if (episodeTitle.test(block) === true) {
            episode.title = episodeTitle.exec(block)[1];
            episode.columns = [];
            episode.turns = [];
            this.episodes.push(episode);
        
        // otherwise, if it's a reference list
        } else if (referenceLink.test(block) === true) {
            transdown.parseReferencesList(block, referenceLink);
            this.episodehasAccompanyingMedia = true;
            
        // otherwise, if it's speech
        } else if (speechWithTimestampAndSpeaker.test(block) === true) {
            transdown.parseSpeechWithTimestampAndSpeaker(
                block,
                speechWithTimestampAndSpeaker,
                latestEpisode
            );
        } else if (speechWithTimestamp.test(block) === true) {
            transdown.parseSpeechWithTimestamp(
                block,
                speechWithTimestamp,
                latestEpisode
            );
        } else if (speechWithSpeaker.test(block) === true) {
            transdown.parseSpeechWithSpeaker(
                block,
                speechWithSpeaker,
                latestEpisode
            );
        
        // Otherwise, write it out somewhere so the user gets realtime feedback
        } else {
            turn = {
                timestamp: "",
                speaker: "",
                speech: block,
                accompanyingMedia: ""
            };
            this.episodes[this.episodes.length - 1].turns.push(turn);
        }
    },
    
    parseSpeechWithTimestamp : function (block, pattern, episode) {
        var rawTurnComponents = pattern.exec(block),
            turn = {
                timestamp: rawTurnComponents[1],
                speech: rawTurnComponents[2]
            };
        episode.turns.push(turn);
        episode.hasTimestamps = true;
    },
    
    parseSpeechWithSpeaker : function (block, pattern, episode) {
        var rawTurnComponents = pattern.exec(block),
            turn = {
                speakerName: rawTurnComponents[1],
                speech: rawTurnComponents[2]
            };
        episode.turns.push(turn);
        episode.hasSpeakerNames = true;
    },
    
    parseSpeechWithTimestampAndSpeaker : function (block, pattern, episode) {
        var rawTurnComponents = pattern.exec(block),
            turn = {
                timestamp: rawTurnComponents[1],
                speakerName: rawTurnComponents[2],
                speech: rawTurnComponents[3]
            };
        episode.turns.push(turn);
        episode.hasSpeakerNames = true;
        episode.hasTimestamps = true;
    },
            
   
    parseBlocks : function (text, transcript) {
        "use strict";
        var blockSeparator = /\n{2,}/,
            blocks = text.split(blockSeparator),
            transcript = {
                episodes : [],
                hasSpeakerNames : false,
                hasAccompanyingMedia : false,
                hasTimestamps : false
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
    
    getColumnNames : function (episode) {
        var columns = ["Speech"],
            speechPosition = columns.indexOf("Speech");
        
        if (episode.hasTimestamps === true) {
            console.log("has timestamp");
            columns.unshift("Time");
        }
        if (episode.hasSpeakerNames === true) {
            console.log("has speaker names");
            speechPosition = columns.indexOf("speech");
            columns.splice(speechPosition, 0, "Speaker");
        }
        if (episode.hasAccompanyingMedia === true) {
            console.log("has accompanying media");
            columns.push("Media");
        }
        return (
            [
                "Time",
                "Speaker",
                "Speech",
                "Media"
            ]
        );
    },
    
    processLinks : function (turn) {
        var referenceLinkPattern = /(!\[[^\]]*\])\[([^\]])*\]/,
            inlineLinkPattern = /(!\[[^\]]*\])\[([^\]])*\]/,
            key = "",
            speech = turn.speech;
        
        turn.accompanyingMedia = "";
        
        if (referenceLinkPattern.test(speech) === true) {
            key = referenceLinkPattern.exec(speech)[2];
            turn.accompanyingMedia = transdown.referencesDictionary[key];
            this.hasAccompanyingMedia = true;
        } else if (inlineLinkPattern.test(speech) === true) {
            turn.accompanyingMedia = inlineLinkPattern.exec(speech)[2];
            this.hasAccompanyingMedia = true;
        }
        return (turn);

    },
    
};

var text = $('#text-to-transdownify');
text.each(transdown.transdownify);
text.first().keyup(transdown.transdownify);
