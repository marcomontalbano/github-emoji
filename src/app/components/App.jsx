import React, { Component } from 'react';

import EmojiActions from '../actions/EmojiActions';
import EmojiStore from '../stores/EmojiStore';

import Filter from './Filter';
import Results from './Results';

import './App.css';

class App extends Component {

    state = {
        emoji: EmojiStore.getState()
    };

    componentDidMount() {
        EmojiActions.load();
        this.listener = EmojiStore.addListener(this.onEmojiStoreHandler);
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    onEmojiStoreHandler = () => {
        this.setState({
            emoji: EmojiStore.getState()
        });
    }

    render() {
        return (
            <div className="App">
                <Filter {...this.state.emoji} />
                <Results {...this.state.emoji} />
            </div>
        );
    }
}

export default App;

