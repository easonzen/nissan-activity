import React, { Component, Fragment } from 'react';
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
        toShare: true
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
                        <Field
                            name="car"
                            required
                            validMessage={{
                                required: '请选择车型'
                            }}>
                            {props => (
                                <Fragment>
                                    <Cars FieldProps={props} showTitle dataSource={cars.slice(0, 8)} />
                                    <Cars FieldProps={props} dataSource={cars.slice(8, 16)} />
                                </Fragment>
                            )}
                        </Field>
                        <Field
                            name="keyword"
                            required
                            validMessage={{
                                required: '请选择关键词'
                            }}>
                            {props => (
                                <Fragment>
                                    <Keywords FieldProps={props} showTitle dataSource={keywords.slice(0, 8)} />
                                    <Keywords FieldProps={props} dataSource={keywords.slice(8, 16)} />
                                    <Keywords FieldProps={props} dataSource={keywords.slice(16, 24)} />
                                </Fragment>
                            )}
                        </Field>
                        <Info onSubmit={this.submit} />
                    </MySwiper>
                )}
            </div>
        );
    }
}

export default withForm(App);
