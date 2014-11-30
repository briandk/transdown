var transdownNamespace = {
    updatePreviewAfterEachKeypress : function () {
        $('#text-to-transdownify').keyup(this.renderTranscriptPreview);
    },

    transdownify : function (text) {
        return (text);
    },

    renderTranscriptPreview : function () {
        var textToTransdownify = $('#text-to-transdownify').val()
            //outputText = this.transdownify(textToTransdownify);
        //$('#live-preview').html(outputText);
        console.log("render");
        console.log(this.transdownify);
    }
};

transdown = Object.create(transdownNamespace);
transdown.updatePreviewAfterEachKeypress();
transdown.renderTranscriptPreview();
