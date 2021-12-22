import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Emoji.css';

class Emoji extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCopied: false
        };

        this.handleClickToCopy = this.handleClickToCopy.bind(this);
    }

    static get propTypes() {
        return {
            item: PropTypes.array.isRequired,
        };
    }

    copyToClipboard(target) {
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

    handleClickToCopy(e) {
        this.copyToClipboard(e.currentTarget);
    }

    render() {
        const [name, content] = this.props.item;
        const ghcode = `:${name}:`;
        const emoji = content.valid ? content.escaped : (
            <img src={content.image} alt={name} />
        );

        return (
            <div className={`Emoji ${ this.state.isCopied ? 'copied' : '' }`}>
                <div className={`image ${content.valid ? 'is-emoji': ''}`}>{emoji}</div>
                <div className="name">{ghcode}</div>
                <div className="details">
                    <div onClick={this.handleClickToCopy} className="image is-emoji"><span>{content.escaped}</span></div>
                    <div className="name" onClick={this.handleClickToCopy}>{ghcode}</div>
                </div>
            </div>
        );
    }
}

export default Emoji;
