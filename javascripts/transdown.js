transdown = {};

transdown.renderTransdownInLivePreview = function() {
    input = document.getElementById('text-to-transcriptulate')
    output = document.getElementById('live-preview');
    output.innerHTML = input.value;
}

transdown.renderTransdownInLivePreview();