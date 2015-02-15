<h1 class="page-header">Philosophy <small>Why Transdown Syntax looks like it does</small></h1>

My two main inspirations for Transdown were John Gruber's [Markdown][1] and John August's [Fountain][2]. The inspirational lineage is so strong that I chose the name **Transdown** to reflect that heritage. And, much of the syntax descends from their ideas about what these languages are and how they should work.

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. <footer>John Gruber in <a href="http://daringfireball.net/projects/markdown/"><cite title="Introduction to Markdown">Introduction to Markdown</cite></a></footer>

<blockquote><p>Fountain is not an app. It’s not even really a file format. It’s a simple set of straightforward <a href="http://fountain.io/syntax">rules</a> for writing a screenplay in plain text….Fountain is designed to “just work” if you simply typed some text that looked like a screenplay.</p><footer>John August in <a href="http://fountain.io/faq"><cite title="Fountain FAQ">Fountain FAQ</cite></a></footer></blockquote>

<h1 class="page-header">A Quick Example</h1>

Let's examine a snippet of raw transcript from [my dissertation][5]. This kind of example could be straight out of an [Inqscribe][4] file you're currently working on.

<table class="table table-hover"><thead><tr><td>Your raw transcript snippet</td><td>How Transdown interprets that snippet</td></tr></thead><tbody><tr><td>

<pre>
### Rebecca's Gestural Pseudo-Coding

[33:33] Rebecca: and then my thinking at least, is you
should be able to, um, say that "star p of i" /mmhmm/
equals, uh, the title, and then you just do i++, so then
it’ll ![makes looping gesture with left hand][1] /OK/

[34:00] Rebecca: and you just keep ![left hand makes
horizontal chops in the air, like rungs down a ladder][2]

[1]: images/rebecca1.jpg 
[2]: images/rebecca2.png
</pre></td><td>
<pre>
Episode Title

Conversational Turn

Conversational Turn

List of References to Media
```</pre></td></tr></tbody></table>

<h1 class="page-header">Transdown's Block Structure</h1>

Transdown assumes your transcript will be built of blocks, which are just lines of source text separated by one or more blank lines.

```
These two lines

Are separated by a blank line
```

```
These two lines
have no blank line in between
```

<h1 class="page-header">Episodes</h1>

Transcripts are organized around episodes. You can denote the title of an episode using [ATX-style header syntax][3], which just means beginning a line 

[1]: http://daringfireball.net/markdown
[2]: http://fountain.io
[3]: http://spec.commonmark.org/0.17/#atx-headers
[4]: http://www.inqscribe.com/
[5]: http://hdl.handle.net/1903/15177
