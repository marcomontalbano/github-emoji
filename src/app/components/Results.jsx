import React, { Component } from 'react';

import NotFound from './NotFound';
import Spinner from './Spinner';
import Emoji from './Emoji';

import './Results.css';

class Results extends Component {

    renderItems(hasResults, results) {
        if (hasResults === true && results.length === 0) {
            return <NotFound />;
        }

        return results.length > 0 ? results.map((item, key) => (
            <Emoji key={key} item={item} />
        )) : <Spinner />;
    }

    render() {
        const {hasResults, results} = this.props
        return (
            <div className="Results container">
                {this.renderItems(hasResults, results)}
            </div>
        );
    }
}

export default Results;
