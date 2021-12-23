import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import EmojiActions from '../actions/EmojiActions';
import EmojiStore from '../stores/EmojiStore';

import { Filter } from './Filter';
import { Results } from './Results';

import './App.css';

const App = () => {
    const [emoji, setEmoji] = useState(EmojiStore.getState())

    useEffect(() => {
        const listener = EmojiStore.addListener(() => {
            setEmoji(EmojiStore.getState())
        });

        EmojiActions.load();

        return () => listener.remove()
    }, [])

    return (
        <div className="App">
            {
                ReactDOM.createPortal(
                    (
                        <sup style={{ fontSize: '50%' }}>{ emoji.hasResults ? emoji.results.length : '' }</sup>
                    ),
                    document.querySelector('h1')
                )
            }
            <Filter />
            <Results {...emoji} />
        </div>
    );
}

export default App;

