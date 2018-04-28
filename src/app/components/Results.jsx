import React, { Component } from 'react';

import Spinner from './Spinner';
import Emoji from './Emoji';

import './Results.css';

class Results extends Component {

    renderItems(items) {
        return items.length > 0 ? items.map((item, key) => (
            <Emoji key={key} item={item} />
        )) : <Spinner />;
    }

    render() {
        return (
            <div className="Results container">
                {this.renderItems(this.props.emoji.results)}
            </div>
        );
    }
}

export default Results;
