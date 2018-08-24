import React, { Component } from 'react';
import SharePic from 'components/SharePic';
import qrcode from 'qrcode';
import { connect } from 'react-formutil';

@connect
class Share extends Component {
    state = {
        visible: false,
        loading: true,
        picConfig: []
    };

    toggle = visible =>
        this.setState({
            visible: !this.state.visible
        });

    share = () => {
        this.createShare();
    };

    componentDidMount() {
        this.props.onShare(this);
    }

    onload = img => {};

    createShare = async () => {
        const { $formutil } = this.props;
        const { $params } = $formutil;

        this.setState({
            loading: true
        });

        try {
            const qrlink = await qrcode.toDataURL(window.location.origin + window.location.pathname);

            this.setState({
                picConfig: [
                    {
                        image: require('../../../static/images/logo.png'),
                        width: 172,
                        height: 213,
                        x: 20,
                        y: 0
                    },
                    {
                        image: require(`../../../static/images/${$params.car.value}-big.png`),
                        width: 654,
                        height: 349,
                        x: 45,
                        y: 365
                    },
                    {
                        text: $params.keyword || '匠心',
                        x: 30,
                        y: 900,
                        font: '64px Arial',
                        color: '#000'
                    },
                    {
                        text: $params.congratulation || '东风日产1000万的回忆',
                        x: 30,
                        y: 970,
                        font: '32px Arial',
                        color: '#333333'
                    },
                    {
                        image: qrlink,
                        x: 15,
                        y: 1000,
                        width: 150,
                        height: 150
                    },
                    {
                        text: '“分享有机会获得东风日产',
                        x: 166,
                        y: 1070,
                        font: '32px Arial',
                        color: '#333333'
                    },
                    {
                        text: '1000万整车产量达成纪念T恤”',
                        x: 166,
                        y: 1110,
                        font: '32px Arial',
                        color: '#333333'
                    }
                ]
            });

            this.toggle();
        } catch (error) {}

        this.setState({
            loading: false
        });
    };

    render() {
        return this.state.picConfig ? (
            <div className="share-pic">
                <SharePic
                    in={this.state.visible}
                    save={true}
                    onload={this.onload}
                    config={this.state.picConfig}
                    close={this.toggle}
                />
            </div>
        ) : null;
    }
}

export default Share;
