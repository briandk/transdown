# Rebecca's Frame Shift

[00:31:13.24] Interviewer: OK. So, so it sounds like what you're saying is, on one hand, normally a pointer is like one thing. And if you're making an array, it's a bunch of things. So, how could a bunch of things be the same thing as just one thing?

Brian: This red mark comes in really handy

[00:31:29.02] Rebecca: Yeah.

[00:31:29.06] Interviewer: Like that, that's why this seems like a little bit weird. On the other hand, 

[00:31:32.28] Rebecca: Does that code work for that option? Like, cuz, if it did, that'd be very nice, cuz that's how you--that's how I would make that pointer array. 

[00:31:40.27] Rebecca: Cuz, it would just be an array, all the things would be pointers, and then you could just say "star p of 1 {gestures right hand outward, possibly indexically} points to this name, star p of 2 points to this name."

[00:31:49.10] Interviewer: Mmmhmm.

[00:31:50.05] Rebecca: But, I don't know if that's correct syntax.

[00:31:53.19] Interviewer: OK

[00:31:54.17] Rebecca: Or if it even is real syntax. {laughs}

[00:31:56.10] Interviewer: OK. But like, but like, if that's--so there are two separate issues here, right?

[00:32:00.17] Rebecca: Yeah

[00:32:01.05] Interviewer: Because one of them is, as an idea /uh-huh/ I'm gonna put little stars in here /OK/ and that's gonna mean that it's kind of like an array /OK/ of pointers. It seems like as an idea you're comfortable with the fact that, like, this should be a thing.

[00:32:13.13] Rebecca: Yeah

[00:32:14.10] Interviewer: Like, you *should* be able to make it. 

[00:32:15.15] Rebecca: Yeah

[00:32:15.29] Interviewer: I don't know if *this* makes it=

[00:32:18.08] Rebecca: uh-huh. [But]

[00:32:19.07] Interviewer: [But]

[00:32:19.11] Rebecca: [There should be some way]

[00:32:19.21] Interviewer: [There should be some way to make it]

[00:32:21.26] Rebecca: Yes.

[00:32:22.17] Interviewer: OK

[00:32:23.08] Rebecca: That's what I'm thinking at least, that I /OK/ would hope it would be.

[00:32:26.11] Interviewer: OK. So then, um, what if we just pretended for a minute, that that, like=

[00:32:34.17] Rebecca: =That that works=

[00:32:35.00] Interviewer: =That that worked=

[00:32:35.26] Rebecca: =OK=

[00:32:36.09] Interviewer: =OK. So then, um. So then you might write like, to make an array of, actually what would we call this? This is=

[00:32:47.24] Rebecca: =array of pointers, I guess=

[00:32:48.28] Interviewer: =OK. {under breath} pointers. It'd be, well. So. The--the one we had was like {writing} int, star p, um, it would be some number, um, and I guess that'd be it in order to just declare /Yes/ that right? OK. And then you're saying, how would you like access an element of it?

Brian: Now we're adding more

[00:33:12.02] Rebecca: Uh, well, what I was think--like if I wanted to like, save it or whatever, /Yeah/ I could make a while loop, {drags hand across the table in what's presumably a scanning motion} scan in the--scan in the data from the album, /OK/ uh, which is, I can write it [if you want]

[00:33:23.10] Interviewer: Sure, go ahead

[00:33:25.14] Rebecca: Um, yeah so, it was=

[00:33:27.12] Interviewer: Oh, sorry, just have to

[00:33:28.15] Interviewer: Oh

[00:33:28.27] Interviewer: It's /Oh, OK/ one of those annoying ticks, but it works best cause of the camera if, ah, /Ah, OK/ if that's pointing away from your hand

[00:33:32.04] Rebecca: OK

[00:33:32.23] Interviewer: That's fine

[00:33:33.25] Rebecca: Um, there was album, and then, so there was, uh, percent d, and percent s, and then give those names, just, I'll just call it number, and title. /Mmmhmm/ And so, at least, my--until it does not equal EOF, and then my thinking at least, is you should be able to, um, say that 

[00:34:00.12] Rebecca: "star p of i" /mmhmm/ equals, uh, the title, and then you just do i++, so then it'll move to the next one {makes looping gesture with left hand} /OK/ and you just keep saving each of the pointers {left hand makes horizontal chops in the air, like rungs down a ladder} 

[00:34:19.01] Rebecca: in the array {makes final horizontal chop} to a title /Mmmhmm/ {right hand makes pinching motion, creating a line between left and right hands that parallels the table-top and points to her right}

[00:34:21.00] Rebecca: And {right hand makes a large loop back} you just increment by 1 {right hand makes a cycloid forward, like counting dots on a line} until you reach the end of file. 

[00:34:24.13] Interviewer: OK=

[00:34:24.16] Rebecca: =Like *that* {palms open, facing chest, pointing at herself with both hands} would make sense to me.

[00:34:26.16] Interviewer: So then, like, what would go in p of one would be the first title we read in /Yes/, uh, would, when the while loop runs again, does it get a fresh [line from that]

[00:34:35.16] Rebecca: Yeah, because uh, what the while loop does is it reads in the line /Mmmhmm/ and then it'll go back down to the next thing /OK/ then read in the line, until it reaches the End of File. 

[00:34:47.28] Interviewer: So as you step through this loop /mmhmm/ {points to i++} i keeps going up by one=

[00:34:52.11] Rebecca: Yes.

[00:34:53.10] Interviewer: Uh=

[00:34:54.03] Rebecca: =And the lines keep going down, so, that way, the first line is going to be, uh, element zero /OK/ the second one'll be element one=

[00:35:02.18] Interviewer: Mmmhmm. I mean, that seems like pretty sensible to me. /Yeah/ that, that if, if our initial idea is right /Uh-huh/ and that you should be able to have an array of pointers, then if it works like an array you should /be able to/ be able to stick stuff /Yeah/ somehow in it. Um. OK. 

[00:35:19.00] Interviewer: So. What would. I mean it seems like this gives us at least some, some idea of where you might go /Yeah/ if you were to, if you were to do the next bit of the assignment. How do you feel about it?

[00:35:33.24] Rebecca: I feel good that I actually have somewhat of a possible idea. Like, I was completely lost before this, /OK/ so.

[00:35:41.24] Interviewer: Do you feel like you came up with this on your own?

[00:35:43.26] Rebecca: I mean I definitely think you helped, cuz you told me, like, uh, to just pretend that the first part's right, what would you do? And I think that helped me, cuz right, I just kept getting stuck on the fact that I couldn't get past the one part. /OK/ What do I do on the next part? 

[00:35:58.15] Interviewer: Right. /So/ But, but I mean, but we don't, and I'll be completely honest, I don't know if this is right. /Yeah. Yeah/ So, in other words, I did tell you to pretend, but we're both still not sure that that's right.

[00:36:10.05] Interviewer: So, it sounds like part of what helped you was just, if we made a choice to say "well, this might work, so if it does work" =what would be the next thing=

[00:36:16.27] Rebecca: =what would you do=