import React, { useState } from 'react';
import './Editor.scss';
// npm install --save marked // npm install --save @types/marked
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: true
});

export default function Editor() {
  const [text, setText] = useState({
    text: placeholder
  })

  function createMarkup() {
    return { __html: marked(text.text) };
  }

  const handleEdit: any = (event: {
    target: {
      value: any; name: any;
    };
  }) => {
    setText(prevText => {
      const { name, value } = event.target
      console.log({ [event.target.name]: event.target.value }) // DEBUG
      return {
        ...prevText,
        [name]: value
      }
    })
  }

  return (
    <div>
      <div
        className='editor-wrapper'>
        <div className='header'>
          <h2>Editor</h2>
        </div>
        <textarea
          id="editor"
          className='textarea'
          value={text.text}
          placeholder="text here"
          onChange={handleEdit}
          name="text"
        ></textarea>
      </div>

      <div>
        <div className='previewer-wrapper'>
          <div className='header'>
            <h2>Previewer</h2>
          </div>
          <div
            id="preview"
            className='reviewer'
            dangerouslySetInnerHTML={createMarkup()}
            onChange={handleEdit}
          ></div>
        </div>
      </div>
      <small className="footer"><a href="https://github.com/will-s-205/random-quote-machine" target='_blank' rel="noreferrer">by William Step</a></small>
    </div>
  );
}

const placeholder =
  `
# Markdown

Hi, I'm [William](https://github.com/will-s-205), welcome to my Markdown Previewer! 

The project was built for learning purposes as a part of **Front End Libraries Certification** by [freeCodeCamp](https://www.freecodecamp.org/).

You can find the challenge by clicking [here](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).

![freeCodeCamp](https://raw.githubusercontent.com/will-s-205/will-s-205.github.io/main/fcc-portfolio/img/fcc-wide-social-banner.png)

## Marked - Markdown Parser
[Marked] lets you convert [Markdown] into \`HTML\`.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use It?
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing? Then start changing stuff, have fun!

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

\`\`\`
// this is multi-line code:

function passTests(code) {
  if (code.includes(multiLineCode)) {
    return true;
  } else {
    return false;
  }
}
\`\`\`
`