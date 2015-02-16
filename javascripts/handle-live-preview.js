handleLivePreview = function () {
    "use strict";
    var text = $('#text-to-transdownify'),
        transcript = transdown.transdownify(text.val()),
        html = Handlebars.templates.transcriptTemplate(transcript);
    $('#live-preview').html(html);
};

// Execute the first live preview so the transcript output shows on load
handleLivePreview();

$('#text-to-transdownify')
    .first()
    .keyup(handleLivePreview);

// Enable Popovers (like for the syntax cheat sheet)
$('[data-toggle="popover"]').popover();