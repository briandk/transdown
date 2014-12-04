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
    accompanyingMedia: ""
};

var createTurns = function (episode) {
    // This regex pattern is greedy, so the first result returned will be the entire turn,
    // followed by the subcomponents we actually want. When we access the resulting
    // array, position 1 will be the timestamp, because position 0 is the entire 
    // matched turn
    var turnPattern = /^\[(\d?\d?:?\d\d:\d{2}\.?\d{0,2})\]\s*\n?(.*):\s*(.*)/;
    return(episode)
};

var createEpisodes = function (transcript) {
    var blockSeparator = /\n{2,}/,
        episodes = transcript.split(blockSeparator);
    return (episodes);
};

var createTranscript = function (text) {
    var transcript = {episodes: createEpisodes(text)};
    return (transcript);
};
