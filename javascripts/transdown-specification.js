/*
A transcript is a collection of episodes.

And episode has: 

- an episode title (optional)
- a collection of turns

A turn consists of

- A timestamp (optional)
- A speaker-name
- Speech
- Accompanying media(?)
*/

var transcript = {
    episodes: []
};

var episode = {
    title: "",
    turns: []
};

var turn = {
    timestamp: "",
    speakerName: "",
    speech: "",
    hasAccompanyingMedia: false,
    accompanyingMedia: []
};

var media = {
  source: "",
  type: ""
};

var getTestTranscript = function () {

    var turns = [
            {
                timestamp: "33:33",
                speakerName: "Rebecca",
                speech: "And then my thinking at least, is you should be able to, um, say that 'star p of i' /mmhmm/ equals, uh, the title, and then you just do i++, so then it'll move to the next one {makes looping gesture with left hand} /OK/",
                accompanyingMedia: ""
            },

            {
                timestamp: "34:00",
                speakerName: "Rebecca",
                speech: "and you just keep saving each of the pointers {left hand makes horizontal chops in the air, like rungs down a ladder}",
                accompanyingMedia: ""
            }
        ],
    
        episode = {
            title: "Rebecca's gestural pseudo-coding",
            turns: turns
        },
    
        transcript = {
            episodes: episode
        };
    
    return (transcript);
};



