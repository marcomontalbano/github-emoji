import React, { Component } from 'react';

import './Spinner.css';

class NotFound extends Component {

    render() {
        return (
            <div className="Spinner">
                <img src="images/dizzy_face.png" alt="no results" />
                <div className="text">no results</div>
            </div>
        );
    }

}

export default NotFound;
