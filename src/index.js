import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';

import packageJson from '../package.json';

import './index.css';

const render = (element, container) => {
    if (container.hasChildNodes()) {
        ReactDOM.hydrate(element, container);
    } else {
        ReactDOM.render(element, container);
    }
}

render(
    <App />,
    document.getElementById('root')
);

render(
    <div>v {packageJson.version}</div>,
    document.getElementById('version')
);
