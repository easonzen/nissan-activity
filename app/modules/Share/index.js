import React, { Component } from 'react';
import './style.scss';
import { connect } from 'react-formutil';

@connect
class Share extends Component {
    render() {
        return (
            <div className="swiper-slide share">
                <div className="share-img" />
            </div>
        );
    }
}

export default Share;
