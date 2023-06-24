import React, { useState } from 'react';
import './Previewer.scss';

export default function Previewer() {
    const [text, setText] = useState({
        text: ''
    })

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
        <div className='editor'>
            <textarea
                className='textarea'
                value={text.text}
                onChange={handleEdit}
                name="text"
            ></textarea>
            <textarea
                className='textarea'
                value={text.text}
                onChange={handleEdit}
                name="text"
            ></textarea>
        </div>
    )
}