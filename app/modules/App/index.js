import React, { Component } from 'react';
import './style.scss';
import MySwiper from 'components/Swiper';
import Home from '../Home';
import Advertise from '../Advertise';
import Cars from '../Cars';
import Keywords from '../Keywords';
import Info from '../Info';
import Share from '../Share';
import { withForm } from 'react-formutil';
import config from '../config';

const { keywords, cars } = config;

console.log(cars);

@withForm
class App extends Component {
    render() {
        return (
            <div className="activity-container">
                <MySwiper>
                    <Home />
                    <Advertise />
                    <Cars dataSource={cars.slice(0, 8)} />
                    <Cars dataSource={cars.slice(8, 16)} />
                    <Keywords dataSource={keywords.slice(0, 8)} />
                    <Keywords dataSource={keywords.slice(8, 16)} />
                    <Keywords dataSource={keywords.slice(16, 24)} />
                    <Info />
                    <Share />
                </MySwiper>
            </div>
        );
    }
}

export default App;
