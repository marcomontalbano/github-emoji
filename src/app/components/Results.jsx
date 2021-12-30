import React from 'react';

import { NotFound } from './NotFound';
import { Spinner } from './Spinner';
import { Emoji } from './Emoji';

import './Results.css';
import { VirtuosoGrid } from 'react-virtuoso';

const renderItems = (hasResults, results) => {
    if (hasResults === true && results.length === 0) {
        return <NotFound />;
    }

    return results.length > 0 ? (
        <VirtuosoGrid
            // style={{ height: 'calc(100vh - 75px)' }}
            totalCount={results.length}
            overscan={4}
            components={{
                List: React.forwardRef(({ style, children }, listRef) => (
                    <div style={{ ...style, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} ref={listRef}>{children}</div>
                )),
                Item: ({ children, className, ...props }) => (
                    <div className={`Emoji ${className}`} { ...props }>{ children }</div>
                )
            }}
            itemContent={index => <Emoji item={results[index]} />}
        />
    ) : <Spinner />;
}

export const Results = ({ hasResults, results }) => (
    <div className="Results">
        { renderItems(hasResults, results) }
    </div>
)
