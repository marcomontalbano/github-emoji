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
            item: PropTypes.object.isRequired,
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
        const relativeImage = `${window.location.pathname.replace(/\/$/, '')}/emoji/${this.props.item.name}.png`;

        const isEmoji = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g.test(this.props.item.inner_html)

        return (
            <div className={`Emoji ${ this.state.isCopied ? 'copied' : '' }`}>
                {
                    isEmoji ?
                    <div className="image is-emoji" dangerouslySetInnerHTML={{ __html: this.props.item.inner_html }}></div> :
                    <div className="image"><img src={relativeImage} alt={this.props.item.name} /></div>
                }
                <div className="name">{this.props.item.code}</div>
                <div className="details">
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
