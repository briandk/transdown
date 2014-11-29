var transdown = {};

transdown.updatePreviewAfterEachKeypress = function() {
    $('#text-to-transcriptulate').keyup(transdown.renderTranscriptPreview)
}

transdown.renderTranscriptPreview = function() {
    textToTransdownify = document.getElementById('text-to-transcriptulate').value;
    outputText = transdown.transdownify(textToTransdownify);
    document.getElementById('live-preview').innerHTML = outputText;
    console.log("render");
};

transdown.transdownify = function(text) {
    return(text);
}

transdown.updatePreviewAfterEachKeypress();
transdown.renderTranscriptPreview();
