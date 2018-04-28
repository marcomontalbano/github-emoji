import React, { Component } from 'react';

import './Spinner.css';

class Spinner extends Component {

    render() {
        return (
            <div className="Spinner jump">
                <img src="/images/smile.png" alt="loading" />
                <div className="text">loading</div>
            </div>
        );
    }

}

export default Spinner;
