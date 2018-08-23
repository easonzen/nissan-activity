import React, { Component } from 'react';
import './style.scss';
import MySwiper from 'components/Swiper';
import Home from '../Home';
import Advertise from '../Advertise';
import Cars from '../Cars';
import Keywords from '../Keywords';
import Info from '../Info';
import Share from '../Share';
import { withForm, Field } from 'react-formutil';
import config from '../config';

const { keywords, cars } = config;

class App extends Component {
    state = {
        toShare: false
    };

    submit = () => {
        console.log('submit');
        this.setState({
            toShare: true
        });
    };

    render() {
        const { toShare } = this.state;

        return (
            <div className="activity-container">
                {toShare ? (
                    <Share />
                ) : (
                    <MySwiper>
                        <Home />
                        <Advertise />
                        <Field name="car">
                            <Cars dataSource={cars.slice(0, 8)} />
                            <Cars dataSource={cars.slice(8, 16)} />
                        </Field>
                        <Keywords dataSource={keywords.slice(0, 8)} />
                        <Keywords dataSource={keywords.slice(8, 16)} />
                        <Keywords dataSource={keywords.slice(16, 24)} />
                        <Info onSubmit={this.submit} />
                    </MySwiper>
                )}
            </div>
        );
    }
}

export default withForm(App);
