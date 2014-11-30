var transdown = {};

transdown.updatePreviewAfterEachKeypress = function () {
    $('#text-to-transdownify').keyup(transdown.renderTranscriptPreview);
};

transdown.renderTranscriptPreview = function () {
    var textToTransdownify = $('#text-to-transdownify').val(),
        outputText = transdown.transdownify(textToTransdownify);
    $('#live-preview').html(outputText);
    console.log("render");
};

transdown.transdownify = function (text) {
    return (text);
};

transdown.updatePreviewAfterEachKeypress();
transdown.renderTranscriptPreview();
