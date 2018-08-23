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

@withForm
class App extends Component {
    render() {
        return (
            <div className="activity-container">
                <MySwiper>
                    <Home />
                    <Advertise />
                    <Cars />
                    <Keywords />
                    <Info />
                    <Share />
                </MySwiper>
            </div>
        );
    }
}

export default App;
