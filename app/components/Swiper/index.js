import React, { Component } from 'react';
import './style.scss';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

class MySwiper extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'vertical'
        });
    }

    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">{this.props.children}</div>
            </div>
        );
    }
}

export default MySwiper;
