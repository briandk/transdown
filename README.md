### What is Transdown?

[Transdown][1] is a lightweight syntax for writing and presenting transcripts of qualitative research data.

### What does it look like in action?

Transdown lets you write raw transcript like this:


    ### Rebecca's gestural pseudo-coding    

    [00:33:33.25] Rebecca: and then my thinking at least, is you should be able to, um, say that "star p of i" /mmhmm/ equals, uh, the title, and then you just do i++, so then it’ll {{move to the next one}} !{makes looping gesture with left hand} /OK/

    [00:34:00.12] Rebecca: and you just keep {{saving each of the pointers}} !{left hand makes horizontal chops in the air, like rungs down a ladder}


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

### Where can I find out more info?

Visit [Transdown.org][1]

[1]: http://transdown.org