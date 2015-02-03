# Philosophy <small>Why Transdown Syntax looks like it does</small>

My two main inspirations for Transdown were John Gruber's [Markdown][1] and John August's [Fountain][2]. The inspirational lineage is so strong that I chose the name **Transdown** to reflect that heritage. And, much of the syntax descends from their ideas about what these languages are and how they should work.

> The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions. <footer>John Gruber in <a href="http://daringfireball.net/projects/markdown/"><cite title="Introduction to Markdown">Introduction to Markdown</cite></a></footer>

<blockquote><p>Fountain is not an app. It’s not even really a file format. It’s a simple set of straightforward <a href="http://fountain.io/syntax">rules</a> for writing a screenplay in plain text….Fountain is designed to “just work” if you simply typed some text that looked like a screenplay.</p><footer>John August in <a href="http://fountain.io/faq"><cite title="Fountain FAQ">Fountain FAQ</cite></a></footer></blockquote>

# Transdown's Block Structure

Transdown assumes your transcript will be built of blocks, which are just lines of source text separated by one or more blank lines.

```
These two lines

Are separated by a blank line
```

```
These two lines
have no blank line in between :-(
```

# Episodes

Transcripts are organized around episodes. You can denote the title of an episode using [ATX-style header syntax][3], which just means beginning a line 

[1]: http://daringfireball.net/markdown
[2]: http://fountain.io
[3]: http://spec.commonmark.org/0.17/#atx-headers
