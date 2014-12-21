var transdown = {
    transdownify : function (text) {
        var transcript = {},
            blockSeparator = /\n{2,}/;
        transcript.episodes = text.split(blockSeparator);
        var html = Handlebars.templates.transcriptTemplate(transcript);
        return(html);
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
