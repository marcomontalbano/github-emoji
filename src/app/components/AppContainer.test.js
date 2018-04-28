import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';

describe('AppContainer', function () {
    xit('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppContainer />, div);
    });
});
