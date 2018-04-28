import React, { Component } from 'react';
import { Container } from 'flux/utils';

import EmojiActions from '../actions/EmojiActions';
import EmojiStore from '../stores/EmojiStore';

import Results from './Results';

import './AppContainer.css';

class AppContainer extends Component {

    componentDidMount() {
        EmojiActions.load();
    }

    static getStores() {
        return [EmojiStore];
    }

    static calculateState() {
        return {
            emoji: EmojiStore.getState(),
        };
    }

    render() {
        return (
            <div className="App">
                <Results {...this.state} />
            </div>
        );
    }
}

export default Container.create(AppContainer);

