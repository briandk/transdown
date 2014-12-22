var transdown = {
    transdownify : function (text) {
        var transcript = this.parseBlocks(text),
            html = Handlebars.templates.transcriptTemplate(transcript);
        console.log(transcript);
        return (html);
    },
    
    parseBlocks : function (text) {
        var blockSeparator = /\n{2,}/,
            turnPattern = /\s*(\[\d\d(?::\d\d)+(?:[;.]\d\d){0,1}\])\s+([^:]+):\s+(.*)/,
            episodeTitlePattern = /^\s*#{1,6}\s*([^\s].*)/,
            blocks = text.split(blockSeparator);
        
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
