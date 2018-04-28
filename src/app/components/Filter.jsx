import React, { Component } from 'react';

import EmojiActions from '../actions/EmojiActions';

import './Filter.css';

class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSearching: false,
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onChangeTimeout = null;
    }

    onChangeHandler(e) {
        const targetValue = e.target.value;
        clearTimeout(this.onChangeTimeout);
        this.onChangeTimeout = setTimeout(() => {
            EmojiActions.search(targetValue);
        }, 500);

        this.setState({
            isSearching: targetValue.length > 0
        });
    }

    render() {
        return (
            <div className="Filter">
                <div className="container">
                    <input className={this.state.isSearching ? 'is-searching' : ''} onChange={this.onChangeHandler} placeholder="Search Emoji .." type="text" />
                </div>
            </div>
        );
    }

}

export default Filter;
