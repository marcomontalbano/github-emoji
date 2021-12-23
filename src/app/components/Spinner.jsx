import React from 'react';

import './Spinner.css';

export const Spinner = () => (
    <div className="Spinner jump">
        <img src={`${window.location.pathname.replace(/\/$/, '')}/images/smile.png`} alt="loading" />
        <div className="text">loading</div>
    </div>
)
