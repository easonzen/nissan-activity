import React, { Component, Fragment } from 'react';
import './style.scss';
import BGM from '../../../static/media/bgm.mp3';
import withToast from 'utils/withToast';

class Music extends Component {
    state = {
        isPlay: false,
        hasPlay: false
    };

    componentDidMount() {
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && /MicroMessenger/i.test(navigator.userAgent)) {
            window.document.addEventListener('WeixinJSBridgeReady', () => {
                try {
                    this.refs.player.play();
                    // this.refs.player.pause();
                } catch (error) {}
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
                        isPlay: true
                    },
                    () => {
                        setTimeout(() => {
                            this.setState({
                                isPlay: false
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
            isPlay: true,
            hasPlay: true
        });
        // let icon = this.refs.icon;
        // icon.classList.add('animation');
    };

    onPause = () => {
        this.setState({
            isPlay: false
        });
        // let container = this.refs.container;
        // let icon = this.refs.icon;
        // let iTransform = getComputedStyle(icon).transform;
        // let cTransform = getComputedStyle(container).transform;
        // container.style.transform = cTransform === 'none' ? iTransform : iTransform.concat(' ', cTransform);
        // icon.classList.remove('animation');
    };

    render() {
        const { isPlay, hasPlay } = this.state;
        return (
            <Fragment>
                <div className="container" ref="container">
                    <div
                        className={isPlay || hasPlay ? 'music-icon play' : 'music-icon'}
                        // className="music-icon play"
                        style={{
                            animationPlayState: isPlay ? 'running' : 'paused',
                            WebkitAnimationPlayState: isPlay ? 'running' : 'paused',
                            MozAnimationPlayState: isPlay ? 'running' : 'paused'
                        }}
                        onClick={this.togglePlay}
                        ref="icon">
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
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default withToast(Music);
