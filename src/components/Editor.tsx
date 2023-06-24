import React, { useState } from 'react';
import './Editor.scss';
// npm install --save marked // npm install --save @types/marked
import { marked } from 'marked';

let renderer = new marked.Renderer();

export default function Editor() {
  const [text, setText] = useState({
    text: ""
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
      <textarea
        value={text.text}
        placeholder="text here"
        onChange={handleEdit}
        name="text"
      ></textarea>

      <textarea
        value={text.text}
        placeholder="markup here"
        onChange={handleEdit}
        name="text"
      ></textarea>

      <div
        dangerouslySetInnerHTML={createMarkup()}
        placeholder="markup here"
        onChange={handleEdit}
      ></div>
    </div>
  );
}