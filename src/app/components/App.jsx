import React, { Component } from 'react';

import EmojiActions from '../actions/EmojiActions';
import EmojiStore from '../stores/EmojiStore';

import Filter from './Filter';
import Results from './Results';

import './App.css';

class App extends Component {

    emoji = [];

    state = {
        emoji: EmojiStore.getState()
    };

    componentDidMount() {
        EmojiActions.load();
        this.listener = EmojiStore.addListener(this.onEmojiStoreHandler);
    }

    recursive = () => {
        setTimeout(() => {
            
            let hasMore = this.state.emoji.results.length + 50 < this.emoji.results.length;
            this.setState((prev, props) => ({
                emoji: {
                    ...prev.emoji,
                    results: this.emoji.results.slice(0, prev.emoji.results.length + 50)
                }
            }));
            if (hasMore) this.recursive();
        }, 0);
    }

    componentWillUnmount() {
        this.listener.remove();
    }

    onEmojiStoreHandler = () => {
        // this.setState({
        //     emoji: EmojiStore.getState()
        // });
        this.emoji = EmojiStore.getState();
        this.recursive();
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

