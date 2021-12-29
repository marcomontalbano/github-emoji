import React from 'react';

import './Emoji.css';

export const Emoji = ({ item }) => {
    const [name, content] = item;
    const ghcode = `:${name}:`;
    const emoji = content.valid ? content.escaped : (
        <img src={content.image} alt={name} />
    );

    const copyToClipboard = (target) => {
        var textarea = document.createElement('textarea');
        textarea.innerText = target.textContent;

        document.getElementsByTagName('body')[0].append(textarea);
        textarea.select();

        try {
            if (document.execCommand('copy')) {
                target.classList.add('copied');
            }

            setTimeout(() => {
                target.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Oops, unable to copy');
        }

        textarea.remove();
    }

    const handleClickToCopy = (e) => {
        copyToClipboard(e.currentTarget);
    }

    return (
        <>
            <div className={`image ${content.valid ? 'is-emoji': ''}`}>{emoji}</div>
            <div className="name">{ghcode}</div>
            <div className="details">
                <div onClick={handleClickToCopy} className="image is-emoji"><span>{content.escaped}</span></div>
                <div className="name" onClick={handleClickToCopy}>{ghcode}</div>
            </div>
        </>
    );
}
