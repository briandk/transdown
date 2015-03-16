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

var medium = {
    source: "",
    type: "",
    altText: "",
    positionInText: -1
};



