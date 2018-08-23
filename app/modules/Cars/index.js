import React, { Component } from 'react';
import { connect } from 'react-formutil';
import cars from './config';

@connect
class Cars extends Component {
    render() {
        return <div className="swiper-slide">Cars</div>;
    }
}

export default Cars;
