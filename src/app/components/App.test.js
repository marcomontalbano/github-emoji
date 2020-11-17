import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', function () {
    it('renders without crashing', () => {
        document.body.innerHTML = `
            <h1></h1>
            <div id="root"></div>
        `;

        ReactDOM.render(<App />, document.getElementById('root'));
    });
});
