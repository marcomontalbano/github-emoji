import React from 'react';

const NotFound = () => (
    <div className="Spinner">
        <img src={`${window.location.pathname.replace(/\/$/, '')}/images/dizzy_face.png`} alt="no results" />
        <div className="text">no results</div>
    </div>
)

export default NotFound;
