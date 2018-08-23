import React, { Component } from 'react';
import './style.scss';
import { connect, Field, EasyField } from 'react-formutil';
import withToast from 'utils/withToast';
import FieldFile from 'components/FieldFile';
import http from 'utils/http';

@connect
class Info extends Component {
    onClick = () => {
        const { $formutil } = this.props;
        const { $params, $invalid, $errors } = $formutil;

        if ($invalid) {
            const firstError = Object.values(Object.values($errors)[0])[0];
            this.props.showToast(firstError);
        } else {
            let postArr = [];

            for (let item in $params) {
                if (item) {
                    postArr.push({
                        key: item,
                        val: $params[item]
                    });
                }
            }

            http
                .post('http://39.106.221.165/app/app-put/44/890D05A417BE05A0', JSON.stringify(postArr), {
                    useJson: true
                })
                .then(resp => {
                    this.props.onSubmit();
                })
                .catch(err => {
                    this.props.showToast(err.error_msg);
                });
        }
    };

    render() {
        return (
            <div className="swiper-slide info">
                <header>
                    <span className="logo" />
                    <p className="question">填写你的信息／获得定制T恤?</p>
                </header>
                <span className="example-img" />
                <div className="congratulation">
                    <label className="congratulation-label">1000万整车产量达成你想说</label>
                    <EasyField
                        autoComplete="off"
                        className="congratulation-input"
                        name="congratulation"
                        required
                        placeholder="请填写对自己的祝福语"
                        validMessage={{ required: '请填写您对自己的祝福语' }}
                    />
                </div>
                <div className="upload-container">
                    <FieldFile
                        name="avatar"
                        required
                        $validators={{
                            required: value => !!value || '请选择您的头像'
                        }}
                    />
                </div>
                <div className="name">
                    <EasyField
                        autoComplete="off"
                        className="name-input"
                        name="name"
                        required
                        placeholder="请输入您的姓名"
                        validMessage={{ required: '请填写您的姓名' }}
                    />
                </div>
                <div className="tel">
                    <EasyField
                        autoComplete="off"
                        className="tel-input"
                        name="tel"
                        required
                        placeholder="请输入您的电话"
                        validMessage={{ required: '请填写您的电话' }}
                    />
                </div>
                <button className="submit-btn" type="button" onClick={this.onClick}>
                    提交
                </button>
            </div>
        );
    }
}

export default withToast(Info);
