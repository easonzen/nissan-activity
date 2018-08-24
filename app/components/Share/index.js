import React, { Component } from 'react';
import Button from 'components/Button';
import SharePic from 'components/SharePic';
import qrcode from 'qrcode';
import { measureFontSize, measureText } from 'utils/canvasUtil';

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
        this.toggle();
    };

    componentDidMount() {
        this.createShare();
    }

    onload = img => {};

    createShare = async () => {
        this.setState({
            loading: true
        });

        try {
            const qrlink = await qrcode.toDataURL(window.location.origin + window.location.pathname);

            this.setState({
                picConfig: [
                    {
                        image: require('../../../static/images/logo.png'),
                        x: 0,
                        y: 0
                    },
                    {
                        image: qrlink,
                        x: 624,
                        y: 1200,
                        width: 100,
                        height: 100
                    },
                    {
                        text: '22222222',
                        x: 296,
                        y: 875,
                        font: '32px Arial',
                        color: '#35304f'
                    },
                    {
                        text: '33333333',
                        x: 507,
                        y: 875,
                        font: '32px Arial',
                        color: '#35304f'
                    },
                    {
                        text: '我在老虎证券认购了',
                        x: 64,
                        y: 100,
                        font: '46px Arial',
                        color: '#fff'
                    },
                    {
                        text: '中国铁塔',
                        x: 64,
                        y: 220,
                        font: measureFontSize('中国铁塔', 92, 470) + 'px Arial',
                        color: '#fff'
                    },
                    {
                        text: '(ZGTT)',
                        x: 64 + measureText('中国铁塔', measureFontSize('中国铁塔', 92, 470) + 'px Arial') + 20,
                        y: 220,
                        font: '50px Arial',
                        color: '#fff'
                    }
                ]
            });
        } catch (error) {}

        this.setState({
            loading: false
        });
    };

    render() {
        return this.state.picConfig ? (
            <div className="share-pic">
                <Button type="primary" block onClick={this.share}>
                    分享我的认购
                </Button>
                <SharePic
                    in={this.state.visible}
                    // save={!APP.isTiger}
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
