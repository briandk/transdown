var transdown = {
    transdownify : function (text) {
        "use strict";
        var transcript = transdown.parseBlocks(text),
            html = "";
        
        transcript.episodes.forEach(
            function (element, index) {
                element.turns.map(
                    transdown.processLinks,
                    element
                );
            },
            transcript
        );
        
        return (transcript);
    },
  
    makeNewEpisode : function (block, episodeTitlePattern) {
        "use strict";
        var episode = {
                title: "",
                turns: []
            };
        if (episodeTitlePattern.test(block) === true) {
            episode.title = episodeTitlePattern.exec(block)[1];
        }
        return (episode);
    },
    
    parseBlock : function (block, index) {
        "use strict";
        var speechWithTimestampAndSpeaker = /\s*\[([\d:;.,]+)\]\s+([^:]+):\s+(.*)/,
            speechWithSpeaker = /^\s*([^:]*):\s+(.*)/,
            speechWithTimestamp = /\s*\[([\d:;.,]+)\]\s+(.*)/,
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
        var referenceLinkPattern = /!\[([^\]]*)\]\[([^\]])*\]/g,
            inlineLinkPattern = /!\[([^\]]*)\]\(([^\)]*)\)/g,
            speech = turn.speech,
            media = [],
            medium = {},
            link,
            key;
        while ((link = referenceLinkPattern.exec(speech)) !== null) {
            medium = {
                altText: link[1],
                source: transdown.referencesDictionary[link[2]],
                type: "",
                positionInText: referenceLinkPattern.lastIndex
            };
            media.push(medium);
        }
        while ((link = inlineLinkPattern.exec(speech)) !== null) {
            medium = {
                altText: link[1],
                source: link[2],
                type: "",
                positionInText: inlineLinkPattern.lastIndex
            };
            media.push(medium);
        }
        turn.accompanyingMedia = media;
        turn.hasAccompanyingMedia = true;
        turn.accompanyingMedia
            .sort(
                function (a, b) {
                    return (a.positionInText - b.positionInText);
                }
        );
            
        
        return (turn);
    },
    
    // TO Process Links
        // Add reference links to media array
        // Add inline links to media array
        // Sort media array
    
    getTestTranscript : function () {
        var turns = [
                {
                    timestamp: "33:33",
                    speakerName: "Rebecca",
                    speech: "and then my thinking at least, is you should be able to, um, say that 'star p of i' /mmhmm/ equals, uh, the title, and then you just do i++, so then it’ll {{move to the next one}} ![makes looping gesture with left hand][1] /OK/",
                    accompanyingMedia: ""
                },

                {
                    timestamp: "34:00",
                    speakerName: "Rebecca",
                    speech: "[34:00] Rebecca: and you just keep {{saving each of the pointers}} ![left hand makes horizontal chops in the air, like rungs down a ladder][2]",
                    accompanyingMedia: ""
                }
            ],

            episode = {
                title: "Rebecca's gestural pseudo-coding",
                turns: turns
            },

            transcript = {
                episodes: [episode]
            };

        return (transcript);
    }
};

// boilerplate for exporting Node module

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return transdown;
}));

