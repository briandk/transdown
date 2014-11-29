var transdown = {};

transdown.updatePreviewAfterEachKeypress = function() {
    $('#text-to-transdownify').keyup(transdown.renderTranscriptPreview)
}

transdown.renderTranscriptPreview = function() {
    textToTransdownify = document.getElementById('text-to-transdownify').value;
    outputText = transdown.transdownify(textToTransdownify);
    document.getElementById('live-preview').innerHTML = outputText;
    console.log("render");
};

transdown.transdownify = function(text) {
    return(text);
}

transdown.updatePreviewAfterEachKeypress();
transdown.renderTranscriptPreview();
