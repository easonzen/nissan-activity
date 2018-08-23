import React, { Component } from 'react';
import { connect } from 'react-formutil';
import keywords from './config';

@connect
class Keywords extends Component {
    render() {
        return (
            <div className="swiper-slide">
                <ul>
                    {keywords.map((item, index) => (
                        <li key={index}>
                            <img className="keyword-img" src={item.img} alt="keyword" />
                            <label className="keyword-label">{item.label}</label>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Keywords;
