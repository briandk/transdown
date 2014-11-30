var transdownNamespace = {
    updatePreviewAfterEachKeypress : function () {
        $('#text-to-transdownify').keyup(this.renderTranscriptPreview);
    },

    transdownify : function (text) {
        return (text);
    },

    renderTranscriptPreview : function () {
        var textToTransdownify = $('#text-to-transdownify').val(),
            outputText = this.transdownify(textToTransdownify);
        $('#live-preview').html(outputText);
        console.log("render");
    }
};

transdown = Object.create(transdownNamespace);
transdown.updatePreviewAfterEachKeypress();
transdown.renderTranscriptPreview();
