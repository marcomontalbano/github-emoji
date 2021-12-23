import React, { useRef, useState } from 'react';

import EmojiActions from '../actions/EmojiActions';

import './Filter.css';

export const Filter = () => {
    const [isSearching, setIsSearching] = useState(false)
    const onChangeTimeout = useRef()

    const onChangeHandler = (e) => {
        const targetValue = e.target.value;
        clearTimeout(onChangeTimeout.current);
        onChangeTimeout.current = setTimeout(() => {
            EmojiActions.search(targetValue);
        }, 500);

        setIsSearching(targetValue.length > 0)
    }

    return (
        <div className="Filter">
            <div className="container">
                <input className={isSearching ? 'is-searching' : ''} onChange={onChangeHandler} placeholder="Search Emoji .." type="text" />
            </div>
        </div>
    );
}
