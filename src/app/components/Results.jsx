import React, { Component } from 'react';

import NotFound from './NotFound';
import Spinner from './Spinner';
import Emoji from './Emoji';

import './Results.css';

class Results extends Component {

    renderItems(emojiStore) {
        if (emojiStore.results.length === 0 && emojiStore.hasResults === true) {
            return <NotFound />;
        }

        return emojiStore.results.length > 0 ? emojiStore.results.map((item, key) => (
            <Emoji key={key} item={item} />
        )) : <Spinner />;
    }

    render() {
        return (
            <div className="Results container">
                {this.renderItems(this.props.emoji)}
            </div>
        );
    }
}

export default Results;
