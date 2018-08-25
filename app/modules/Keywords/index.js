import React, { Component } from 'react';
import './style.scss';
import Arrow from 'components/Arrow';

class Keywords extends Component {
    render() {
        const { dataSource, showTitle, FieldProps } = this.props;

        return (
            <div className="swiper-slide keywords">
                <header style={{ visibility: showTitle ? 'initial' : 'hidden' }}>
                    {/* <span className="logo" /> */}
                    <p className="question">选择你的东风日产关键词</p>
                </header>
                <div className="keywords-box">
                    {dataSource.map((item, index) => (
                        <div className="keyword" key={index}>
                            <img className="keyword-img" src={item.img} alt="keyword" />
                            <label htmlFor={item.label} className="label-container">
                                <div className="radio-container">
                                    <input
                                        id={item.label}
                                        type="radio"
                                        name={FieldProps.$name}
                                        onChange={ev => FieldProps.$render({ label: item.label })}
                                    />
                                    <label htmlFor={item.label} className="keyword-label" />
                                </div>
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
