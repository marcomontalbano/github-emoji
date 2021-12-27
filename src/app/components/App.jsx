import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import EmojiActions from '../actions/EmojiActions';
import EmojiStore from '../stores/EmojiStore';

import { Filter } from './Filter';
import { Results } from './Results';

import './App.css';

const Portal = ({ children, container, key }) => {
    const [emptied, setEmptied] = useState(false)

    useEffect(() => {
        if (!emptied) {
            container.innerHTML = '';
            setEmptied(true);
        }
    }, [emptied, container]);

    if (!emptied) {
        return null;
    }

    return createPortal(children, container, key)
}

const App = () => {
    const [emoji, setEmoji] = useState(EmojiStore.getState())

    useEffect(() => {
        const listener = EmojiStore.addListener(() => {
            setEmoji(EmojiStore.getState())
        });

        EmojiActions.load();

        return () => listener.remove()
    }, [])

    useEffect(() => {
        if (emoji.hasResults) {
            document.title = `GitHub Emoji - ${ emoji.results.length } emojis`;
        }
    }, [emoji])

    return (
        <div className="App">
            <Portal
                children={<sup style={{ fontSize: '50%' }}>{ emoji.hasResults ? emoji.results.length : '' }</sup>}
                container={document.getElementById('size')} />
            <Filter />
            <Results {...emoji} />
        </div>
    );
}

export default App;
