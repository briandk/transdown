var transdown = {
    transdownify : function (text) {
        var transcript = this.parseBlocks(text),
            html = Handlebars.templates.transcriptTemplate(transcript);
        console.log(transcript);
        return (html);
    },
    
    parseBlock : function (block) {
        
        var conversationalTurn = /\s*(\[\d\d(?::\d\d)+(?:[;.]\d\d){0,1}\])\s+([^:]+):\s+(.*)/,
            episodeTitle = /^\s*#{1,6}\s*([^\s].*)/,
            episode = {},
            rawTurnComponents = [],
            turn;
        
        // if it's an episode title, make a new episode
        if (episodeTitle.test(block) === true) {
            episode.title = episodeTitle.exec(episode);
            episode.turns = [];
            this.episodes.push(episode);
        
        /* if it's a conversational turn, make a new turn and 
           add it to the new episode */
        } else if (conversationalTurn.test(block) === true) {
            rawTurnComponents = conversationalTurn.exec(block);
            turn = {
                timestamp: rawTurnComponents[0],
                speakerName: rawTurnComponents[1],
                speech: rawTurnComponents[2],
                accompanyingMedia: ""
            };
            
            this.episodes[this.episodes.length - 1].turns.push(turn);
        }
        
    },
    
    parseBlocks : function (text) {
        "use strict";
        var self = this,
            blockSeparator = /\n{2,}/,
            blocks = text.split(blockSeparator),
            transcript = {
                episodes: []
            };
        
        blocks.map(self.parseBlock, transcript);
        console.log(transcript);
        /*
        
        To parseBlocks:
           + separate the text into blocks
           + Create a new transcript object
           + process each block
                
        To process a block (by handing in a transcript object):
            If (it's an episode title):
                Create a new episode with that as the title
                Append the episode to the end of the episodes array
            If (it's a turn):
                Create a new conversationalTurn object
                Get the last episode
                Append the turn to the array of turns in the last episode
        
        See also: https://gist.github.com/briandk/e561fc59e81eaebd2adc          
        
        */
        
    },
    
    createRenderer : function () {
        var transdownNamespace = this,
            renderer = function () {
                var textToTransdownify = $('#text-to-transdownify').val(),
                    outputText = transdownNamespace.transdownify(textToTransdownify);
                $('#live-preview').html(outputText);
            };
        return (renderer);
    },
    
    setupLivePreview : function () {
        var renderTranscriptPreview = this.createRenderer();
        $('#text-to-transdownify').keyup(renderTranscriptPreview);
        renderTranscriptPreview();
    }
};

transdownInstance = Object.create(transdown);
transdownInstance.setupLivePreview();
var text = $('#text-to-transdownify').val();
