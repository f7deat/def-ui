import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import button from './button.md';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-raw';

export default function Button() {

    const [doc, setDoc] = useState<string>('');

    useEffect(() => {
        axios.get(button).then(response => {
            setDoc(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <div>
            <ReactMarkdown rehypePlugins={[(rehypeHighlight)]} children={doc} />
        </div>
    )
}