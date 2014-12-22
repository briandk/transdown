var transdown = {
    transdownify : function (text) {
        var transcript = this.parseBlocks(text),
            html = Handlebars.templates.transcriptTemplate(transcript);
        console.log(transcript);
        return (html);
    },
    
    parseBlocks : function (text) {
        var self = this,
            blockSeparator = /\n{2,}/,
            turnPattern = /\s*(\[\d\d(?::\d\d)+(?:[;.]\d\d){0,1}\])\s+([^:]+):\s+(.*)/,
            episodeTitlePattern = /^\s*#{1,6}\s*([^\s].*)/,
            blocks = text.split(blockSeparator);
        /*
        
        To parseBlocks:
            separate the text into blocks
            Create a new transcript object
            process each block
                
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
    },
    
    transcript : {
        episodes: []
    },

    episode : {
        title: "",
        turns: []
    },

    turn : {
        timestamp: "",
        speakerName: "",
        speech: "",
        accompanyingMedia: ""
    }
};

transdownInstance = Object.create(transdown);
transdownInstance.setupLivePreview();
var text = $('#text-to-transdownify').val();
