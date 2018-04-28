import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './app/components/AppContainer';

import registerServiceWorker from './registerServiceWorker';

import packageJson from '../package.json';

import './index.css';

ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
);

ReactDOM.render(
    (
        <div>
            v {packageJson.version}
        </div>
    ),
    document.getElementById('version')
);

registerServiceWorker();
