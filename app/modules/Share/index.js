import React, { Component } from 'react';
import { connect } from 'react-formutil';

@connect
class Share extends Component {
    render() {
        return <div className="swiper-slide">Share</div>;
    }
}

export default Share;
