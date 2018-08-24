import React, { Component, Fragment } from 'react';
import './style.scss';
import BGM from '../../../static/media/bgm.mp3';

class Music extends Component {
    state = {
        isPlaying: false
    };
    componentDidMount() {}

    togglePlay = () => {
        if (this.refs.player.paused) {
            this.refs.player.play();
        } else {
            this.refs.player.pause();
        }
    };

    onPlay = () => {
        this.setState({
            isPlaying: true
        });
    };

    onPause = () => {
        this.setState({
            isPlaying: false
        });
    };

    render() {
        const { isPlaying } = this.state;
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
                    preload
                />
                <i className={isPlaying ? 'music-icon' : 'music-icon paused'} onClick={this.togglePlay} />
            </Fragment>
        );
    }
}

export default Music;
