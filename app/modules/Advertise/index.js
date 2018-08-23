import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';

class Advertise extends Component {
    render() {
        return (
            <div className="swiper-slide advertise">
                <span className="logo" />
                <span className="fifteen-year" />
                <ul className="ads">
                    <li className="ad ad1" />
                    <li className="ad ad2" />
                    <li className="ad ad3" />
                </ul>
                <Arrow />
            </div>
        );
    }
}

export default Advertise;
