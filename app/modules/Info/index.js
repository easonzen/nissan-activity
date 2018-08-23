import React, { Component } from 'react';
import './style.scss';
import { connect, Field } from 'react-formutil';

@connect
class Info extends Component {
    onClick = () => {
        this.props.onSubmit();
    };

    render() {
        return (
            <div className="swiper-slide info">
                <header>
                    <span className="logo" />
                    <p className="question">填写你的信息／获得定制T恤?</p>
                </header>
                <span className="example-img" />
                <Field name="congratulation" required $validators={this.$validators}>
                    {props => (
                        <div className="congratulation">
                            <label className="congratulation-label">1000万整车产量达成你想说</label>
                            <input
                                type="text"
                                className="congratulation-input"
                                placeholder="请填写对自己的祝福语"
                                value={props.$value}
                                onChange={ev => props.$render(ev.target.value.trim())}
                            />
                        </div>
                    )}
                </Field>
                <Field name="pic" required $validators={this.$validators}>
                    {props => (
                        <div className="pic">
                            <label className="pic-label">请上传你的照片</label>
                            <div className="upload">
                                <div className="upload-layer" />
                                <input type="file" className="upload-input" />
                            </div>
                        </div>
                    )}
                </Field>
                <Field name="name" required $validators={this.$validators}>
                    {props => (
                        <div className="name">
                            <input type="text" className="name-input" placeholder="请输入你的名字" />
                        </div>
                    )}
                </Field>
                <Field name="tel" required $validators={this.$validators}>
                    {props => (
                        <div className="tel">
                            <input type="text" className="tel-input" placeholder="请输入你的电话" />
                        </div>
                    )}
                </Field>
                <Field name="address" required $validators={this.$validators}>
                    {props => (
                        <div className="address">
                            <input type="text" className="address-input" placeholder="请输入你的地址" />
                        </div>
                    )}
                </Field>
                <button className="submit-btn" type="button" onClick={this.onClick}>
                    提交
                </button>
            </div>
        );
    }
}

export default Info;
