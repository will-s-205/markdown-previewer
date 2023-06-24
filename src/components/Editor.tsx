import React, { useState } from 'react';
import './Editor.scss';

export default function Editor() {
  const [text, setText] = useState({
    text: ""
  })

  const handleEdit: any = (event: {
    target: {
      value: any; name: any;
    };
  }) => {
    setText(prevText => {
      const {name, value} = event.target
      console.log({[event.target.name]: event.target.value}) // DEBUG
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
        placeholder="Comments"
        onChange={handleEdit}
        name="text"
      ></textarea>
      <textarea></textarea>
    </div>
  );
}