import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';
import { connect } from 'react-formutil';

@connect
class Keywords extends Component {
    render() {
        const { dataSource } = this.props;
        return (
            <div className="swiper-slide keywords">
                <header>
                    <span className="logo" />
                    <p className="question">你的东风日产关键词是什么?</p>
                </header>
                <ul className="keywords-box">
                    {dataSource.map((item, index) => (
                        <li className="keyword" key={index}>
                            <img className="keyword-img" src={item.img} alt="keyword" />
                            <label className="keyword-label">{item.label}</label>
                        </li>
                    ))}
                </ul>
                <Arrow />
            </div>
        );
    }
}

export default Keywords;
