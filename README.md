# What is Transdown?

[Transdown][1] is a lightweight syntax for writing and presenting transcripts of qualitative research data.

Right now, Transdown also lets you [live preview and export your transcript][7] as you work on it in [Inqscribe][4]. 

# What does it look like in action?

Transdown lets you write raw transcript like this:

    ### Rebecca's gestural pseudo-coding    

    [00:33:33.25] Rebecca: and then my thinking at least, is you
    should be able to, um, say that "star p of i" /mmhmm/
    equals, uh, the title, and then you just do i++, so then
    it’ll {{move to the next one}} !{makes looping gesture with
    left hand}[1] /OK/

    [00:34:00.12] Rebecca: and you just keep {{saving each of
    the pointers}} !{left hand makes horizontal chops in the
    air, like rungs down a ladder}[2]

    [1]: images/rebecca1.jpg 
    [2]: images/rebecca2.png

and have it automatically rendered as a beautiful table like this:

<table class="table table-striped transdown-output">
<thead>
<tr>
  <th>Time</th>
  <th>Speaker</th>
  <th>Speech</th>
  <th>Media</th>
</tr>
</thead>

<tbody>
<tr>
  <td class="time">33:33</td>
  <td class="speaker-name">Rebecca</td>
  <td class="speech">And then my thinking at least, is you should be able to, um, say that "star p of i" <span class="speech-interruption">/mmhmm/</span> equals, uh, the title, and then you just do i++, so then it'll <strong>move to the next one</strong> {makes looping gesture with left hand} <span class="speech-interruption">/OK/</span></td>
  <td>
    <img class="accompanying-media"
         src="images/rebecca1.jpg">
  </td>
</tr>
<tr>
  <td class="time">34:00</td>
  <td class="speaker-name">Rebecca</td>
  <td class="speech">and you just keep <strong>saving each of the pointers</strong> {left hand makes horizontal chops in the air, like rungs down a ladder}</td>
  <td>
    <img class="accompanying-media"
         src="images/rebecca2.png">
  </td>
</tr>
</tbody>
</table>

# How can I install Transdown on my system?

Right now Transdown is ***Mac-Only***.[^a] If you have a Mac and want to give it a try, read on.

## Minimum Requirements

### Hardware

*You need a Mac*. Transdown has been tested on [OS X 10.10 (Yosemite)][6].[^b]

### Software

If you want to be able to preview your [Inqscribe][4] transcripts live as you write, You'll need:

- A fully-licensed[^c] copy of [Inqscribe][4]
- [Marked2][5], the app displays a live preview of your Inqscribe transcript as you write.[^d]
- [Node.js][8], which handles custom-processing the preview. If you don't have Node installed right now, *don't worry!*. I'll show you how to install it a bit later in this guide

### Emotional Temperament

You should install Transdown if you:

- Feel brave (this software is offered without any warranty)
- Want to pioneer this
- Could help by submitting bug reports [as new issues][3] when stuff goes awry[^e]

## How To Install Transdown on Mac OS X

1. If you don’t already have it, install [Node][8].[^g] 
2. Download the latest version of the [Transdown source code][13] *and remember where you put it*.[^f] You can accomplish this one of three ways:
	1. [Download the source files][11] directly as a .ZIP file, which you should unzip.[^f]
	2. [Clone the Transdown Repository][10] using the free [Github for Mac app][9].[^f]
	3. Clone the repository at the command line using [git][12]:
		```bash
		# First, navigate to a directory where you want to store
		# the Transdown folder, then
		> git clone https://github.com/briandk/transdown.git
		```
3. Remember 

# Where can I find out more info?

Visit [Transdown.org][1]

[1]: http://transdown.org
[2]: http://en.wikipedia.org/wiki/TRS-80
[3]: https://github.com/briandk/transdown/issues
[4]: http://www.inqscribe.com/
[5]: http://marked2app.com/
[6]: http://www.apple.com/osx/
[7]: http://transdown.org/videos.html
[8]: http://nodejs.org
[9]: https://mac.github.com/
[10]: github-mac://openRepo/https://github.com/briandk/transdown
[11]: https://github.com/briandk/transdown/archive/master.zip
[12]: http://git-scm.com/
[13]: https://github.com/briandk/transdown

[^a]: If you use Windows, Linux, Mac, or [TRS-80][2], then I deeply apologize but my development skills can't help you just yet. 
[^b]: If you’re running a Mac, it’s easy to find out which version of OS X you have. Just click the Apple icon all the way in the upper-left hand corner of the screen, and hit **About This Mac**. And, if you’re running an earlier (non-Yosemite) version, it should be free to upgrade to Yosemite on most modern Macs. Note that in all likelihood, Transdown works just fine on older (pre-Yosemite) versions of Mac OS X. But, I just wanted to be up front that I’ve only tested it on Yosemite.
[^c]: You'll need the full license (as far as I can tell) to be able to save Inqscribe files. And, you need to be able to save files to work best with [Marked][5]’s live preview.
[^d]: Right now Marked costs $13.99 (USD) and you can either purchase it from the Mac App Store or [directly on the web][5]. I can’t say enough good things about it. It’s one of my daily go-to applications
[^e]: In all seriousness, submitting bug reports helps me and the community make Transdown better.
[^f]: It’s really important that you remember where you download the Transdown source files because you’ll need that information for a later step, when you tell Marked where to look for your custom processor.
[^g]: Unless you do web development work on the regular, you probably don’t have Node. *But that’s OK!* It’s free and open-source. And if you’re curious, the reason you need it is that currently Node helps me handle the inter-app communication between Inqscribe and the live preview in [Marked][5]
