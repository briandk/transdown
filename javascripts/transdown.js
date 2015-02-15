var transdown = {
    transdownify : function (text, template) {
        "use strict";
        var transcript = transdown.parseBlocks(text),
            html = "";
        
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
        
        html = template(transcript);
        return (html);
    },
  
    makeNewEpisode : function (block, episodeTitlePattern) {
        "use strict";
        var episode = {
                title: "",
                columns: [],
                turns: []
            };
        if (episodeTitlePattern.test(block) === true) {
            episode.title = episodeTitlePattern.exec(block)[1];
        }
        return (episode);
    },
    
    parseBlock : function (block, index) {
        "use strict";
        var speechWithTimestampAndSpeaker = /\s*\[(\d\d(?::\d\d)+(?:[;.]\d\d){0,1})\]\s+([^:]+):\s+(.*)/,
            speechWithSpeaker = /^\s*([^:]*):\s+(.*)/,
            speechWithTimestamp = /\s*\[(\d\d(?::\d\d)+(?:[;.]\d\d){0,1})\]\s+(.*)/,
            episodeTitlePattern = /^#{1,6}\s+([^\s].*)$/,
            referenceLink = /^\[([^\]])*\]:\s(.*)/,
            episode,
            rawTurnComponents = [],
            turn = {},
            references = [],
            latestEpisode = this.episodes[this.episodes.length - 1] || null;
        
        // if the index is zero and the first block isn't an episode title, make a new episode
        if (index === 0 && episodeTitlePattern.test(block) === false) {
            episode = transdown.makeNewEpisode(block, episodeTitlePattern);
            this.episodes.push(episode);
            latestEpisode = this.episodes[0];
            
        }
        
        // if it's an episode title or there are no episodes, make a new episode
        if (episodeTitlePattern.test(block) === true) {
            
            episode = transdown.makeNewEpisode(block, episodeTitlePattern);
            this.episodes.push(episode);
            
        // otherwise if it's a reference list
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
        
        // Otherwise, make sure it's not an episode title,
        // then write it out somewhere so the user gets realtime feedback
        } else if (episodeTitlePattern.test(block) === false) {
            turn = {
                timestamp: "",
                speaker: "",
                speech: block,
                accompanyingMedia: ""
            };
            latestEpisode.turns.push(turn);
        }
        latestEpisode = this.episodes[this.episodes.length - 1];
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
            
   
    parseBlocks : function (text) {
        "use strict";
        var blockSeparator = /\n{2,}/,
            blocks = text.trim().split(blockSeparator),
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
           + process blocks
                
        To process blocks:
           + process the first block
           + process the rest of the blocks
           
        To process the first block:
           + if it's an episode title,
              + create a new episode with that as the title and push it onto the array
           + else,
              + create a new episode
              
           Implemented as
           
           episode.title = titlepattern.exec(block) || ""
        
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
            columns.unshift("Time");
        }
        if (episode.hasSpeakerNames === true) {
            speechPosition = columns.indexOf("speech");
            columns.splice(speechPosition, 0, "Speaker");
        }
        if (episode.hasAccompanyingMedia === true) {
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

    }
    
};

