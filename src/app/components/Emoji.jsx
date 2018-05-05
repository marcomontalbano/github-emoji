import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmojiObject from '../class/Emoji';

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
            item: PropTypes.instanceOf(EmojiObject).isRequired,
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
        this.copyToClipboard(e.target);
    }

    render() {
        return (
            <div className={`Emoji ${ this.state.isCopied ? 'copied' : '' }`}>
                <div className="image"><img src={this.props.item.relativeImage} alt={this.props.item.name} /></div>
                <div className="name">{this.props.item.code}</div>
                <div className="details">
                    <div className="image"><img src={this.props.item.relativeImage} alt={this.props.item.name} /></div>
                    <div className="name" onClick={this.handleClickToCopy}>{this.props.item.code}</div>
                    <div className="name char">
                        <div onClick={this.handleClickToCopy} className="column column-left" dangerouslySetInnerHTML={{ __html: this.props.item.html_entity }}></div>
                        <div onClick={this.handleClickToCopy} className="column column-right">{this.props.item.html_entity}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Emoji;
