handleLivePreview = function () {
    "use strict";
    var text = $('#text-to-transdownify'),
        html = transdown.transdownify(text.val());
    $('#live-preview').html(html);
};

// Execute the first live preview so the transcript output shows on load
handleLivePreview();

$('#text-to-transdownify')
    .first()
    .keyup(handleLivePreview);
