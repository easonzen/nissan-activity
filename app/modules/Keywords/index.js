import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';

class Keywords extends Component {
    render() {
        const { dataSource, showTitle, FieldProps } = this.props;

        return (
            <div className="swiper-slide keywords">
                <header style={{ visibility: showTitle ? 'initial' : 'hidden' }}>
                    <span className="logo" />
                    <p className="question">你的东风日产关键词是什么?</p>
                </header>
                <div className="keywords-box">
                    {dataSource.map((item, index) => (
                        <div className="keyword" key={index}>
                            <img className="keyword-img" src={item.img} alt="keyword" />
                            <label className="keyword-label">
                                <input
                                    name={FieldProps.$name}
                                    type="radio"
                                    onChange={ev => FieldProps.$render(item.label)}
                                />
                                {item.label}
                            </label>
                        </div>
                    ))}
                </div>
                <Arrow />
            </div>
        );
    }
}

export default Keywords;
