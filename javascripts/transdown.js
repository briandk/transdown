var transdown = {};

transdown.updatePreviewAfterEachKeypress = function() {
    $('#text-to-transcriptulate').keyup(transdown.renderTranscriptPreview)
}

transdown.renderTranscriptPreview = function() {
    input = document.getElementById('text-to-transcriptulate');
    output = document.getElementById('live-preview');
    output.innerHTML = input.value;
    console.log("render");
};

transdown.updatePreviewAfterEachKeypress();
transdown.renderTranscriptPreview();
