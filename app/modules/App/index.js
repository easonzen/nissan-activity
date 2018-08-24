import React, { Component, Fragment } from 'react';
import './style.scss';
import MySwiper from 'components/Swiper';
import Home from '../Home';
import Advertise from '../Advertise';
import Cars from '../Cars';
import Keywords from '../Keywords';
import Info from '../Info';
import Result from '../Result';
import { withForm, Field } from 'react-formutil';
import config from '../config';

const { keywords, cars } = config;

class App extends Component {
    render() {
        return (
            <div className="activity-container">
                <MySwiper>
                    <Home />
                    <Advertise />
                    <Field
                        name="car"
                        required
                        $validators={{
                            required: value => !!value || '请选择您喜欢的车'
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
                        $validators={{
                            required: value => !!value || '请选择您喜欢的关键字'
                        }}>
                        {props => (
                            <Fragment>
                                <Keywords FieldProps={props} showTitle dataSource={keywords.slice(0, 8)} />
                                <Keywords FieldProps={props} dataSource={keywords.slice(8, 16)} />
                                <Keywords FieldProps={props} dataSource={keywords.slice(16, 24)} />
                            </Fragment>
                        )}
                    </Field>
                    <Info />
                </MySwiper>
            </div>
        );
    }
}

export default withForm(App);
