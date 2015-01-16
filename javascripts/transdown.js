var transdown = {
    transdownify : function () {
        "use strict";
        var transcript = transdown.parseBlocks($(this).val()),
            html = Handlebars.templates.transcriptTemplate(transcript);
        $('#live-preview').html(html);
    },
    
    parseBlock : function (block) {
        "use strict";
        var conversationalTurn = /\s*\[(\d\d(?::\d\d)+(?:[;.]\d\d){0,1})\]\s+([^:]+):\s+(.*)/,
            episodeTitle = /^\s*#{1,6}\s*([^\s].*)/,
            episode = {},
            rawTurnComponents = [],
            turn;
        
        // if it's an episode title, make a new episode
        if (episodeTitle.test(block) === true) {
            episode.title = episodeTitle.exec(block)[1];
            episode.turns = [];
            this.episodes.push(episode);
        
        /* if it's a conversational turn, make a new turn and 
           add it to the new episode */
        } else if (conversationalTurn.test(block) === true) {
            rawTurnComponents = conversationalTurn.exec(block);
            turn = {
                timestamp: rawTurnComponents[1],
                speakerName: rawTurnComponents[2],
                speech: rawTurnComponents[3],
                accompanyingMedia: ""
            };
            
            this.episodes[this.episodes.length - 1].turns.push(turn);
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
            If (it's a turn):
                Create a new conversationalTurn object
                Get the last episode
                Append the turn to the array of turns in the last episode
        
        See also: https://gist.github.com/briandk/e561fc59e81eaebd2adc          
        
        */
        
    }

};

var text = $('#text-to-transdownify');
text.each(transdown.transdownify);
text.first().keyup(transdown.transdownify);
