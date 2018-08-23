import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';

class Home extends Component {
    render() {
        return (
            <div className="swiper-slide home">
                <span className="logo" />
                <span className="car" />
                <div className="content">
                    <p className="p1">来自东风日产</p>
                    <p className="p2">1000万的回忆</p>
                </div>
                <Arrow />
            </div>
        );
    }
}

export default Home;
