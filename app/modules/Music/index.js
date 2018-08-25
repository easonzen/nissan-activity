import React, { Component, Fragment } from 'react';
import './style.scss';
import BGM from '../../../static/media/bgm.mp3';
import withToast from 'utils/withToast';

class Music extends Component {
    state = {
        isPlaying: false
    };

    componentDidMount() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && /MicroMessenger/i.test(navigator.userAgent)) {
            window.document.addEventListener('WeixinJSBridgeReady', () => {
                this.refs.player.play();
                this.refs.player.pause();
            });
        }
    }

    togglePlay = () => {
        if (this.refs.player.paused) {
            if (this.refs.player.readyState === 4) {
                this.refs.player.play();
            } else {
                this.props.showToast('音乐正在加载中...');
                this.setState(
                    {
                        isPlaying: true
                    },
                    () => {
                        setTimeout(() => {
                            this.setState({
                                isPlaying: false
                            });
                        }, 500);
                    }
                );
            }
        } else {
            this.refs.player.pause();
        }
    };

    onPlay = () => {
        this.setState({
            isPlaying: true
        });
        let icon = this.refs.icon;
        icon.classList.add('animation');
    };

    onPause = () => {
        this.setState({
            isPlaying: false
        });
        // let container = this.refs.container;
        let icon = this.refs.icon;
        // let iTransform = getComputedStyle(icon).transform;
        // let cTransform = getComputedStyle(container).transform;
        // container.style.transform = cTransform === 'none' ? iTransform : iTransform.concat(' ', cTransform);
        icon.classList.remove('animation');
    };

    render() {
        return (
            <Fragment>
                <audio
                    id="player"
                    src={BGM}
                    autoPlay
                    ref="player"
                    onPlay={this.onPlay}
                    onPause={this.onPause}
                    loop
                    preload="auto"
                />
                <div className="container" ref="container">
                    <i className="music-icon" onClick={this.togglePlay} ref="icon" />
                </div>
            </Fragment>
        );
    }
}

export default withToast(Music);
