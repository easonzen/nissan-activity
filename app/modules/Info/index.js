import React, { Component } from 'react';
import { connect } from 'react-formutil';

@connect
class Info extends Component {
    render() {
        return <div className="swiper-slide">Info</div>;
    }
}

export default Info;
