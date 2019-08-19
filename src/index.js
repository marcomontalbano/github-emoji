import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';
// import registerServiceWorker from './registerServiceWorker';

import packageJson from '../package.json';

import './index.css';

ReactDOM.render(
    <App />,
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

// registerServiceWorker();
