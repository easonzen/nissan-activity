import React, { Component, Fragment } from 'react';
import './style.scss';
import { connect, EasyField } from 'react-formutil';
import withToast from 'utils/withToast';
import FieldFile from 'components/FieldFile';
import http from 'utils/http';
import Share from 'components/Share';
import Loading from 'components/Loading';

@connect
class Info extends Component {
    state = {
        isLoading: false
    };

    onClick = () => {
        const { $formutil } = this.props;
        const { $params, $invalid, $errors } = $formutil;
        const { isLoading } = this.state;

        if ($invalid) {
            const firstError = Object.values(Object.values($errors)[0])[0];
            this.props.showToast(firstError);
        } else {
            this.setState({
                isLoading: true
            });

            let postArr = [];

            for (let item in $params) {
                if (item !== 'car') {
                    postArr.push({
                        key: item,
                        val: $params[item]
                    });
                } else {
                    postArr.push({
                        key: item,
                        val: $params[item].label
                    });
                }
            }

            http
                .post('http://39.106.221.165/app/app-put/44/890D05A417BE05A0', postArr, {
                    useJson: true
                })
                .then(
                    resp => {
                        this.shareComponent.share();
                    },
                    err => {
                        this.props.showToast(err.error_msg);
                    }
                )
                .then(() => {
                    this.setState({
                        isLoading: false
                    });
                });
            // this.shareComponent.share();
        }
    };

    onShare = shareComponent => {
        this.shareComponent = shareComponent;
    };

    render() {
        const { isLoading } = this.state;
        return (
            <Fragment>
                {isLoading && <Loading global />}
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
                            maxLength="17"
                            placeholder="请填写对自己的祝福语"
                            validMessage={{ required: '请填写您对自己的祝福语', maxLength: '最多输入17个字符' }}
                        />
                    </div>
                    <div className="upload-container">
                        <FieldFile
                            name="avatar"
                            // required
                            // $validators={{
                            //     required: value => !!value || '请选择您的头像'
                            // }}
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
                    <Share onShare={this.onShare} />
                </div>
            </Fragment>
        );
    }
}

export default withToast(Info);
