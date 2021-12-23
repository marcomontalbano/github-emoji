import React from 'react';

import { NotFound } from './NotFound';
import { Spinner } from './Spinner';
import { Emoji } from './Emoji';

import './Results.css';

const renderItems = (hasResults, results) => {
    if (hasResults === true && results.length === 0) {
        return <NotFound />;
    }

    return results.length > 0 ? results.map((item, key) => (
        <Emoji key={key} item={item} />
    )) : <Spinner />;
}

export const Results = ({ hasResults, results }) => (
    <div className="Results container">
        {renderItems(hasResults, results)}
    </div>
)
