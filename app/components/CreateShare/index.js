import React, { Component } from 'react';
import Button from 'components/Button';
import SharePic from 'components/SharePic';
import qrcode from 'qrcode';
import moment from 'moment';
import formatPrice from 'utils/formatPrice';
import APP from 'stores/APP';
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

    onload = img => {
        if (APP.isTiger) {
            try {
                setTimeout(() => {
                    share.shareScreenshot();

                    setTimeout(() => {
                        this.toggle();
                    }, 500);
                }, 500);
            } catch (error) {}
        }
    };

    createShare = async () => {
        this.setState({
            loading: true
        });

        try {
            let latestPrice;
            const qrlink = await qrcode.toDataURL(window.location.origin + window.location.pathname);

            this.setState({
                picConfig: [
                    {
                        image: qrlink,
                        x: 624,
                        y: 1200,
                        width: 100,
                        height: 100
                    },
                    {
                        text: moment().format('YYYY-MM-DD HH:mm:ss'),
                        font: '20px Arial',
                        x: 430,
                        y: 1280,
                        color: '#333'
                    },
                    {
                        text: '我在老虎证券认购了',
                        x: 64,
                        y: 100,
                        font: '46px Arial',
                        color: '#000'
                    },
                    {
                        text: ipoData.companyName,
                        x: 64,
                        y: 220,
                        font: measureFontSize('nidaye', 92, 470) + 'px Arial',
                        color: '#000'
                    },
                    {
                        text: '(' + ipoData.symbol + ')',
                        x:
                            64 +
                            measureText(
                                ipoData.companyName,
                                measureFontSize(ipoData.companyName, 92, 470) + 'px Arial'
                            ) +
                            20,
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
                <SharePic
                    in={this.state.visible}
                    save={false}
                    onload={this.onload}
                    config={this.state.picConfig}
                    close={this.toggle}
                />
            </div>
        ) : null;
    }
}

export default Share;
