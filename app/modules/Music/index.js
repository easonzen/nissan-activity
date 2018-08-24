import React, { Component } from 'react';
import './style.scss';

class Music extends Component {
    render() {
        // return <i className="music-icon" />;
        return (
            <iframe
                frameBorder="no"
                border="0"
                marginWidth="0"
                marginHeight="0"
                width="298"
                height="52"
                src="//music.163.com/outchain/player?type=2&id=414980898&auto=1&height=32"
            />
        );
    }
}

export default Music;
