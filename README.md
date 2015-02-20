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

## Installation Overview

There are several main parts to installing Transdown for Inqscribe/Marked integration:

1. Installing [Node][8],
2. Downloading the Transdown Source Code
3. Adding the Transdown stylesheet to Marked
4. Setting up Marked to use Transdown as a custom processor
5. Verifying everything works by loading a transcript

## How To Install Transdown on Mac OS X

1. If you don’t already have it, install [Node][8].[^g] There are two basic ways you can do it:
	1. **For Developers and the Adventurous**: using [`homebrew`](http://brew.sh/)[^h] at the terminal:
		```bash
		> brew install node
		```

	2. **For Most Folks**: Downloading a precompiled package directly from [Nodejs.org][8]. [![Installing from Nodejs.org](http://f.cl.ly/items/1E1X1F0q1y0I2C0W2a3f/Node_js.png)][8]
2. Download the latest version of the [Transdown source code][13] *and remember where you put it*.[^f] You can accomplish this one of three ways:
	1. [Download the source files][11] directly as a .ZIP file, which you should unzip.[^f]
	2. [Clone the Transdown Repository][10] using the free [Github for Mac app][9].[^f]
	3. Clone the repository at the command line using [git][12]:
		```bash
		# First, navigate to a directory where you want to store
		# the Transdown folder, then
		> git clone https://github.com/briandk/transdown.git
		```

3. Add the custom stylesheet to Marked. 
	1. Open the Marked App
	2. Click the `Marked 2` menu, then choose `Preferences`
	3. Within `Preferences`, hit the `Style` button ![Selecting the Style Button in Marked Preferences](http://f.cl.ly/items/2a0I2j1e2Z2d023s2z23/Style.png)
	4. Under `Theme -> Custom Styles`, Click the + button. ![Clicking the + button to add a custom style in Marked Preferences](http://f.cl.ly/items/2K1j2w0W3T1Y3f320i29/Style.png)
	5. Within your copy of Transdown, navigate to `stylesheets -> markedApp -> transdownMarkedPreview.css`. Click to select it, then hit the Select button. ![Selecting the Transdown Marked Preview Stylesheet in Marked](http://f.cl.ly/items/0G3E3Y1n061Q2M45332u/Open.png)
	6. Click “Apply”. 
4. Specify Transdown as a Custom Processor
	 1. Open the Marked App (if it’s not already still open)
	 2. Click the `Marked 2` menu, then choose `Preferences`
	 3. Within `Preferences`, hit the `Advanced` Button. ![Clicking the Advanced Button in Marked Preferences.](http://f.cl.ly/items/2U2U2t1Z0k1L2R3A1s3p/Advanced.png)
	 4. Check the “Enable Custom Processor” box
	 5. For the value of `Path`, enter:
		```
		/usr/local/bin/node
		```

	 6. For the value of `Args`, you’ll need to put the full path to your local copy of the rendering script:  `renderInqscribePreviewinMarked.js`. Here’s an easy way to do that.
		1. Use Finder to bring up where you saved Transdown
		2. Within Transdown, navigate to `javascripts`
		3. Click and drag `renderInqscribePreviewinMarked.js` from the Finder window directly into the field for `Args` in Inqscribe ![Dragging the rendering script into the Args field of Marked Preferences](http://f.cl.ly/items/0E3a3c43392R0m2i3J0F/Screenshot_2_19_15__9_33_PM.png)
		4. Click “Apply”
5. Verifying your installation
		1. Open a transcript in Inqscribe. If you don’t have one ready to go, you can open your Transdown directory and navigate to `MarkedAppDemo -> RebeccaWellsFrameShiftEpisode20120406.inqscr`.
		2. Open Marked
		3. Click the Inqscribe icon in the window’s title bar and drag it over the Marked icon in the dock. ![Clicking and dragging the inqscribe icon onto Marked](http://f.cl.ly/items/1j0A2A1V1k112R301N2L/Screenshot_2_19_15__9_38_PM.png)
		4. In Marked, click the Style selector in the lower-left corner of the window. Select `TransdownMarkedPreview`.
		5. That should do it. If you’re still experiencing difficulties or issues, contact me!


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
[^h]: If you’re not sure what [Homebrew](http://brew.sh/) is and you don’t feel comfortable installing it, just install Node from [Nodejs.org][8] instead
