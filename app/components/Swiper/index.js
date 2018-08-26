import React, { Component } from 'react';
import './style.scss';
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';
import $ from 'jquery';

class MySwiper extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            direction: 'vertical',
            on: {
                slideNextTransitionEnd: function() {
                    let $current = $('.swiper-slide-active');
                    if ($current.hasClass('advertise')) {
                        let children = $current.children('p');
                        for (let i = 0; i < children.length; i++) {
                            setTimeout(function() {
                                $(children[i]).addClass('show');
                            }, i * 1000);
                        }
                    }
                }
            }
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
