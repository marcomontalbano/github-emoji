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

        this.handleClick = this.handleClick.bind(this);
    }

    static get propTypes() {
        return {
            item: PropTypes.instanceOf(EmojiObject).isRequired,
        };
    }

    copyToClipboard(text) {
        var textarea = document.createElement('textarea');
        textarea.innerText = text;

        document.getElementsByTagName('body')[0].append(textarea);
        textarea.select();

        try {
            this.setState({isCopied: document.execCommand('copy')});
            setTimeout(() => {
                this.setState({isCopied: false}); 
            }, 2000);
        } catch (err) {
            console.error('Oops, unable to copy');
        }

        textarea.remove();
    }

    handleClick() {
        this.copyToClipboard(this.props.item.code);
    }

    render() {
        return (
            <div className={`Emoji ${ this.state.isCopied ? 'copied' : '' }`} onClick={this.handleClick}>
                <div className="image"><img src={`emoji/${this.props.item.name}.png`} alt={this.props.item.name} /></div>
                <div className="name">{this.props.item.code}</div>
            </div>
        );
    }
}

export default Emoji;
